import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"

type DashboardHeaderProps = {
  title: string
  showExport?: boolean
}

export default function DashboardHeader({ title, showExport = false }: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6">
      <SidebarTrigger className="md:hidden" />
      <div className="w-full flex items-center gap-4">
        <h1 className="flex-1 text-2xl font-bold font-headline">{title}</h1>
        {showExport && (
          <Button variant="outline" size="sm">
            <FileDown className="mr-2 h-4 w-4" />
            Exporter en PDF
          </Button>
        )}
      </div>
    </header>
  )
}
