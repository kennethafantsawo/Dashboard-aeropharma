import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function RecentTransactions() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Transactions Récentes</CardTitle>
                <CardDescription>
                    Les dernières ventes et transactions apparaîtront ici.
                </CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center h-48">
                <p className="text-muted-foreground">Aucune transaction récente.</p>
            </CardContent>
        </Card>
    )
}
