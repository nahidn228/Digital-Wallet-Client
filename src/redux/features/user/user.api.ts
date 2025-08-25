import { baseApi } from "@/redux/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // login: builder.mutation({
    //   query: (userInfo) => ({
    //     url: "/auth/login",
    //     method: "POST",
    //     // body: userInfo,
    //     data: userInfo,
    //   }),
    //   invalidatesTags: ["USER"],
    // }),

    getAllUser: builder.query({
      query: ({ page = 1, limit = 10, email = "", role = "" }) => ({
        url: "/user",
        method: "GET",
        params: { page, limit, email, role },
      }),
      providesTags: ["USER"],
    }),
  }),
});

export const { useGetAllUserQuery } = authApi;
