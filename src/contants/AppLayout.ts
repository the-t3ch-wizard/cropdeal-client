import { LayoutDashboard, MessageCircleMore, Settings, UsersRound } from "lucide-react"
import { BsFillCartCheckFill } from "react-icons/bs";

export const LeftSideBarNavListFarmer = [
  {
    name: "Dashboard",
    route: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Orders",
    route: "/order",
    icon: BsFillCartCheckFill,
  },
  {
    name: "Dealers",
    route: "/dealer",
    icon: UsersRound,
  },
  {
    name: "Messages",
    route: "/message",
    icon: MessageCircleMore,
  },
  {
    name: "Settings",
    route: "/setting",
    icon: Settings,
  }
]

export const LeftSideBarNavListDealer = [
  {
    name: "Dashboard",
    route: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Orders",
    route: "/order",
    icon: BsFillCartCheckFill,
  },
  {
    name: "Farmers",
    route: "/farmer",
    icon: UsersRound,
  },
  {
    name: "Messages",
    route: "/message",
    icon: MessageCircleMore,
  },
  {
    name: "Settings",
    route: "/setting",
    icon: Settings,
  }
]

