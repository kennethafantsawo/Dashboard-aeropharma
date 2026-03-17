import DashboardHeader from "@/components/dashboard/header";
import OverviewStats from "@/components/dashboard/overview-stats";
import RevenueChart from "@/components/dashboard/revenue-chart";
import RecentTransactions from "@/components/dashboard/recent-transactions";
import AiSummary from "@/components/dashboard/ai-summary";

export default function DashboardOverviewPage() {
  return (
    <div className="flex min-h-[100dvh] w-full flex-col bg-muted/40">
      <DashboardHeader title="Aperçu" showExport={true} />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <OverviewStats />
        <div className="grid gap-4 md:gap-8 lg:grid-cols-7">
          <div className="lg:col-span-4">
            <RevenueChart />
          </div>
          <div className="lg:col-span-3">
            <RecentTransactions />
          </div>
        </div>
        <AiSummary />
      </main>
    </div>
  );
}
