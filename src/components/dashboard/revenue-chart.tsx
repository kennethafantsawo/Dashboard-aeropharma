"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from "@/components/ui/chart"
import { revenueData } from "@/lib/data"

const chartConfig = {
  brute: {
    label: "Recette Brute",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

export default function RevenueChart() {
    const chartData = revenueData.slice(-7).map(d => ({
        date: new Date(d.date).toLocaleDateString('fr-FR', { weekday: 'short' }),
        brute: d.brute,
    }));

    return (
        <Card>
            <CardHeader>
                <CardTitle>Recettes sur 7 jours</CardTitle>
                <CardDescription>Aperçu des recettes brutes quotidiennes.</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={chartData}
                          margin={{
                            top: 5,
                            right: 10,
                            left: 10,
                            bottom: 5,
                          }}
                        >
                            <XAxis
                                dataKey="date"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={10}
                                fontSize={12}
                            />
                            <YAxis
                                tickLine={false}
                                axisLine={false}
                                tickMargin={10}
                                fontSize={12}
                                tickFormatter={(value) => `${value / 1000}k`}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent
                                    formatter={(value) => new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(value as number)}
                                    indicator="dot"
                                />}
                            />
                            <Bar dataKey="brute" fill="var(--color-brute)" radius={4} />
                        </BarChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
