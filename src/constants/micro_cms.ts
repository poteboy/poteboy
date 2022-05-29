import {createClient} from 'microcms-js-sdk'

export const client = createClient({
    serviceDomain: 'healthfirst',
    apiKey: process.env.MICRO_CMS_API_KEY ?? 'f52ce87215a541ab9701bbe36513a2e46b72',
})