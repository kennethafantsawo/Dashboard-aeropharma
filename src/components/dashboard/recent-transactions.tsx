import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ordersData } from "@/lib/data"

export default function RecentTransactions() {
    const recentOrders = ordersData
        .sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 6);

    const formatCurrency = (value: number) => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(value);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Commandes Récentes</CardTitle>
                <CardDescription>Liste des dernières commandes passées aux fournisseurs.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Fournisseur</TableHead>
                            <TableHead>Statut</TableHead>
                            <TableHead className="text-right">Montant</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {recentOrders.map(order => (
                            <TableRow key={order.id}>
                                <TableCell>
                                    <div className="font-medium">{order.supplier}</div>
                                    <div className="text-sm text-muted-foreground">
                                        {new Date(order.date).toLocaleDateString('fr-FR')}
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Badge variant={order.status === 'Payée' ? 'secondary' : 'destructive'}>
                                        {order.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right">{formatCurrency(order.amount)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
