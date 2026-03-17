"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function RevenueChart() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Analyse des Ventes</CardTitle>
                <CardDescription>L'évolution des ventes sera affichée ici.</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center h-[250px]">
                <p className="text-muted-foreground">Aucune donnée à afficher pour le moment.</p>
            </CardContent>
        </Card>
    )
}
