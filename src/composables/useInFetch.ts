import { Ref } from 'nuxt/dist/app/compat/capi';

export const useInFetch = (Url, Options) => {
    return useFetch(Url, {
        onRequest({ request, options }) {
            // Set the request header
        },
        onRequestError({ request, options, error }) {
            // Handle the request errors
        },
        onResponse({ request, response, options }) {
            // Process the response data
            return response._data;
        },
        onResponseError({ request, response, options }) {
            // Handle the response errors
        },
        ...Options,
    });
};
