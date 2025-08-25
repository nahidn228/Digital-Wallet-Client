import SendMoney from "@/pages/user/SendMoney";
import type { ISidebarItem } from "@/types";

export const userSidebarItems: ISidebarItem[] = [
  {
    title: "History",
    items: [
      {
        title: "Send Money",
        url: "/user/send-money",
        Component: SendMoney,
      },
    ],
  },
];
