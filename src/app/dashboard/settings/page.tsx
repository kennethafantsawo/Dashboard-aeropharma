import DashboardHeader from "@/components/dashboard/header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="flex min-h-[100dvh] w-full flex-col bg-muted/40">
      <DashboardHeader title="Paramètres" description="Gérez les données de l'application." />
      <main className="p-4 md:p-8 grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Gérer les Fournisseurs</CardTitle>
            <CardDescription>
              Ajouter, modifier ou supprimer un grossiste ou un fournisseur.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="supplier-name">Nom du Fournisseur</Label>
                <Input id="supplier-name" placeholder="Ex: Grossiste A" />
              </div>
              <Button>Ajouter le Fournisseur</Button>
            </form>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Importer des Données</CardTitle>
            <CardDescription>
              Mettre à jour les données financières en important un fichier Excel.
            </CardDescription>
          </CardHeader>
          <CardContent>
             <div className="space-y-2">
                <Label htmlFor="file-upload">Fichier Excel</Label>
                <div className="flex items-center gap-2">
                    <Input id="file-upload" type="file" className="flex-1" />
                    <Button variant="outline">
                        <Upload className="mr-2 h-4 w-4" />
                        Importer
                    </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                    Le fichier doit être au format .xlsx ou .csv.
                </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
