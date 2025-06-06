
import { useAppSelector } from "@/store/hooks"

export const Dashboard = () => {
  const { user, isLoading } = useAppSelector((state) => state.auth)

  if (isLoading) {
    return (
      <div className="w-full h-[50vh] flex justify-center items-center">
        <div className="animate-spin">Loading...</div>
      </div>
    )
  }

  if (!user) {
    return null;
  }

  return (
    <div className="w-full p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      {/* Dashboard content */}
    </div>
  )
}
