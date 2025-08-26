import type { ComponentType } from "react";

export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}

export interface ISidebarItem {
  title: string;
  items: {
    title: string;
    url: string;
    Component: ComponentType;
  }[];
}

export type TRole = "Agent" | "Admin" | "User";

export type TTransactionType = {
  DEPOSIT: "Deposit";
  WITHDRAW: "Withdraw";
  SEND_MONEY: "Send_money";
  CASH_IN: "Cash_in";
  CASH_OUT: "Cash_out";
  REFUND: "Refund";
};

export interface ITransactionStatus {
  PENDING: "Pending";
  COMPLETED: "Completed";
  FAILED: "Failed";
  CANCELLED: "Cancelled";
  REVERSED: "Reversed";
}


export interface IUser {
  _id: string
  name: string
  email: string
  phone: string
  role: string
  isVerified: boolean
  isActive: boolean
  createdAt: string
  updatedAt: string
  id: string
}