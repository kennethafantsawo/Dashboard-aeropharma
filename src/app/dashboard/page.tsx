import DashboardHeader from "@/components/dashboard/header";
import OverviewStats from "@/components/dashboard/overview-stats";
import RevenueChart from "@/components/dashboard/revenue-chart";
import RecentTransactions from "@/components/dashboard/recent-transactions";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function DashboardOverviewPage() {
  return (
    <div className="flex min-h-[100dvh] w-full flex-col bg-background">
      <DashboardHeader 
        title="Dashboard" 
        description="Plan, prioritize, and accomplish your tasks with ease."
      />
      <div className="flex items-center gap-4 px-4 md:px-6 mt-6">
        <div className="ml-auto flex items-center gap-2">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90"><Plus className="mr-2 h-4 w-4"/> Add Project</Button>
            <Button variant="secondary">Import Data</Button>
        </div>
      </div>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <OverviewStats />
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <RevenueChart />
          </div>
          <div className="space-y-4">
            <RecentTransactions />
          </div>
        </div>
      </main>
    </div>
  );
}
