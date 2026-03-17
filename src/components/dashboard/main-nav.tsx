"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Shapes,
  LayoutDashboard,
  Coins,
  Truck,
  Building,
  HeartPulse,
  ShieldCheck,
  Settings,
  Download,
  Calendar,
  Users,
  BarChart,
  LogOut,
  HelpCircle,
} from "lucide-react"

import {
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "../ui/button"

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/dashboard/revenue", icon: BarChart, label: "Analytics" },
  { href: "/dashboard/suppliers", icon: Users, label: "Team" },
  { href: "/dashboard/dcssa", icon: Calendar, label: "Calendar" },
]

const generalNavItems = [
    { href: "/dashboard/settings", icon: Settings, label: "Settings" },
    { href: "/dashboard/implants", icon: HelpCircle, label: "Help" },
    { href: "/dashboard/insurance", icon: LogOut, label: "Logout" },
]

export default function MainNav() {
  const pathname = usePathname()

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Shapes className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-xl font-bold font-headline text-foreground">Donezo</h2>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2 flex-grow flex flex-col">
        <div className="flex-grow">
            <p className="text-xs text-muted-foreground px-2 pt-4 pb-2">MENU</p>
            <SidebarMenu>
            {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href))}
                    tooltip={item.label}
                >
                    <Link href={item.href}>
                    <item.icon />
                    <span>{item.label}</span>
                    </Link>
                </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
            </SidebarMenu>

            <p className="text-xs text-muted-foreground px-2 pt-4 pb-2">GENERAL</p>
            <SidebarMenu>
            {generalNavItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href))}
                    tooltip={item.label}
                >
                    <Link href={item.href}>
                    <item.icon />
                    <span>{item.label}</span>
                    </Link>
                </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
            </SidebarMenu>
        </div>
        
        <div className="mt-auto">
            <Card className="bg-slate-900 text-white mx-2">
                <CardContent className="p-4 text-center">
                    <div className="mb-4 rounded-full bg-white/20 p-2 inline-block">
                        <Download className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-sm">Download our Mobile App</h3>
                    <p className="text-xs text-slate-400 my-2">Get easy in another way</p>
                    <Button variant="secondary" size="sm" className="w-full bg-white text-black hover:bg-slate-200">Download</Button>
                </CardContent>
            </Card>
        </div>
      </SidebarContent>

      <SidebarFooter className="p-2">
      </SidebarFooter>
    </>
  )
}
