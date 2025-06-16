import { applicationName } from "@/contants/AppDetail"
import { Link } from "react-router-dom"

export const Logo = () => {
  return (
    <Link to={"/"} className="w-full font-medium text-xl p-2 border-2 rounded-md bg-background flex gap-3 justify-start items-center h-16">

      <div className="h-full flex justify-center items-center">
        <div className="w-10 h-10 rounded-md bg-blue-200">
        </div>
      </div>

      <div className="flex flex-col">
        <h3 className="">
          {applicationName}
        </h3>
        <p className="text-xs">
          Buy & Sell Crop
        </p>
      </div>

    </Link>
  )
}
