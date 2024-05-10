<template>
    <div id="edit">
        <Codemirror
            v-model="code"
            placeholder="Code goes here..."
            :autofocus="true"
            :indent-with-tab="true"
            :tab-size="2"
            :extensions="extensions"
            @ready="handleReady"
            @change="changeValues"
            @focus="log('focus', $event)"
            @blur="log('blur', $event)"
        ></Codemirror>
    </div>
</template>
<script setup lang="ts">
// 全局引入vue-codemirror
import { Codemirror } from 'vue-codemirror';
// 引入主题 可以从 codemirror/theme/ 下引入多个

// 引入语言模式 可以从 codemirror/mode/ 下引入多个
import { javascript } from '@codemirror/lang-javascript';
import { json } from '@codemirror/lang-json';
import { markdown } from '@codemirror/lang-markdown';
import { oneDark } from '@codemirror/theme-one-dark';
import { Style } from '../../../../.nuxt/components';
const extensions = [markdown(), oneDark];

const props = defineProps({
    style: {
        type: Object,
        require: true,
        default: () => {},
    },
    // eslint-disable-next-line vue/require-default-prop
    value: {
        type: String,
        require: true,
        dafault: () => '',
    },
});

const emits = defineEmits(['change-content']);

const code = ref(props.value);
watch(
    () => props.value,
    (newValue, oldValue) => {
        code.value = newValue;
    },
);
// Codemirror EditorView instance ref
const view = shallowRef();
const handleReady = (payload: { view: any }) => {
    view.value = payload.view;
};

const changeValues = (event) => {
    console.log(event);
    code.value = event;
    emits('change-content', event);
};
// Status is available at all times via Codemirror EditorView
const getCodemirrorStates = () => {
    const state = view.value.state;
    const ranges = state.selection.ranges;
    const selected = ranges.reduce(
        (r: any, range: { to: any; from: number }) => r + range.to - range.from,
        0,
    );
    const cursor = ranges[0].anchor;
    const length = state.doc.length;
    const lines = state.doc.lines;
};
const log = console.log;
</script>
<style scope lang="less">
#edit {
    // position: absolute;
    // left: 0px;
}
</style>
