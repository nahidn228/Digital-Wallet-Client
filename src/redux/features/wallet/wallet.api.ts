import { baseApi } from "@/redux/baseApi";

export const walletApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addDivision: builder.mutation({
      query: (divisionData) => ({
        url: "division/create",
        method: "POST",
        data: divisionData,
      }),
      invalidatesTags: ["Wallet"],
    }),

    getSingleWallet: builder.query({
      query: ({ email, ...params }) => ({
        url: `/wallet/profile/${email}`,
        method: "GET",
        params,
      }),
      providesTags: ["Wallet"],
      //only get the data
      transformResponse: (response) => response.data,
    }),
  }),
});

export const { useGetSingleWalletQuery } = walletApi;
