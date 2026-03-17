"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Wand2, Loader2, Sparkles } from "lucide-react"
import { financialInsightSummary } from "@/ai/flows/financial-insight-summary"
import { revenueData, ordersData, salesData } from "@/lib/data"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function AiSummary() {
    const [summary, setSummary] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerateSummary = async () => {
        setIsLoading(true);
        setError(null);
        setSummary("");

        try {
            const reportData = `
                Revenue (last 30 days): ${JSON.stringify(revenueData)}
                Orders (last 30 days): ${JSON.stringify(ordersData)}
                Sales (last 30 days): ${JSON.stringify(salesData)}
            `;
            const result = await financialInsightSummary({ financialReportData: reportData });
            setSummary(result.summary);
        } catch (e) {
            console.error(e);
            setError("Une erreur est survenue lors de la génération du résumé.");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Sparkles className="text-primary" />
                    <span>Aperçu par IA</span>
                </CardTitle>
                <CardDescription>
                    Générez une analyse des tendances financières pour obtenir des informations rapides.
                </CardDescription>
            </CardHeader>
            <CardContent>
                {summary ? (
                    <Alert>
                        <Sparkles className="h-4 w-4" />
                        <AlertTitle>Résumé Financier</AlertTitle>
                        <AlertDescription className="prose prose-sm dark:prose-invert">
                           <p>{summary}</p>
                        </AlertDescription>
                    </Alert>
                ) : (
                    <div className="text-sm text-muted-foreground">
                        {isLoading ? 'Analyse en cours...' : 'Cliquez sur le bouton pour générer une analyse de vos données financières récentes.'}
                    </div>
                )}
                 {error && (
                    <Alert variant="destructive" className="mt-4">
                        <AlertTitle>Erreur</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </Alert>
                )}
            </CardContent>
            <CardFooter>
                <Button onClick={handleGenerateSummary} disabled={isLoading}>
                    {isLoading ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                        <Wand2 className="mr-2 h-4 w-4" />
                    )}
                    Générer le résumé
                </Button>
            </CardFooter>
        </Card>
    )
}
