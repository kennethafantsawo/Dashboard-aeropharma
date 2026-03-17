import DashboardHeader from "@/components/dashboard/header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

export default function InsurancePage() {
  return (
    <div className="flex min-h-[100dvh] w-full flex-col bg-muted/40">
      <DashboardHeader title="Assurances" showExport={true} />
      <main className="flex-1 p-4 md:p-8">
        <div className="flex items-center justify-between mb-4">
            <Tabs defaultValue="allianz">
                <TabsList>
                    <TabsTrigger value="allianz">Allianz</TabsTrigger>
                    <TabsTrigger value="axa">AXA</TabsTrigger>
                    <TabsTrigger value="rejets">Pertes / Rejets</TabsTrigger>
                </TabsList>
            </Tabs>
            <Button>
                <PlusCircle className="mr-2 h-4 w-4" />
                Ajouter une assurance
            </Button>
        </div>
        <Card>
            <CardHeader>
                <CardTitle>Suivi des assurances</CardTitle>
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
