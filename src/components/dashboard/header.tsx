import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

type DashboardHeaderProps = {
  title: string,
  description?: string,
  showExport?: boolean
}

export default function DashboardHeader({ title, description, showExport = false }: DashboardHeaderProps) {
  return (
    <header className="flex h-auto flex-col items-start gap-4 bg-background px-4 pt-6 md:px-6">
       <div className="w-full flex items-center">
        <SidebarTrigger className="md:hidden mr-4" />
        <div className="flex-1">
          <h1 className="text-2xl font-bold font-headline">{title}</h1>
          {description && <p className="text-muted-foreground mt-1 text-sm">{description}</p>}
        </div>
        {showExport && (
            <div className="ml-auto">
                <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Exporter en PDF
                </Button>
            </div>
        )}
      </div>
    </header>
  )
}
