import { useAppSelector } from "@/store/hooks"
import { useAppDispatch } from "@/store/hooks"
import { Logo } from "./Logo"
import { Button } from "../ui/button"
import { Link, useNavigate } from "react-router-dom"
import { logout } from "@/store/slices/authSlice"
import { toast } from "sonner"
import { LeftSideBarNavListDealer, LeftSideBarNavListFarmer } from "@/contants/AppLayout"
import { Bell } from "lucide-react"

export const RightSidebar = () => {

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
    <div className="w-[35rem] min-h-screen bg-lime-400 border flex flex-col justify-between items-center">
      
      <div className="w-full h-96 overflow-hidden bg-orange-200 relative">
        <div className="absolute top-0 left-0 w-full flex justify-between items-center pt-6 px-4">
          <Button variant="ghost" className="rounded-full">
            <Bell />
          </Button>

          <Button>
            ok
          </Button>
        </div>
        {/* <img src="farmer_market_poster.png" alt="" className="absolute bottom-0" /> */}
        <img src="dealer_poster.png" alt="" className="absolute bottom-0" />
      </div>
      
      <div className="w-full p-4 py-6">
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
