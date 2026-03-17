import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Bell, MessageSquare, Search } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"

type DashboardHeaderProps = {
  title: string,
  description?: string
}

export default function DashboardHeader({ title, description }: DashboardHeaderProps) {
  return (
    <header className="flex h-auto flex-col items-start gap-4 bg-background px-4 pt-6 md:px-6">
       <div className="w-full flex items-center">
        <SidebarTrigger className="md:hidden mr-4" />
        <div className="flex-1">
          <h1 className="text-3xl font-bold font-headline">{title}</h1>
          {description && <p className="text-muted-foreground mt-1">{description}</p>}
        </div>
        <div className="hidden md:flex items-center gap-2 ml-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search task" className="pl-9 bg-card border-none w-auto lg:w-[250px]" />
          </div>
          <Button variant="ghost" size="icon">
            <MessageSquare className="h-5 w-5 text-muted-foreground" />
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5 text-muted-foreground" />
          </Button>
          <div className="flex items-center gap-3 ml-4">
            <Avatar className="h-9 w-9">
                <AvatarImage src="https://picsum.photos/seed/user-avatar/40/40" data-ai-hint="person face" />
                <AvatarFallback>TM</AvatarFallback>
            </Avatar>
             <div className="flex flex-col text-left">
                <p className="text-sm font-medium">Totok Michael</p>
                <p className="text-xs text-muted-foreground">tmichael20@mail.com</p>
             </div>
          </div>
        </div>
      </div>
    </header>
  )
}
