import DashboardHeader from "@/components/dashboard/header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

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
                <CardContent className="flex items-center justify-center h-64">
                     <p className="text-muted-foreground">Tableau des commandes à venir...</p>
                </CardContent>
            </Card>
        </div>
      </main>
    </div>
  );
}
