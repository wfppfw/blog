<template>
    <div id="preview">
        <div v-dompurify-html="htmlStr" class="mdbody"></div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    htmlStr: {
        type: String,
        required: true,
    },
    height: {
        type: String,
        require: true,
        default: '50%',
    },
});
const htmlStr = ref(props.htmlStr);
watch(
    () => props.htmlStr,
    (newVal) => {
        htmlStr.value = newVal;
    },
);
</script>
<style scope>
#preview {
    /* position: absolute;
    width: 50%;
    right: 0px; */
}
.mdbody {
    max-width: 800px;
    margin: 0 auto;
    padding: 16px 4%;
}
</style>
