<template>
    <div>
        <Header></Header>
        <slot />
        <Footer></Footer>
        <BackToTop></BackToTop>
    </div>
</template>
<script setup lang="ts">
//     //网页获得焦点失去title变化
//     outTitle:'( ˘▽˘)っ♨乀(ˉεˉ乀)',
//     inTitle:'(*^-^*)',
//     repo: "Renovamen/blog.zxh.io",
//     docsDir: "blog",
//     docsBranch: "master",
//     // .noʎ ʇnq ǝʌol ɹǝɥʇo oN.（倒过来看）
//     hitokoto: "https://v1.hitokoto.cn?c=i", // enable hitokoto (一言) or not?
//     //数字公式渲染
import BackToTop from '@/components/UI/BackToTop.vue';
import { ref, onMounted } from 'vue';
import Footer from './footer.vue';
import Header from './header.vue';
import { useSetDymHead } from '@/composables/Function/useDymHead';
// useSetDymHead();
definePageMeta({
    middleware: 'title',
});
</script>
