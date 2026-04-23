import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { useAuth } from "@/hooks/useAuth";
import { authDebug, getOAuthUrl } from "@/lib/api";
import GoogleIcon from "@/components/google-icon";
import FacebookIcon from "@/components/facebook-icon";

export default function SignInPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const { login, token, user, isLoading } = useAuth();
    const navigate = useNavigate();
    const location = useLocation() as any;
    const from = location.state?.from?.pathname || null;
    const getDefaultRouteForRole = (role?: string) => (role === "user" ? "/student/dashboard" : "/dashboard");
    const storedUser = typeof window !== "undefined" ? localStorage.getItem("auth_user") : null;
    const debugState = useMemo(
        () => ({
            apiBaseUrl: authDebug.apiBaseUrl,
            loginEndpoint: authDebug.loginEndpoint,
            hasToken: Boolean(token || (typeof window !== "undefined" && localStorage.getItem("auth_token"))),
            hasCurrentUser: Boolean(user || storedUser),
            loading: submitting || isLoading,
            error: errorMessage ?? "none",
        }),
        [errorMessage, isLoading, storedUser, submitting, token, user]
    );

    useEffect(() => {
        if (!isLoading && token && user) {
            const target = from && (from.startsWith("/dashboard") || from.startsWith("/student"))
                ? from
                : getDefaultRouteForRole(user.role);
            navigate(target, { replace: true });
        }
    }, [from, isLoading, navigate, token, user]);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (submitting) return;
        setErrorMessage(null);

        if (!email.trim() || !password.trim()) {
            setErrorMessage("Please enter both your email address and password.");
            return;
        }

        setSubmitting(true);
        try {
            const nextUser = await login(email.trim(), password);
            const target =
                from && (from.startsWith("/dashboard") || from.startsWith("/student"))
                    ? from
                    : getDefaultRouteForRole(nextUser.role);
            navigate(target, { replace: true });
        } catch (error: any) {
            const status = error?.response?.status;
            const message =
                status === 401 || status === 403
                    ? error?.response?.data?.message || "Your email or password is incorrect."
                    : error?.code === "ERR_NETWORK"
                      ? "Cannot reach the authentication server. Please check the backend server and API base URL."
                      : error?.response?.data?.message || error?.message || "Login failed. Please try again.";
            setErrorMessage(message);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Card className="border border-white/20 bg-white/95 shadow-[0_26px_70px_rgba(15,23,42,0.18)] backdrop-blur-xl">
            <CardHeader className="space-y-2 text-center">
                <CardTitle className="text-3xl font-semibold text-slate-950">Sign In</CardTitle>
                <CardDescription className="mx-auto max-w-sm text-sm leading-7 text-slate-600">
                    Access your Abroadways account to continue with consultations, student tools, and future planning support.
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
                <form className="space-y-5" onSubmit={onSubmit}>
                    <div className="space-y-2">
                        <Label htmlFor="email" className="font-medium text-slate-800">
                            Email Address
                        </Label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter your email address"
                                className="h-12 pl-11"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="password" className="font-medium text-slate-800">
                                Password
                            </Label>
                            <Button type="button" variant="link" className="h-auto p-0 text-sm text-blue-700 hover:text-blue-800">
                                Forgot password?
                            </Button>
                        </div>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                            <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className="h-12 pl-11 pr-11"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                className="absolute right-1 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full text-slate-500 hover:text-slate-800"
                                onClick={() => setShowPassword((prev) => !prev)}
                            >
                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </Button>
                        </div>
                    </div>

                    <Button type="submit" className="h-12 w-full text-base font-semibold text-white" disabled={submitting}>
                        {submitting ? "Signing In..." : "Sign In"}
                    </Button>
                    {errorMessage ? (
                        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                            {errorMessage}
                        </div>
                    ) : null}
                </form>

                <div className="flex items-center">
                    <Separator className="flex-1" />
                    <span className="mx-4 text-sm text-slate-400">or continue with</span>
                    <Separator className="flex-1" />
                </div>

                <div className="space-y-3">
                    <Button
                        variant="outline"
                        className="h-12 w-full justify-center"
                        type="button"
                        onClick={() => (window.location.href = getOAuthUrl("google"))}
                    >
                        <GoogleIcon />
                        Continue with Google
                    </Button>

                    <Button
                        variant="outline"
                        className="h-12 w-full justify-center"
                        type="button"
                        onClick={() => (window.location.href = getOAuthUrl("facebook"))}
                    >
                        <FacebookIcon />
                        Continue with Facebook
                    </Button>
                </div>

                <p className="text-center text-sm text-slate-600">
                    New to Abroadways?{" "}
                    <Button variant="link" asChild className="h-auto p-0 font-semibold text-blue-700 hover:text-blue-800">
                        <Link to="/signup">Create an account</Link>
                    </Button>
                </p>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs leading-6 text-slate-600">
                    <p className="font-semibold text-slate-900">Temporary Auth Debug</p>
                    <p><span className="font-medium">API base URL:</span> {debugState.apiBaseUrl}</p>
                    <p><span className="font-medium">Login endpoint:</span> {debugState.loginEndpoint}</p>
                    <p><span className="font-medium">Token exists:</span> {debugState.hasToken ? "yes" : "no"}</p>
                    <p><span className="font-medium">Current user exists:</span> {debugState.hasCurrentUser ? "yes" : "no"}</p>
                    <p><span className="font-medium">Loading state:</span> {debugState.loading ? "loading" : "idle"}</p>
                    <p><span className="font-medium">Error state:</span> {debugState.error}</p>
                </div>
            </CardContent>
        </Card>
    );
}
