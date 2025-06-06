import { Card, CardContent } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { loginFormSchema } from "@/validation/login"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { login, whoami } from "@/services/authService"
import { useAppDispatch } from '@/store/hooks'
import { setToken, setUser } from '@/store/slices/authSlice'

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = async (data: z.infer<typeof loginFormSchema>) => {
    try {
      const response = await login(data.email, data.password);
      if (response?.token) {
        dispatch(setToken(response.token));
        const userData = await whoami();
        dispatch(setUser(userData));
        toast.success("Login successful!");
        navigate("/dashboard");
      }
    } catch (error) {
      console.log("Login error: ", error);
      toast.error("Something went wrong!");
    }
  }

  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center">
      
      <Card className="h-[36rem] w-[60%] p-0 mt-10">
        <CardContent className="w-full h-full flex p-0">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="h-full w-[50%] flex flex-col gap-4 justify-between items-center p-10">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Welcome back</h1>
                <p className="text-balance text-muted-foreground">Login to Cropdeal account</p>
              </div>

              <div className="flex flex-col gap-6 w-full">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full gap-1">
                      <FormLabel>
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="ayush@mail.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="w-full gap-1">
                      <FormLabel>
                        Password
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
              
              <div className="flex justify-center items-center gap-2">
                <span>
                  Don't have an account? 
                </span>
                <Link to="/register" className="underline font-semibold">
                  Register
                </Link>
              </div>
            </form>
          </Form>
          <div className="h-full w-[50%] bg-secondary rounded-r-xl">
          </div>
        </CardContent>
      </Card>
      <div className="text-muted-foreground text-center">
        By logging in, you agree to our 
        <span className="underline px-1">
          Terms of Service
        </span>
        and 
        <span className="underline px-1">
          Privacy Policy
        </span>
        .
      </div>

    </div>
  )
}
