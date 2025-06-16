import {
  Bell,
  Search,
  Plus,
  TrendingUp,
  TrendingDown,
  Settings,
  MessageSquare,
  Users,
  Briefcase,
  Globe,
  Moon,
  Plane,
  ChevronDown,
  MoreHorizontal,
  Wheat,
  Apple,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export default function TravelDashboard() {
  return (
    <div className="flex w-full h-screen bg-gray-50">
      {/* Left Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Wheat className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg">Cropdeal</h1>
              <p className="text-sm text-gray-500">Farmer name</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          <div className="flex items-center gap-3 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-sm"></div>
            </div>
            <span className="font-medium">Dashboard</span>
          </div>

          <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
            <Briefcase className="w-5 h-5" />
            <span>Deals</span>
          </div>

          <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
            <Users className="w-5 h-5" />
            <span>Clients</span>
          </div>

          <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
            <Globe className="w-5 h-5" />
            <span>My Site</span>
          </div>

          <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
            <MessageSquare className="w-5 h-5" />
            <span>Message</span>
            <Badge className="ml-auto bg-gray-200 text-gray-700 text-xs">2</Badge>
          </div>

          <div className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </div>

          <div className="flex items-center gap-3 px-3 py-2 text-gray-600">
            <Moon className="w-5 h-5" />
            <span>Dark Mode</span>
            <Switch className="ml-auto" />
          </div>
        </nav>

        {/* Upgrade Card */}
        <div className="p-4">
          <Card className="bg-gradient-to-br from-purple-900 to-blue-900 text-white border-0">
            <CardContent className="p-4">
              <div className="flex items-center justify-center mb-3">
                <div className="flex gap-2">
                  <Wheat className="w-12 h-12 text-orange-400" />
                  <Apple className="w-12 h-12 text-red-400" />
                  {/* <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full"></div> */}
                </div>
              </div>
              <h3 className="font-semibold text-center mb-1">Updating your plan</h3>
              <p className="text-center text-sm mb-3">for Premium!</p>
              <Button className="w-full bg-white text-purple-900 hover:bg-gray-100">Upgrade Now</Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Content */}
      <div className=" flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <Button variant="outline" size="sm" className="text-blue-600 border-blue-200">
                <Plus className="w-4 h-4 mr-2" />
                Add New Widgets
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input placeholder="Search anything ..." className="pl-10 w-80 bg-gray-50 border-gray-200" />
              </div>
              <Button variant="ghost" size="sm">
                <Bell className="w-5 h-5" />
              </Button>
              <div className="flex items-center gap-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>AM</AvatarFallback>
                </Avatar>
                <span className="font-medium">Ayush Maurya</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>
        </header>

        <div className=" flex-1 flex overflow-hidden">
          {/* Main Dashboard Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            {/* Sales Performance */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold">Sales Performance</h2>
                  {/* <p className="text-gray-600">Visited 10 of 100 countries.</p> */}
                </div>
                <Button variant="outline" size="sm">
                  Export
                </Button>
              </div>

              <div className="bg-white rounded-xl p-6 mb-6">
                <div className="h-48 bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg mb-6 relative overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 400 200">
                    <path d="M0,150 Q100,120 200,100 T400,80" stroke="#8b5cf6" strokeWidth="3" fill="none" />
                    <circle cx="200" cy="100" r="4" fill="#8b5cf6" />
                    <path d="M0,150 Q100,120 200,100 T400,80 L400,200 L0,200 Z" fill="url(#gradient)" opacity="0.3" />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#c4b5fd" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute left-4 top-4 text-sm text-gray-600">25 k</div>
                  <div className="absolute left-4 top-12 text-sm text-gray-600">20 k</div>
                  <div className="absolute left-4 top-20 text-sm text-gray-600">15 k</div>
                  <div className="absolute left-4 top-28 text-sm text-gray-600">10 k</div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Views</p>
                      <p className="text-2xl font-bold">20,751</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Sales</p>
                      <p className="text-2xl font-bold">2,564</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Metric Cards */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <Card className="bg-blue-600 text-white border-0">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-blue-100">Waiting list</span>
                      <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold">840</span>
                      <div className="flex items-center gap-1 text-green-300">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-sm">+1.5</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-purple-500 text-white border-0">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-purple-100">Completed orders</span>
                      <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold">235</span>
                      <div className="flex items-center gap-1 text-green-300">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-sm">+0.2</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 text-white border-0">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300">Total revenue</span>
                      <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold">2,00,001</span>
                      <div className="flex items-center gap-1 text-red-300">
                        <TrendingDown className="w-4 h-4" />
                        <span className="text-sm">-0.5</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* All Orders */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">All Orders</h2>
                <Select defaultValue="month">
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="month">Month</SelectItem>
                    <SelectItem value="week">Week</SelectItem>
                    <SelectItem value="day">Day</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="bg-white rounded-xl overflow-hidden">
                <div className="p-4 border-b border-gray-100">
                  <div className="flex gap-4">
                    <Select defaultValue="departure">
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Order date" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="departure">Order date</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select defaultValue="booking">
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Crop type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="booking">Crop type</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select defaultValue="range">
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Date range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="range">Date range</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left p-4 font-medium text-gray-600">Destination</th>
                        <th className="text-left p-4 font-medium text-gray-600">Date</th>
                        <th className="text-left p-4 font-medium text-gray-600">People</th>
                        <th className="w-8"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-gray-100">
                        <td className="p-4">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <Plane className="w-4 h-4 text-blue-600" />
                              </div>
                              <div>
                                <div className="font-semibold">06:00</div>
                                <div className="text-sm text-gray-500">Singapore</div>
                                <div className="text-xs text-gray-400">SIN</div>
                              </div>
                            </div>
                            <div className="flex-1 flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-xs text-gray-400 mb-1">Duration: 2h 30m</div>
                                <div className="w-24 h-px bg-gray-300 relative">
                                  <div className="absolute left-0 w-2 h-2 bg-blue-600 rounded-full -top-0.5"></div>
                                  <div className="absolute right-0 w-2 h-2 bg-gray-300 rounded-full -top-0.5"></div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="font-semibold">08:30</div>
                              <div className="text-sm text-gray-500">Bandung</div>
                              <div className="text-xs text-gray-400">BDO</div>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="text-sm">Nov 02, 2021</div>
                        </td>
                        <td className="p-4">
                          <div className="flex -space-x-2">
                            <Avatar className="w-8 h-8 border-2 border-white">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" />
                              <AvatarFallback>U1</AvatarFallback>
                            </Avatar>
                            <Avatar className="w-8 h-8 border-2 border-white">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" />
                              <AvatarFallback>U2</AvatarFallback>
                            </Avatar>
                            <div className="w-8 h-8 bg-gray-200 rounded-full border-2 border-white flex items-center justify-center text-xs font-medium">
                              +2
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </td>
                      </tr>

                      <tr className="border-t border-gray-100">
                        <td className="p-4">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                <Plane className="w-4 h-4 text-blue-600" />
                              </div>
                              <div>
                                <div className="font-semibold">20:00</div>
                                <div className="text-sm text-gray-500">London</div>
                                <div className="text-xs text-gray-400">LHR</div>
                              </div>
                            </div>
                            <div className="flex-1 flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-xs text-gray-400 mb-1">Duration: 3h 30m</div>
                                <div className="w-24 h-px bg-gray-300 relative">
                                  <div className="absolute left-0 w-2 h-2 bg-blue-600 rounded-full -top-0.5"></div>
                                  <div className="absolute right-0 w-2 h-2 bg-gray-300 rounded-full -top-0.5"></div>
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="font-semibold">23:30</div>
                              <div className="text-sm text-gray-500">Moscow</div>
                              <div className="text-xs text-gray-400">DME</div>
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="text-sm">Nov 01, 2021</div>
                        </td>
                        <td className="p-4">
                          <div className="flex -space-x-2">
                            <Avatar className="w-8 h-8 border-2 border-white">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" />
                              <AvatarFallback>U3</AvatarFallback>
                            </Avatar>
                            <Avatar className="w-8 h-8 border-2 border-white">
                              <AvatarImage src="/placeholder.svg?height=32&width=32" />
                              <AvatarFallback>U4</AvatarFallback>
                            </Avatar>
                          </div>
                        </td>
                        <td className="p-4">
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div> */}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-80 bg-white border-l border-gray-200 p-6 overflow-y-auto">
            {/* Background Image */}
            <div className="relative h-64 mb-6 rounded-xl overflow-hidden">
              {/* <Image src="/dashboard-bg.png" alt="Mountain landscape with airplane" fill className="object-cover" /> */}
            </div>

            {/* Activity Section */}
            <div className="mb-6">
              {/* <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Activity</h3>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Plan
                </Button>
              </div>
              <p className="text-sm text-gray-500 mb-4">November 02, 2021</p> */}

              {/* <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="grid grid-cols-7 gap-1 text-center text-xs text-gray-500 mb-2">
                  <div>Mon</div>
                  <div>Tue</div>
                  <div>Wed</div>
                  <div>Thu</div>
                  <div>Fri</div>
                  <div>Sat</div>
                  <div>Sun</div>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-sm">
                  <div className="p-2">14</div>
                  <div className="p-2">15</div>
                  <div className="p-2">16</div>
                  <div className="p-2 bg-blue-600 text-white rounded">17</div>
                  <div className="p-2">18</div>
                  <div className="p-2">19</div>
                  <div className="p-2">20</div>
                </div>
              </div> */}

              {/* Timeline */}
              {/* <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <div className="w-px h-12 bg-gray-200"></div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">07:00</div>
                    <div className="bg-blue-100 rounded-lg p-3 mt-1">
                      <div className="font-medium text-sm">BDO</div>
                      <div className="text-xs text-gray-600">Pre-flight Preparation Started</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">08:00 am</div>
                    <div className="bg-green-100 rounded-lg p-3 mt-1">
                      <div className="font-medium text-sm">BDO</div>
                      <div className="text-xs text-gray-600">Registration Success Ready</div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
