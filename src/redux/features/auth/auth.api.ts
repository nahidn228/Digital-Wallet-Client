import { baseApi } from "@/redux/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        // body: userInfo,
        data: userInfo,
      }),
      invalidatesTags: ["USER"],
    }),
    logOut: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["USER"],
    }),
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/register",
        method: "POST",
        // body: userInfo,
        data: userInfo,
      }),
    }),
    changePassword: builder.mutation({
      query: (userPass) => ({
        url: "/auth/changePassword",
        method: "POST",
        // body: userInfo,
        data: userPass,
      }),
    }),

    userInfo: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogOutMutation,
  useUserInfoQuery,
  useChangePasswordMutation
} = authApi;
