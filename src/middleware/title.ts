import { useSetDymHead } from '@/composables/Function/useDymHead';
export default defineNuxtRouteMiddleware((to, from) => {
    // isAuthenticated() is an example method verifying if an user is authenticated
    console.log(to, from);
    useSetDymHead();
});
