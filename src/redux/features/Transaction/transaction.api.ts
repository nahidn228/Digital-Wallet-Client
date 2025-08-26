import { baseApi } from "@/redux/baseApi";

export const transactionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    deposit: builder.mutation({
      query: (depositData) => ({
        url: "/transaction/deposit",
        method: "POST",
        data: depositData,
      }),
      invalidatesTags: ["Transaction"],
    }),
    withdraw: builder.mutation({
      query: (addTourData) => ({
        url: "/transaction/withdraw",
        method: "POST",
        data: addTourData,
      }),
      invalidatesTags: ["Transaction"],
    }),
    sendMoney: builder.mutation({
      query: (sendMoneyData) => ({
        url: "/transaction/sendMoney",
        method: "POST",
        data: sendMoneyData,
      }),
      invalidatesTags: ["Transaction"],
    }),
    userTransHistory: builder.query({
      query: ({ walletEmail, ...filters }) => ({
        url: `/transaction/history/${walletEmail}`,
        method: "GET",
        params: filters,
      }),
      providesTags: ["Transaction"],
      transformResponse: (response) => response.data,
    }),

    allTransHistory: builder.query({
      query: (params) => ({
        url: "/transaction/transaction",
        method: "GET",
        params,
      }),
      providesTags: ["Transaction"],
      //only get the data
      transformResponse: (response) => response.data,
    }),

    changeTransactionStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/status/${id}`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["Transaction"],
      transformResponse: (response) => response.data,
    }),
  }),
});

export const {
  useSendMoneyMutation,
  useDepositMutation,
  useWithdrawMutation,
  useUserTransHistoryQuery,
  useAllTransHistoryQuery
} = transactionApi;
