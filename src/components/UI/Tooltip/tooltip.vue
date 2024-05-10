<template>
    <div ref="tooltipSlot" class="tooltip-slot"><slot></slot></div>
    <div ref="tooltipContent" class="tips">
        <div class="popup-wrapper">
            <div class="tooltip-content">{{ props.contents }}</div>
            <div class="tooltip-popup-arrow"></div>
        </div>
    </div>
</template>
<script lang="ts" setup name="Tooltip">
import { createPopper } from '@popperjs/core';

const tooltipSlot = ref(null);
const tooltipContent = ref(null);

// "top" | "tl" | "tr" | "bottom" | "bl" | "br" | "left" | "lt" | "lb" | "right" | "rt" | "rb"
const props = defineProps({
    visible: {
        type: Boolean,
        required: false,
    },
    contents: {
        type: String,
        required: false,
        default: '',
    },
    position: {
        type: String,
        required: false,
        default: '',
    },
});
const emit = defineEmits(['update:visible']);
const visible = ref(props.visible);
onMounted(() => {
    createPopper(
        tooltipSlot.value as unknown as HTMLElement,
        tooltipContent.value as unknown as HTMLElement,
        {
            placement: 'top',
        },
    );
});
</script>
<style scope>
.tooltip-slot:hover + .tips {
    display: block;
}
.tips:hover {
    display: block;
}
.tips {
    top: 100px;
    position: absolute;
    z-index: 1001;
    pointer-events: auto;
    display: none;
}
.popup-wrapper {
    transform-origin: 50% 100%;
}
.tooltip-content {
    padding: 4px 10px;
    font-size: 12px;
    color: #fff;
    line-height: 1.5715;
    text-align: left;
    word-wrap: break-word;
    background-color: rgb(29, 33, 41);
    border-radius: 2px;
}
.tooltip-popup-arrow {
    left: 24px;
    bottom: 0px;
    transform: translate(-50%, 50%) rotate(45deg);
    position: absolute;
    /* z-index: -1; */
    display: block;
    box-sizing: border-box;
    width: 8px;
    height: 8px;
    background-color: rgb(29, 33, 41);
    content: '';
}
</style>
