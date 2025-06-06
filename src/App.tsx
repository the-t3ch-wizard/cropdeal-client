import { Route, Routes } from "react-router-dom"
import { HomeLayout } from "./app/HomeLayout"
import { Home } from "./app/Home"
import { PageNotFound } from "./app/_/PageNotFound"
import { Login } from "./app/login/Login"
import { Register } from "./app/register/Register"
import { Dashboard } from "./app/dashboard/Dashboard"
import { Profile } from "./app/profile/Profile"
import { ProtectedRoute } from "./components/auth/ProtectedRoute"

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        {/* Public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="" element={<Home />} />

        {/* Protected routes */}
        <Route path="dashboard" element={
          // <ProtectedRoute>
            <Dashboard />
          // </ProtectedRoute>
        } />
        <Route path="profile" element={
          // <ProtectedRoute>
            <Profile />
          // </ProtectedRoute>
        } />

        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}



