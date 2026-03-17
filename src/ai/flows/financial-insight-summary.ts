'use server';
/**
 * @fileOverview Provides a Genkit flow for generating concise financial insights summaries.
 *
 * - financialInsightSummary - A function that triggers the financial insight generation.
 * - FinancialInsightSummaryInput - The input type for the financialInsightSummary function.
 * - FinancialInsightSummaryOutput - The return type for the financialInsightSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FinancialInsightSummaryInputSchema = z.object({
  financialReportData: z.string().describe(
    'A consolidated string of financial report data. This can include summarized revenues, supplier orders, invoices, returns, credit services, implant consumption, and other key financial metrics over various periods (daily, fortnightly, monthly, quarterly, semi-annually, annually).'
  ),
});
export type FinancialInsightSummaryInput = z.infer<typeof FinancialInsightSummaryInputSchema>;

const FinancialInsightSummaryOutputSchema = z.object({
  summary: z
    .string()
    .describe(
      'A concise, natural language summary of the financial data, highlighting key trends, anomalies, significant changes, potential areas of concern or success, and actionable insights.'
    ),
});
export type FinancialInsightSummaryOutput = z.infer<typeof FinancialInsightSummaryOutputSchema>;

export async function financialInsightSummary(
  input: FinancialInsightSummaryInput
): Promise<FinancialInsightSummaryOutput> {
  return financialInsightSummaryFlow(input);
}

const financialInsightSummaryPrompt = ai.definePrompt({
  name: 'financialInsightSummaryPrompt',
  input: {schema: FinancialInsightSummaryInputSchema},
  output: {schema: FinancialInsightSummaryOutputSchema},
  prompt: `You are an expert financial analyst. Based on the following financial data: {{{financialReportData}}}, provide a concise summary of key trends, anomalies, and actionable insights.`,
});

const financialInsightSummaryFlow = ai.defineFlow(
  {
    name: 'financialInsightSummaryFlow',
    inputSchema: FinancialInsightSummaryInputSchema,
    outputSchema: FinancialInsightSummaryOutputSchema,
  },
  async (input) => {
    const { output } = await financialInsightSummaryPrompt(input);
    return output!;
  }
);
