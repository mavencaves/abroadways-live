import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { authApi } from "@/lib/api";

type User = {
  _id: string;
  name: string;
  email: string;
  role: string;
};

type AuthContextValue = {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  refreshMe: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedToken = localStorage.getItem("auth_token");
    setToken(savedToken);
    if (!savedToken) {
      setIsLoading(false);
      return;
    }
    authApi
      .me()
      .then((res) => setUser(res.data))
      .finally(() => setIsLoading(false));
  }, []);

  const login = async (email: string, password: string) => {
    const res = await authApi.login({ email, password });
    const newToken: string = res.data.token;
    localStorage.setItem("auth_token", newToken);
    setToken(newToken);
    // fetch profile after login
    const me = await authApi.me();
    setUser(me.data);
  };

  const register = async (name: string, email: string, password: string) => {
    const res = await authApi.register({ name, email, password });
    const newToken: string = res.data.token;
    localStorage.setItem("auth_token", newToken);
    setToken(newToken);
    // fetch profile after register
    const me = await authApi.me();
    setUser(me.data);
  };

  const logout = () => {
    localStorage.removeItem("auth_token");
    setToken(null);
    setUser(null);
  };

  const refreshMe = async () => {
    const me = await authApi.me();
    setUser(me.data);
  };

  const value = useMemo(
    () => ({ user, token, isLoading, login, register, logout, refreshMe }),
    [user, token, isLoading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}


