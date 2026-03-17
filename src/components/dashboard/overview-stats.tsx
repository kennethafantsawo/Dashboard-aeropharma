import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, ShoppingCart, CreditCard, TrendingDown } from "lucide-react"
import { revenueData, ordersData } from "@/lib/data"

export default function OverviewStats() {
    const todayRevenue = revenueData[revenueData.length - 1]?.brute || 0;
    const yesterdayRevenue = revenueData[revenueData.length - 2]?.brute || 0;
    const revenueChange = yesterdayRevenue > 0 ? ((todayRevenue - yesterdayRevenue) / yesterdayRevenue) * 100 : 0;
    
    const totalOrders = ordersData.reduce((acc, order) => acc + order.amount, 0);
    
    const outstandingCredit = revenueData.reduce((acc, day) => acc + day.credit, 0);
    const lastMonthCredit = revenueData.slice(0, -1).reduce((acc, day) => acc + day.credit, 0);
    const creditChange = lastMonthCredit > 0 ? ((outstandingCredit - lastMonthCredit) / outstandingCredit) * 100 : 0;

    const totalDiscounts = revenueData.reduce((acc, day) => acc + day.remise, 0);

    const formatCurrency = (value: number) => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(value);

    return (
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Recette Brute (Aujourd'hui)</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{formatCurrency(todayRevenue)}</div>
                    <p className={`text-xs ${revenueChange >= 0 ? 'text-[hsl(var(--success))]' : 'text-destructive'}`}>
                        {revenueChange >= 0 ? '+' : ''}{revenueChange.toFixed(1)}% depuis hier
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Commandes (30 jours)</CardTitle>
                    <ShoppingCart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{formatCurrency(totalOrders)}</div>
                    <p className="text-xs text-muted-foreground">Total des commandes passées</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Crédits en cours</CardTitle>
                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{formatCurrency(outstandingCredit)}</div>
                     <p className={`text-xs ${creditChange >= 0 ? 'text-destructive' : 'text-[hsl(var(--success))]'}`}>
                        {creditChange >= 0 ? '+' : ''}{creditChange.toFixed(1)}% par rapport à hier
                    </p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Remises accordées (30 jours)</CardTitle>
                    <TrendingDown className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{formatCurrency(totalDiscounts)}</div>
                    <p className="text-xs text-muted-foreground">Total des remises sur produits</p>
                </CardContent>
            </Card>
        </div>
    )
}
