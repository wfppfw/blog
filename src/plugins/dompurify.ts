import VueDOMPurifyHTML from 'vue-dompurify-html';
export default defineNuxtPlugin((nuxtApp) => {
    //预防v-html的xss攻击
    nuxtApp.vueApp.use(VueDOMPurifyHTML);
});
