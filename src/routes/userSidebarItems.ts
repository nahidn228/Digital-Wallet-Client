import DepositMoney from "@/pages/user/DepositMoney";
import SendMoney from "@/pages/user/SendMoney";
import type { ISidebarItem } from "@/types";

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
    ],
  },
];
