import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const phoneBookAPI = createApi({
  reducerPath: 'phoneBookApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://628bac69667aea3a3e345810.mockapi.io/api/v1' }),
  tagTypes: ['Phones'],
  endpoints: builder => ({
    getData: builder.query({
      query: () => `/contact`,
      providesTags: ['Phones'],
    }),
    postData: builder.mutation({
      query: data => ({
        url: '/contact',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Phones'],
    }),
    deleteData: builder.mutation({
      query: id => ({
        url: `/contact/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Phones'],
    }),
  }),
});

export const { useGetDataQuery, usePostDataMutation, useDeleteDataMutation } = phoneBookAPI;
