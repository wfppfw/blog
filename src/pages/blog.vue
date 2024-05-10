<template>
    <div class="container">
        <EditPane
            :value="content"
            :height="'300px'"
            :width="'50%'"
            @change-content="changeContent"
        ></EditPane>
        <Preview :value="content" :html-str="marked.parse(content)"></Preview>
    </div>
</template>
<script setup lang="ts">
import EditPane from '@/components/blog/editMarkdown/edit.vue';
import Preview from '@/components/blog/editMarkdown/preview.vue';

import { marked } from 'marked';
const content = ref('');
console.log(marked);
const data = ref(
    marked.parse('# Marked in browser\n\nRendered by **marked**.'),
);
const changeContent = (val: string) => {
    console.log('emit-----');
    content.value = val;
};
</script>
<style lang="less" scoped>
.container {
    position: relative;
    width: 100%;
}
</style>
