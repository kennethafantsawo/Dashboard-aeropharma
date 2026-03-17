import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { formatCurrency } from "@/lib/utils"
import { Banknote, ShoppingCart, Receipt, PiggyBank } from "lucide-react"

export default function OverviewStats() {
    
    const stats = [
        { title: "Recettes du Jour", value: 0, isCurrency: true, icon: Banknote },
        { title: "Commandes en Cours", value: 0, isCurrency: false, icon: ShoppingCart },
        { title: "Factures Impayées", value: 0, isCurrency: true, icon: Receipt },
        { title: "Total Crédits", value: 0, isCurrency: true, icon: PiggyBank },
    ]

    return (
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
                <Card key={stat.title}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                        <stat.icon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            {stat.isCurrency ? formatCurrency(stat.value) : stat.value}
                        </div>
                        <p className="text-xs text-muted-foreground">
                           Données non disponibles
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
