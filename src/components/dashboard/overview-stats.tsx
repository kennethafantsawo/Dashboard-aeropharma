import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"
import { Button } from "../ui/button"

export default function OverviewStats() {
    
    const stats = [
        { title: "Total Projects", value: 24, change: 5, changeType: "increase", note: "Increased from last month" },
        { title: "Ended Projects", value: 10, change: 2, changeType: "increase", note: "Increased from last month" },
        { title: "Running Projects", value: 12, change: 2, changeType: "increase", note: "Increased from last month" },
        { title: "Pending Project", value: 2, change: 0, changeType: "none", note: "On Discuss" },
    ]

    return (
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
                <Card key={stat.title} className={index === 0 ? "bg-primary text-primary-foreground" : ""}>
                    <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                        <Button 
                            variant="ghost" 
                            size="icon" 
                            className={`h-8 w-8 -mt-2 -mr-2 ${index === 0 ? 'text-primary-foreground hover:bg-primary-foreground/10' : 'text-muted-foreground hover:bg-accent'}`}
                        >
                            <ArrowUpRight className="h-4 w-4" />
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <div className="text-5xl font-bold">{stat.value}</div>
                        <p className={`text-xs ${index === 0 ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                           {stat.change > 0 && <span className={`${index === 0 ? 'text-green-300' : 'text-green-500'} mr-1`}>↑ {stat.change}%</span>}
                           {stat.note}
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
