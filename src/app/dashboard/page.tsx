import DashboardHeader from "@/components/dashboard/header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ordersData } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";

export default function DashboardOverviewPage() {
  return (
    <div className="flex min-h-[100dvh] w-full flex-col bg-muted/40">
      <DashboardHeader 
        title="Dashboard" 
        description="Aperçu des entrées et sorties de la pharmacie."
      />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            <Card>
                <CardHeader>
                    <CardTitle>Ventes du Jour</CardTitle>
                    <CardDescription>Aperçu des recettes brutes, tiers payant et crédits.</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-center h-64">
                    <p className="text-muted-foreground">Graphique des ventes à venir...</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Commandes Récentes</CardTitle>
                    <CardDescription>Suivi des commandes payées et non payées.</CardDescription>
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
                            {ordersData.length > 0 ? (
                                ordersData.slice(0, 5).map((order) => (
                                    <TableRow key={order.id}>
                                        <TableCell>
                                            <div className="font-medium">{order.supplier}</div>
                                            <div className="text-sm text-muted-foreground">{order.date}</div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant={order.status === 'Payée' ? 'success' : 'destructive'}>{order.status}</Badge>
                                        </TableCell>
                                        <TableCell className="text-right">{formatCurrency(order.amount)}</TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={3} className="text-center text-muted-foreground">
                                        Aucune commande récente à afficher.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
      </main>
    </div>
  );
}
