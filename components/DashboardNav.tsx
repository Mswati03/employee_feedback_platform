"use client"
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { Home, MessageCircle, Users, Settings, LogOut } from "lucide-react"

import Dashboard from "./Dashboard"
import FeedbackForm from "./Feedbackform"
import FeedbackList from "./Feedbacklist"
import Profile from "./Profile"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
  SidebarRail,
} from "@/components/ui/sidebar"

// Navigation items
const navItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Submit Feedback",
    url: "/submit-feedback",
    icon: MessageCircle,
  },
  {
    title: "View Feedback",
    url: "/feedback",
    icon: Users,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: Settings,
  },
]

function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <MessageCircle className="size-4" />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-semibold">Feedback Hub</span>
                <span className="text-xs">v1.0.0</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild tooltip={item.title}>
                <a href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Sign Out">
              <button>
                <LogOut />
                <span>Sign Out</span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}

function Loading() {
  return <span className="loading loading-dots loading-xl"></span>
}

function DashboardNavigation() {
  const [loading, setLoading] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 500) // Simulate loading time

    return () => clearTimeout(timer)
  }, [location])

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <h1 className="ml-4 text-xl font-semibold">Feedback Hub</h1>
        </header>
        <div className="flex-1 p-8">
          {loading ? (
            <Loading />
          ) : (
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/submit-feedback" element={<FeedbackForm />} />
              <Route path="/feedback" element={<FeedbackList />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/" element={<Dashboard />} />
            </Routes>
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

function App() {
  return (
    <Router>
      <DashboardNavigation />
    </Router>
  )
}

export default App
