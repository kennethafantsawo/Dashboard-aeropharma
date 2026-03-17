"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Cell } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartConfig } from "@/components/ui/chart"

const chartData = [
  { day: "S", value: 20, fill: "hsl(var(--muted))" },
  { day: "M", value: 50, fill: "var(--color-brute)" },
  { day: "T", value: 74, fill: "hsl(var(--chart-2))" },
  { day: "W", value: 60, fill: "var(--color-brute)" },
  { day: "T", value: 30, fill: "hsl(var(--muted))" },
  { day: "F", value: 45, fill: "hsl(var(--muted))" },
  { day: "S", value: 25, fill: "hsl(var(--muted))" },
]

const chartConfig = {
  brute: {
    label: "Project Progress",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig

export default function RevenueChart() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Project Analytics</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="h-[250px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData} margin={{ top: 5, right: 10, left: 10, bottom: 5, }} barGap={10} barSize={20}>
                            <XAxis
                                dataKey="day"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={10}
                                fontSize={12}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent
                                    formatter={(value) => `${value}%`}
                                    indicator="dot"
                                />}
                            />
                             <Bar dataKey="value" radius={8}>
                                {chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.fill} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
