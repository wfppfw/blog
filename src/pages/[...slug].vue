<template>
    <main>
        <h1>33322</h1>
        <!-- <ContentDoc>
            <template #not-found>
                <h1>Document not found!!!</h1>
            </template>
        </ContentDoc> -->
    </main>
</template>
<script setup>
// import { useRouter } from 'nuxt';
import { onMounted } from 'vue';

const router = useRouter();

onMounted(async () => {
    // await navigateTo('/404');
    // navigateTo({ path: '/', query: { data: 123 } });
});
</script>
