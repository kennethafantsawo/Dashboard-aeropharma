"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Hospital,
  LayoutDashboard,
  Coins,
  Truck,
  Building,
  HeartPulse,
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
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "../ui/button"

const navItems = [
  { href: "/dashboard", icon: LayoutDashboard, label: "Aperçu" },
  { href: "/dashboard/revenue", icon: Coins, label: "Recettes" },
  { href: "/dashboard/suppliers", icon: Truck, label: "Fournisseurs" },
  { href: "/dashboard/dcssa", icon: Building, label: "DCSSA" },
  { href: "/dashboard/implants", icon: HeartPulse, label: "Implants" },
  { href: "/dashboard/insurance", icon: ShieldCheck, label: "Assurances" },
]

export default function MainNav() {
  const pathname = usePathname()

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Hospital className="w-6 h-6 text-primary" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg font-bold font-headline text-primary">PharmaBoard</h2>
            <p className="text-xs text-muted-foreground">de l'Aéroport</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2">
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
      </SidebarContent>

      <SidebarFooter className="p-2">
        <Separator className="my-2" />
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              isActive={pathname === "/dashboard/settings"}
              tooltip="Paramètres"
            >
              <Link href="/dashboard/settings">
                <Settings />
                <span>Paramètres</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
             <Button variant="ghost" className="w-full justify-start h-12" asChild>
                <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                        <AvatarImage src="https://picsum.photos/seed/user-avatar/40/40" data-ai-hint="person face" />
                        <AvatarFallback>D</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col items-start">
                        <span className="font-semibold text-sm">Directrice</span>
                        <span className="text-xs text-muted-foreground">Admin</span>
                    </div>
                </div>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </>
  )
}
