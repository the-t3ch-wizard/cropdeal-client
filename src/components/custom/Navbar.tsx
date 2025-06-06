import { useAppSelector } from "@/store/hooks"
import { useAppDispatch } from "@/store/hooks"
import { Logo } from "./Logo"
import { Button } from "../ui/button"
import { Link, useNavigate } from "react-router-dom"
import { LuUser, LuLogOut } from "react-icons/lu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { logout } from "@/store/slices/authSlice"
import { toast } from "sonner"

export const Navbar = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn)
  const user = useAppSelector((state) => state.auth.user)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logout())
    toast.success("Logged out successfully")
    navigate("/login")
  }

  return (
    <div className="w-full h-16 bg-background border flex justify-between items-center px-4">
      <Logo />
      <div className="flex gap-4">
        {isLoggedIn ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>
                <LuUser className="mr-2 h-4 w-4" />
                {user?.name || "Profile"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={() => navigate("/profile")}>
                <LuUser className="mr-2 h-4 w-4" />
                My Profile
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                onClick={handleLogout}
                className="text-destructive focus:text-destructive"
              >
                <LuLogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <>
            <Link to="/register">
              <Button variant="outline">
                Register
              </Button>
            </Link>
            <Link to="/login">
              <Button>
                Login
              </Button>
            </Link>
          </>
        )}
      </div>
    </div>
  )
}
