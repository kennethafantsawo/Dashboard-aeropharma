"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  HeartPulse,
  LayoutDashboard,
  Coins,
  Truck,
  Building,
  ShieldCheck,
  Settings,
} from "lucide-react"

import {
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar"

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/dashboard/revenue", icon: Coins, label: "Recettes" },
  { href: "/dashboard/suppliers", icon: Truck, label: "Fournisseurs" },
  { href: "/dashboard/dcssa", icon: Building, label: "DCSSA" },
  { href: "/dashboard/implants", icon: HeartPulse, label: "Implants" },
  { href: "/dashboard/insurance", icon: ShieldCheck, label: "Assurances" },
]

const settingsNavItem = { href: "/dashboard/settings", icon: Settings, label: "Paramètres" };


export default function MainNav() {
  const pathname = usePathname()

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <HeartPulse className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-xl font-bold font-headline text-foreground">PharmaBoard</h2>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2 flex-grow flex flex-col">
        <div className="flex-grow">
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
        </div>
      </SidebarContent>

      <SidebarFooter className="p-2">
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton
                    asChild
                    isActive={pathname === settingsNavItem.href}
                    tooltip={settingsNavItem.label}
                >
                    <Link href={settingsNavItem.href}>
                        <settingsNavItem.icon />
                        <span>{settingsNavItem.label}</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </>
  )
}
