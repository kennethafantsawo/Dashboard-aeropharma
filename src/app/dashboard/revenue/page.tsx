import DashboardHeader from "@/components/dashboard/header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function RevenuePage() {
  return (
    <div className="flex min-h-[100dvh] w-full flex-col bg-muted/40">
      <DashboardHeader title="Recettes" showExport={true} />
      <main className="flex-1 p-4 md:p-8">
        <Tabs defaultValue="month">
            <TabsList className="grid w-full grid-cols-3 md:w-auto md:grid-cols-6 mb-4">
                <TabsTrigger value="day">Jour</TabsTrigger>
                <TabsTrigger value="week">Quinzaine</TabsTrigger>
                <TabsTrigger value="month">Mois</TabsTrigger>
                <TabsTrigger value="quarter">Trimestre</TabsTrigger>
                <TabsTrigger value="semester">Semestre</TabsTrigger>
                <TabsTrigger value="year">Année</TabsTrigger>
            </TabsList>
            <TabsContent value="month">
                <Card>
                    <CardHeader>
                        <CardTitle>Analyse des recettes mensuelles</CardTitle>
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
