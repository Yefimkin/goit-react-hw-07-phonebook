import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({

    reducerPath: 'contacts',
  
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://635cfe61fc2595be265068ae.mockapi.io/contacts/',
    }),
    tagTypes: ['Contact'],
  
    endpoints: builder => ({
        getContacts: builder.query({
            query: () => '/contacts',
            providesTags: ['Contact'],
        }),
        addContact: builder.mutation({
            query: data => ({
                url: `/contacts`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Contact'],
        }),
        deleteContact: builder.mutation({
            query: id => ({
                url: `/contacts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Contact'],
        }),
    }),
});

export const {
  useGetContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} = contactsApi;