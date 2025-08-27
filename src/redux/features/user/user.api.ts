import { baseApi } from "@/redux/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // updateUser: builder.mutation({
    //   query: ({ email, ...body }) => ({
    //     url: `/user/${email}`,
    //     method: "PUT",
    //     body,
    //   }),
    //   invalidatesTags: ["USER"],
    // }),

    updateUserInfo: builder.mutation({
      query: ({ email, ...payload }) => ({
        url: `/user/${email}`,
        method: "PATCH",
        data: payload,
      }),
      invalidatesTags: ["USER"],
    }),

    getAllUser: builder.query({
      query: ({ page = 1, limit = 10, email = "", role = "" }) => ({
        url: "/user",
        method: "GET",
        params: { page, limit, email, role },
      }),
      providesTags: ["USER"],
    }),

    updateUserStatus: builder.mutation({
      query: ({ userId, isActive }) => ({
        url: `/user/status/${userId}`,
        method: "PUT",
        data: { isActive },
      }),
      invalidatesTags: ["USER"],
    }),
  }),
});

export const {
  useGetAllUserQuery,
  useUpdateUserInfoMutation,
  useUpdateUserStatusMutation,
} = authApi;
