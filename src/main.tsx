import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from "@/App";
import {BrowserRouter} from "react-router";
import { AuthProvider } from "@/hooks/useAuth";
import { Toaster } from "@/components/ui/sonner";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <App/>
                <Toaster />
            </AuthProvider>
        </BrowserRouter>
    </StrictMode>,
)
