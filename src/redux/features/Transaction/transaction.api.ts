import { baseApi } from "@/redux/baseApi";

export const transactionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    deposit: builder.mutation({
      query: (addTourData) => ({
        url: "/transaction/deposit",
        method: "POST",
        data: addTourData,
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
    getAllTours: builder.query({
      query: (params) => ({
        url: "/transaction",
        method: "GET",
        params: params,
      }),
      providesTags: ["Transaction"],
      // transformResponse: (response: IResponse<ITourPackage[]>) => response.data,
    }),

    transHistory: builder.query({
      query: (params) => ({
        url: "/history/:walletId",
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

export const {useSendMoneyMutation} = transactionApi;
