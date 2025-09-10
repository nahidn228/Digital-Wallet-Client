// import DepositMoney from "@/pages/user/DepositMoney";
// import SendMoney from "@/pages/user/SendMoney";
// import UserTransHistory from "@/pages/user/UserTransHistory";
// import WithdrawMoney from "@/pages/user/WithdrawMoney";
import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const SendMoney = lazy(() => import("@/pages/user/SendMoney"));
const DepositMoney = lazy(() => import("@/pages/user/DepositMoney"));
const UserTransHistory = lazy(() => import("@/pages/user/UserTransHistory"));
const WithdrawMoney = lazy(() => import("@/pages/user/WithdrawMoney"));

export const userSidebarItems: ISidebarItem[] = [
  {
    title: "Operations",
    items: [
      {
        title: "Send Money",
        url: "/user/send-money",
        Component: SendMoney,
      },
      {
        title: "Deposit Money",
        url: "/user/deposit-money",
        Component: DepositMoney,
      },
      {
        title: "Withdraw Money",
        url: "/user/withdraw-money",
        Component: WithdrawMoney,
      },
      {
        title: "Transfer History",
        url: "/user/trans-history",
        Component: UserTransHistory,
      },
    ],
  },
];
