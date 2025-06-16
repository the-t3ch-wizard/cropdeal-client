import { useAppSelector } from "@/store/hooks"
import { useAppDispatch } from "@/store/hooks"
import { Logo } from "./Logo"
import { Button } from "../ui/button"
import { Link, useNavigate } from "react-router-dom"
import { logout } from "@/store/slices/authSlice"
import { toast } from "sonner"
import { LeftSideBarNavListDealer, LeftSideBarNavListFarmer } from "@/contants/AppLayout"

export const LeftSidebar = () => {

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
    <div className="w-96 min-h-screen bg-lime-400 border flex flex-col justify-between items-center p-4 py-6">
      <Logo />
      
      <div className="w-full">
        {
          isLoggedIn ?
            null
          :
          user?.role == "farmer" ?
          (
            <div className="w-full flex flex-col gap-4">
              {LeftSideBarNavListFarmer?.map((ele) => 
                <Button className="px-5 flex justify-start items-center gap-4" variant="ghost">
                  <span>
                  {
                    ele.icon != null ?
                    <ele.icon className="size-5" /> :
                    null
                  }
                  </span>
                  <p>
                  {
                    ele.name
                  }
                  </p>
                </Button>
              )}
            </div>
          )
          :
          user?.role == "dealer" ?
          (
            <div className="w-full flex flex-col gap-4">
              {LeftSideBarNavListDealer?.map((ele) => 
                <Link to={ele.route} className="w-full">
                  <Button className="w-full px-5 flex justify-start items-center gap-4" variant="ghost">
                    <span>
                    {
                      ele.icon != null ?
                      <ele.icon className="size-5" /> :
                      null
                    }
                    </span>
                    <p>
                    {
                      ele.name
                    }
                    </p>
                  </Button>
                </Link>
              )}
            </div>
          )
          :
          (
            <div className="w-full flex flex-col gap-4">
              {LeftSideBarNavListDealer?.map((ele) => 
                <Link to={ele.route} className="w-full">
                  <Button className="w-full px-5 flex justify-start items-center gap-4" variant="ghost">
                    <span>
                    {
                      ele.icon != null ?
                      <ele.icon className="size-5" /> :
                      null
                    }
                    </span>
                    <p>
                    {
                      ele.name
                    }
                    </p>
                  </Button>
                </Link>
              )}
            </div>
          )
        }
      </div>
    </div>
  )
}
