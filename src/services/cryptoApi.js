import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '07d44650fdmshd7ddc9a33d6ade7p108104jsnd8a5c7b3d195'
}

const baseUrl = `https://coinranking1.p.rapidapi.com`

const createRequest = (url) => ({
  url, headers: cryptoApiHeaders
})

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit-${count}`)
    })
  })
})

export const { useGetCryptosQuery } = cryptoApi