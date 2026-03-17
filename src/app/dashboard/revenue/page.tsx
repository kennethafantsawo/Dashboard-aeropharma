import DashboardHeader from "@/components/dashboard/header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function RevenuePage() {
  return (
    <div className="flex min-h-[100dvh] w-full flex-col bg-muted/40">
      <DashboardHeader title="Recettes" description="Analyse détaillée des différentes sources de revenus." showExport={true} />
      <main className="flex-1 p-4 md:p-8">
        <Tabs defaultValue="week">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:w-auto md:grid-cols-5 mb-4">
                <TabsTrigger value="week">Semaine</TabsTrigger>
                <TabsTrigger value="month">Mois</TabsTrigger>
                <TabsTrigger value="quarter">Trimestre</TabsTrigger>
                <TabsTrigger value="semester">Semestre</TabsTrigger>
                <TabsTrigger value="year">Année</TabsTrigger>
            </TabsList>
            <TabsContent value="week">
                <Card>
                    <CardHeader>
                        <CardTitle>Analyse des recettes hebdomadaires</CardTitle>
                        <CardDescription>Graphiques et tableaux détaillés à venir.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center h-96">
                        <p className="text-muted-foreground">Contenu à venir...</p>
                    </CardContent>
                </Card>
            </TabsContent>
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
            <TabsContent value="quarter">
                <Card>
                    <CardHeader>
                        <CardTitle>Analyse des recettes trimestrielles</CardTitle>
                        <CardDescription>Graphiques et tableaux détaillés à venir.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center h-96">
                        <p className="text-muted-foreground">Contenu à venir...</p>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="semester">
                <Card>
                    <CardHeader>
                        <CardTitle>Analyse des recettes semestrielles</CardTitle>
                        <CardDescription>Graphiques et tableaux détaillés à venir.</CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center h-96">
                        <p className="text-muted-foreground">Contenu à venir...</p>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="year">
                <Card>
                    <CardHeader>
                        <CardTitle>Analyse des recettes annuelles</CardTitle>
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
