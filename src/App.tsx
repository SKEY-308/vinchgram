import { Routes, Route } from 'react-router-dom';
import './globals.css';
import SigninForm from './_auth/forms/SigninForm';
import { Home } from './_root/pages';
import SignupForm from './_auth/forms/SignupForm';
import AuthLayout from './_auth/AuthLayout';
import RoutLayout from './_root/RoutLayout';
import { Toaster } from "@/components/ui/toaster"


const App = () => {
    return (
        <main className="flex h-screen">
            <Routes>
                {/* public routes */}
                <Route element={<AuthLayout />}>
                    <Route path="/sign-in" element={<SigninForm />} />
                    <Route path="/sign-up" element={<SignupForm />} />
                </Route>


                {/* private routes */}
                <Route element={<RoutLayout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>

            <Toaster />
        </main>

    )
}

export default App