import { useAppSelector } from "@/store/hooks"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LuMail, LuUser, LuUserRound, LuShield } from "react-icons/lu"
import { Separator } from "@/components/ui/separator"
import { logout } from "@/store/slices/authSlice"
import { useAppDispatch } from "@/store/hooks"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

export const Profile = () => {
  const { user, isLoading } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  if (isLoading) {
    return (
      <div className="w-full h-[50vh] flex justify-center items-center">
        <div className="animate-spin">Loading...</div>
      </div>
    )
  }

  const handleLogout = () => {
    dispatch(logout())
    toast.success("Logged out successfully")
    navigate("/login")
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Profile</h1>
        <Button variant="destructive" onClick={handleLogout}>
          Logout
        </Button>
      </div>

      <div className="grid gap-6">
        {/* User Info Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LuUserRound className="w-6 h-6" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <LuUser className="w-4 h-4" />
                  Name
                </div>
                <p className="font-medium">{user?.name}</p>
                <Separator />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <LuMail className="w-4 h-4" />
                  Email
                </div>
                <p className="font-medium">{user?.email}</p>
                <Separator />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <LuShield className="w-4 h-4" />
                  Role
                </div>
                <p className="font-medium capitalize">{user?.role.toLowerCase()}</p>
                <Separator />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Account Settings Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LuShield className="w-6 h-6" />
              Account Settings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 space-x-4">
              <Button variant="outline" className="w-full sm:w-auto">
                Change Password
              </Button>
              <Button variant="outline" className="w-full sm:w-auto">
                Update Profile
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}