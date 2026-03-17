import DashboardHeader from "@/components/dashboard/header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DcssaPage() {
  return (
    <div className="flex min-h-[100dvh] w-full flex-col bg-muted/40">
      <DashboardHeader title="DCSSA" showExport={true} />
       <main className="flex-1 p-4 md:p-8">
        <Tabs defaultValue="dcssa">
            <TabsList className="grid w-full grid-cols-2 md:w-auto md:grid-cols-2 mb-4">
                <TabsTrigger value="dcssa">DCSSA</TabsTrigger>
                <TabsTrigger value="koundjoure">Koundjouré</TabsTrigger>
            </TabsList>
            <TabsContent value="dcssa">
                <Card>
                    <CardHeader>
                        <CardTitle>Consommation DCSSA</CardTitle>
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
