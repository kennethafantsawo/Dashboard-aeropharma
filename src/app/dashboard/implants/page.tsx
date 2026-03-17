import DashboardHeader from "@/components/dashboard/header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function ImplantsPage() {
  return (
    <div className="flex min-h-[100dvh] w-full flex-col bg-muted/40">
      <DashboardHeader title="Consommation Implants" showExport={true} />
      <main className="p-4 md:p-8">
        <Card>
            <CardHeader>
                <CardTitle>Consommation mensuelle par fournisseur</CardTitle>
                <CardDescription>Graphiques et tableaux détaillés à venir.</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center h-96">
                <p className="text-muted-foreground">Contenu à venir...</p>
            </CardContent>
        </Card>
      </main>
    </div>
  );
}
