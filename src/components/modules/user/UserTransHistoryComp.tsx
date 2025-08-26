import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ChevronFirst, ChevronLast } from "lucide-react";
import { useUserTransHistoryQuery } from "@/redux/features/Transaction/transaction.api";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";

export interface IUserTrans {
  _id: string;
  transactionId: string;
  type: string;
  amount: number;
  fee: number;
  totalAmount: number;
  status: string;
  senderId: string;
  receiverEmail: string;
  senderWalletId: string;
  receiverId: string;
  receiverWalletId: string;
  commission: number;
  senderBalanceBefore: number;
  senderBalanceAfter: number;
  receiverBalanceBefore: number;
  receiverBalanceAfter: number;
  createdAt: string;
  updatedAt: string;
}

const UserTransHistoryComp = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");

  const { data: user } = useUserInfoQuery(undefined);
  const userInfo = user?.data;

  console.log(userInfo);

  const { data, refetch } = useUserTransHistoryQuery({
    walletEmail: userInfo?.email,
    page,
    limit: 10,
    type: filterType === "all" ? null : filterType,
    search: search || undefined,
  });

  console.log(data);
  const transactions = data?.transactions;
  const total = data?.total || 0;
  const totalPages = Math.ceil(total / 5);

  // Refetch on filters change
  useEffect(() => {
    setPage(1);
    refetch();
  }, [search, filterType, refetch]);

  return (
    <section className="">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold  lg:text-4xl">
          Transaction History of  <span className="text-primary">{userInfo?.name} </span>
          </h2>
        </div>
        {/* Filters */}
        <div className="flex gap-2 mb-4 flex-col md:flex-row">
          <Input
            placeholder="Search by TrxID, type, status..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Type</SelectItem>
              <SelectItem value="Deposit">Deposit</SelectItem>
              <SelectItem value="Withdraw">Withdraw</SelectItem>
              <SelectItem value="Send_money">Send_money</SelectItem>
              <SelectItem value="Cash_in">Cash_in</SelectItem>
              <SelectItem value="Cash_out">Cash_out</SelectItem>
              <SelectItem value="Refund">Refund</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Table */}
        <div className="bg-background overflow-hidden rounded-md border min-h-80">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead>Transaction Id</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Receiver Email</TableHead>
                <TableHead>Amount</TableHead>

                <TableHead>Status</TableHead>
                <TableHead>Update Balance</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions?.map((transaction: IUserTrans) => (
                <TableRow key={transaction._id}>
                  <TableCell>{transaction.transactionId}</TableCell>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell>
                    {transaction.receiverEmail
                      ? transaction.receiverEmail
                      : " null"}
                  </TableCell>
                  <TableCell>{transaction.amount}</TableCell>
                  <TableCell>{transaction.status}</TableCell>
                  <TableCell>{transaction.receiverBalanceAfter}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-4">
          <Button
            disabled={page === 1}
            onClick={() => setPage((prev) => prev - 1)}
          >
            <ChevronFirst /> Prev
          </Button>
          <span>
            Page {page} of {totalPages || 1}
          </span>
          <Button
            disabled={page === totalPages || totalPages === 0}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Next <ChevronLast />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UserTransHistoryComp;
