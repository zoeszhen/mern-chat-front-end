import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const appApi = createApi({
  reducerPath: 'appApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5001',
  }),
  endpoints: (builder) => ({
    // signup
    signup: builder.mutation({
      query: (user) => ({
        url: '/user/signup',
        method: 'POST',
        body: user,
      }),
    }),
    // login
    login: builder.mutation({
      query: (user) => ({
        url: '/user/login',
        method: 'POST',
        body: user,
      }),
    }),
    // logout
    logout: builder.mutation({
      query: (payload) => ({
        url: '/user/logout',
        method: 'DELETE',
        body: payload,
      }),
    }),
  }),
});

export const { useSignupMutation, useLoginMutation, useLogoutMutation } = appApi;

export default appApi;
