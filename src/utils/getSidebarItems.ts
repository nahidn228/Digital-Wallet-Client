import { role } from "@/constants/role";
import { adminSidebarItems } from "@/routes/adminSidebarItems";
import { userSidebarItems } from "@/routes/userSidebarItems";
import type { TRole } from "@/types";

export const getSidebarItem = (userRole: TRole) => {
  switch (userRole) {
    case role.admin:
      return [...adminSidebarItems, ...userSidebarItems];
    case role.agent:
      return [...adminSidebarItems, ...userSidebarItems];
    case role.user:
      return [...userSidebarItems];

    default:
      return [];
  }
};
