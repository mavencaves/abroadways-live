import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { authApi } from "@/lib/api";

type User = {
  _id: string;
  name: string;
  email: string;
  role: string;
};

const AUTH_TOKEN_KEY = "auth_token";
const AUTH_USER_KEY = "auth_user";
const AUTH_EXPIRED_EVENT = "abroadways:auth-expired";

const persistAuthState = (token: string | null, user: User | null) => {
  if (token) {
    localStorage.setItem(AUTH_TOKEN_KEY, token);
  } else {
    localStorage.removeItem(AUTH_TOKEN_KEY);
  }

  if (user) {
    localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
  } else {
    localStorage.removeItem(AUTH_USER_KEY);
  }
};

type AuthContextValue = {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<User>;
  register: (name: string, email: string, password: string) => Promise<User>;
  logout: () => void;
  refreshMe: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedToken = localStorage.getItem(AUTH_TOKEN_KEY);
    const savedUserRaw = localStorage.getItem(AUTH_USER_KEY);
    let savedUser: User | null = null;

    if (savedUserRaw) {
      try {
        savedUser = JSON.parse(savedUserRaw) as User;
      } catch {
        localStorage.removeItem(AUTH_USER_KEY);
      }
    }
    setToken(savedToken);
    setUser(savedUser);
    if (!savedToken) {
      setIsLoading(false);
      return;
    }
    authApi
      .me()
      .then((res) => {
        setUser(res.data);
        persistAuthState(savedToken, res.data);
      })
      .catch(() => {
        setToken(null);
        setUser(null);
        persistAuthState(null, null);
      })
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    const handleAuthExpired = () => {
      persistAuthState(null, null);
      setToken(null);
      setUser(null);
      setIsLoading(false);
    };

    window.addEventListener(AUTH_EXPIRED_EVENT, handleAuthExpired);
    return () => {
      window.removeEventListener(AUTH_EXPIRED_EVENT, handleAuthExpired);
    };
  }, []);

  const login = async (email: string, password: string) => {
    const res = await authApi.login({ email, password });
    const newToken: string = res.data.token;
    persistAuthState(newToken, null);
    setToken(newToken);
    // fetch profile after login
    const me = await authApi.me();
    setUser(me.data);
    persistAuthState(newToken, me.data);
    return me.data;
  };

  const register = async (name: string, email: string, password: string) => {
    const res = await authApi.register({ name, email, password });
    const newToken: string = res.data.token;
    persistAuthState(newToken, null);
    setToken(newToken);
    // fetch profile after register
    const me = await authApi.me();
    setUser(me.data);
    persistAuthState(newToken, me.data);
    return me.data;
  };

  const logout = () => {
    persistAuthState(null, null);
    setToken(null);
    setUser(null);
  };

  const refreshMe = async () => {
    const me = await authApi.me();
    setUser(me.data);
    if (token) {
      persistAuthState(token, me.data);
    }
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
