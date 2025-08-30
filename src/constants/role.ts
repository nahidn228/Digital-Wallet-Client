export const role = {
  agent: "Agent",
  admin: "Admin",
  user: "User",
};


export const ROLES = ["Agent", "Admin", "User"] as const;
export type TRole = typeof ROLES[number];