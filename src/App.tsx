import { Routes, Route } from 'react-router-dom';
import './globals.css';
import SigninForm from './_auth/forms/SigninForm';
import { Home } from './_root/pages';
import SignupForm from './_auth/forms/SignupForm';
import AuthLayout from './_auth/AuthLayout';
import RoutLayout from './_root/RoutLayout';
import { Toaster } from "@/components/ui/toaster"
import Explore from './_root/pages/Explore';
import Saved from './_root/pages/Saved';
import AllUsers from './_root/pages/AllUsers';
import CreatePost from './_root/pages/CreatePost';
import EditPost from './_root/pages/EditPost';
import PostDetails from './_root/pages/PostDetails';
import Profile from './_root/pages/Profile';
import UpdateProfile from './_root/pages/UpdateProfile';


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
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/saved" element={<Saved />} />
                    <Route path="/all-users" element={<AllUsers />} />
                    <Route path="/create-post" element={<CreatePost />} />
                    <Route path="/update-post/:id" element={<EditPost />} />
                    <Route path="/posts/:id" element={<PostDetails />} />
                    <Route path="/profile/:id/*" element={<Profile />} />
                    <Route path="/update-profile/:id" element={<UpdateProfile />} />
                </Route>
            </Routes>

            <Toaster />
        </main>

    )
}

export default App