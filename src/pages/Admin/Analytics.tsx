import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { User, Users, CreditCard, DollarSign } from "lucide-react";
import { useGetAllUserQuery } from "@/redux/features/user/user.api";
import { useAllTransHistoryQuery } from "@/redux/features/Transaction/transaction.api";
import type { IUser } from "@/types";

import { DashBoardLoader } from "@/components/ui/DashBoardLoader";

interface Transaction {
  amount: number;
  type: string;
  totalAmount: number;
}

const Analytics = () => {
  // Fetch all users
  const { data: userData, isLoading } = useGetAllUserQuery({
    page: 1,
    limit: 1000,
  });

  const users = userData?.data?.users || [];

  // Fetch transaction stats (count & volume)
  const { data: transactionData } = useAllTransHistoryQuery(undefined);
  const totalTransactions = transactionData?.total || 0;

  const totalAgents = users.filter((u: IUser) => u.role === "Agent").length;

  const transactions: Transaction[] = transactionData?.transactions || [];

  const volume =
    transactions?.reduce((sum, tx) => sum + (tx.totalAmount || tx.amount), 0) ||
    0;

  if (isLoading) {
    return <DashBoardLoader />;
  }

  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid md:grid-cols-4 gap-6">
        {/* Total Users */}
        <Card className="w-full shadow-sm hover:shadow-md transition rounded-xl">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <h2 className="text-sm font-medium text-muted-foreground">
              Total Users
            </h2>
            <User className="w-5 h-5 text-blue-600" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{users.length}</p>
          </CardContent>
        </Card>

        {/* Total Agents */}
        <Card className="w-full shadow-sm hover:shadow-md transition rounded-xl">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <h2 className="text-sm font-medium text-muted-foreground">
              Total Agents
            </h2>
            <Users className="w-5 h-5 text-green-600" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{totalAgents}</p>
          </CardContent>
        </Card>

        {/* Total Transactions */}
        <Card className="w-full shadow-sm hover:shadow-md transition rounded-xl">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <h2 className="text-sm font-medium text-muted-foreground">
              Transactions
            </h2>
            <CreditCard className="w-5 h-5 text-indigo-600" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{totalTransactions}</p>
          </CardContent>
        </Card>

        {/* Transaction Volume */}
        <Card className="w-full shadow-sm hover:shadow-md transition rounded-xl">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <h2 className="text-sm font-medium text-muted-foreground">
              Volume
            </h2>
            <DollarSign className="w-5 h-5 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">${volume.toLocaleString()}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Analytics;
