import { Outlet, Link } from "react-router";
import TrustBadge from "@/components/trust-badge";

export default function AuthLayout() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(78,129,255,0.24),_transparent_28%),linear-gradient(135deg,#06142f_0%,#0b2453_58%,#123b86_100%)] px-4 py-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20" />
            <div className="absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
            <div className="absolute -right-16 top-10 h-72 w-72 rounded-full bg-cyan-300/18 blur-3xl" />

            <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl items-center justify-center">
                <div className="grid w-full items-center gap-10 lg:grid-cols-[0.95fr_0.8fr]">
                    <div className="hidden lg:block">
                        <Link to="/" className="inline-flex items-center gap-3 text-white">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-base font-bold text-blue-800 shadow-lg shadow-blue-950/30">
                                A
                            </div>
                            <div>
                                <div className="text-3xl font-semibold tracking-tight">Abroadways</div>
                                <TrustBadge compact className="mt-2" />
                            </div>
                        </Link>

                        <div className="mt-8 max-w-xl">
                            <p className="section-kicker-on-dark">Student Access</p>
                            <h1 className="section-title-on-dark max-w-xl">
                                A premium student support platform for study abroad planning.
                            </h1>
                            <p className="section-copy-on-dark max-w-2xl">
                                Access your account to manage consultations, explore AbroadAI, and stay connected with
                                Abroadways across higher education, scholarships, visas, and exam planning.
                            </p>
                        </div>
                    </div>

                    <div className="mx-auto w-full max-w-md">
                        <div className="mb-6 text-center lg:hidden">
                            <Link to="/" className="inline-flex items-center gap-3 text-white">
                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-base font-bold text-blue-800 shadow-lg shadow-blue-950/30">
                                    A
                                </div>
                                <div className="text-left">
                                    <div className="text-2xl font-semibold tracking-tight">Abroadways</div>
                                    <TrustBadge compact className="mt-2" />
                                </div>
                            </Link>
                        </div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}
