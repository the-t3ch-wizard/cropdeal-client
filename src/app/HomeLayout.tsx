import { Navbar } from "@/components/custom/Navbar"
import { Outlet, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { whoami } from "@/services/authService"
import { useAppDispatch } from "@/store/hooks"
import { setToken, setUser, logout, setLoading } from "@/store/slices/authSlice"
import { toast } from "sonner"
import axios, { AxiosError } from "axios"

export const HomeLayout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setupAuthToken();
  }, []);

  const setupAuthToken = async () => {
    try {
      const authToken = localStorage.getItem("authToken");

      if (!authToken) {
        dispatch(logout());
        return;
      }

      dispatch(setLoading(true));
      dispatch(setToken(authToken));
      
      try {
        const response = await whoami();
        dispatch(setUser(response));
      } catch (error) {
        handleAuthError(error);
      }
    } catch (error) {
      handleAuthError(error);
    } finally {
      dispatch(setLoading(false));
    }
  }

  const handleAuthError = (error: unknown) => {
    dispatch(logout());
    
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      
      switch (axiosError.response?.status) {
        case 401:
          toast.error("Session expired. Please login again.");
          navigate("/login");
          break;
        case 403:
          toast.error("Access denied. Please login with appropriate permissions.");
          navigate("/login");
          break;
        case 404:
          toast.error("Authentication service not found.");
          break;
        case 500:
          toast.error("Server error. Please try again later.");
          break;
        default:
          if (!navigator.onLine) {
            toast.error("No internet connection.");
          } else {
            toast.error("An unexpected error occurred.");
          }
      }
    } else {
      toast.error("An unexpected error occurred.");
      console.error("Auth Error:", error);
    }
  }

  return (
    <div className="min-h-screen w-full flex flex-col justify-start items-center">
      <Navbar />
      <Outlet />
    </div>
  )
}
