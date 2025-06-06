import { Card, CardContent } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { registerFormSchema } from "@/validation/register"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Link, useNavigate } from "react-router-dom"
import { register } from "@/services/authService"
import { toast } from "sonner"

export const Register = () => {

  const navigate = useNavigate();

  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      role: "",
      name: "",
      email: "",
      password: "",
    },
  })

  const onSubmit = async (data: z.infer<typeof registerFormSchema>) => {
    try {
      const response = await register(data.name, data.role, data.email, data.password);
      if (response?.userId) {
        toast.success("Account created successfully! Please login");
        navigate("/login")
      }
    } catch (error) {
      console.log("Register error: ", error);
      toast.error("Something went wrong!");
    }
  }

  return (
    <div className="w-full flex flex-col gap-4 justify-center items-center">
      
      <Card className="h-[36rem] w-[60%] p-0  mt-10">
        <CardContent className="w-full h-full flex p-0">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="h-full w-[50%] flex flex-col gap-4 justify-between items-center p-10">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Create an account</h1>
                <p className="text-balance text-muted-foreground">Register to Cropdeal account</p>
              </div>

              <div className="flex flex-col gap-6 w-full">
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>
                        Role
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a role for user" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="FARMER">Farmer</SelectItem>
                          <SelectItem value="DEALER">Dealer</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="w-full gap-1">
                      <FormLabel>
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Ayush" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
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
                  Register
                </Button>
              </div>

              <div className="flex justify-center items-center gap-2">
                <span>
                  Already have an account? 
                </span>
                <Link to="/login" className="underline font-semibold">
                  Login
                </Link>
              </div>
            </form>
          </Form>
          <div className="h-full w-[50%] bg-secondary">
          </div>
        </CardContent>
      </Card>
      <div className="text-muted-foreground text-center">
        By registering, you agree to our 
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
