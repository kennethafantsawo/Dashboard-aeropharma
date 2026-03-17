import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "../ui/button"
import { Plus } from "lucide-react"

const teamMembers = [
    { name: "Alexandra Deff", task: "Working on Github Project Repository", status: "Completed", avatar: "https://picsum.photos/seed/alexandra/40/40" },
    { name: "Edwin Adenike", task: "Working on Integrate User Authentication System", status: "In Progress", avatar: "https://picsum.photos/seed/edwin/40/40" },
    { name: "Isaac Oluwatemilorun", task: "Working on Develop Search and Filter Functionality", status: "Pending", avatar: "https://picsum.photos/seed/isaac/40/40" },
    { name: "David Oshodi", task: "Working on Responsive Layout for Homepage", status: "In Progress", avatar: "https://picsum.photos/seed/david/40/40" },
]

const statusVariant: { [key: string]: "secondary" | "default" | "outline" } = {
    "Completed": "secondary",
    "In Progress": "default",
    "Pending": "outline",
}


export default function RecentTransactions() {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <div >
                    <CardTitle>Team Collaboration</CardTitle>
                </div>
                <Button variant="outline" size="sm"><Plus className="mr-2 h-4 w-4"/> Add Member</Button>
            </CardHeader>
            <CardContent className="space-y-4">
                {teamMembers.map(member => (
                    <div key={member.name} className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                            <Avatar>
                                <AvatarImage src={member.avatar} data-ai-hint="person face" />
                                <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-medium text-sm">{member.name}</p>
                                <p className="text-xs text-muted-foreground">{member.task}</p>
                            </div>
                        </div>
                         <Badge variant={statusVariant[member.status]}>{member.status}</Badge>
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}
