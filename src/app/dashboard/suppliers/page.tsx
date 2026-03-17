import DashboardHeader from "@/components/dashboard/header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SuppliersPage() {
  return (
    <div className="flex min-h-[100dvh] w-full flex-col bg-muted/40">
      <DashboardHeader title="Fournisseurs" showExport={true} />
       <main className="flex-1 p-4 md:p-8">
        <Tabs defaultValue="orders">
            <TabsList className="grid w-full grid-cols-3 md:w-auto md:grid-cols-3 mb-4">
                <TabsTrigger value="orders">Commandes</TabsTrigger>
                <TabsTrigger value="invoices">Factures</TabsTrigger>
                <TabsTrigger value="returns">Retours</TabsTrigger>
            </TabsList>
            <TabsContent value="orders">
                <Card>
                    <CardHeader>
                        <CardTitle>Analyse des commandes</CardTitle>
                        <CardDescription>Graphiques et tableaux détaillés à venir.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center h-96">
                        <p className="text-muted-foreground">Contenu à venir...</p>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
