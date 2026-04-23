import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import GoogleIcon from "@/components/google-icon";
import FacebookIcon from "@/components/facebook-icon";
import { useAuth } from "@/hooks/useAuth";
import { getOAuthUrl } from "@/lib/api";

export default function SignUpPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [agree, setAgree] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const { register } = useAuth();
    const navigate = useNavigate();

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (submitting) return;
        setSubmitting(true);
        try {
            if (!agree) return;
            const nextUser = await register(name, email, password);
            navigate(nextUser.role === "user" ? "/student/dashboard" : "/dashboard", { replace: true });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Card className="border border-white/20 bg-white/95 shadow-[0_26px_70px_rgba(15,23,42,0.18)] backdrop-blur-xl">
            <CardHeader className="space-y-2 text-center">
                <CardTitle className="text-3xl font-semibold text-slate-950">Create Your Account</CardTitle>
                <CardDescription className="mx-auto max-w-sm text-sm leading-7 text-slate-600">
                    Join Abroadways to access student tools, manage your profile, and stay connected with study abroad support.
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
                <form className="space-y-5" onSubmit={onSubmit}>
                    <div className="space-y-2">
                        <Label htmlFor="name" className="font-medium text-slate-800">
                            Full Name
                        </Label>
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                            <Input
                                id="name"
                                type="text"
                                placeholder="Enter your full name"
                                className="h-12 pl-11"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>

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
                        <Label htmlFor="password" className="font-medium text-slate-800">
                            Password
                        </Label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                            <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Create a secure password"
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

                    <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
                        <Checkbox
                            id="terms"
                            className="mt-0.5"
                            checked={agree}
                            onCheckedChange={(checked) => setAgree(Boolean(checked))}
                        />
                        <Label htmlFor="terms" className="cursor-pointer text-sm leading-7 text-slate-600">
                            I agree to the terms and conditions and understand that Abroadways may contact me about student support services.
                        </Label>
                    </div>

                    <Button type="submit" className="h-12 w-full text-base font-semibold text-white" disabled={submitting || !agree}>
                        {submitting ? "Creating Account..." : "Create Account"}
                    </Button>
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
                    Already have an account?{" "}
                    <Button variant="link" asChild className="h-auto p-0 font-semibold text-blue-700 hover:text-blue-800">
                        <Link to="/login">Sign in</Link>
                    </Button>
                </p>
            </CardContent>
        </Card>
    );
}
