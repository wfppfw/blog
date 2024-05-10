<template>
    <Teleport to="body">
        <!-- <div v-show="visible" class="modal-container"> -->
        <transition name="fade">
            <div v-if="visible" class="modal-mask"></div>
        </transition>
        <transition name="fadeLeft">
            <div v-if="visible" class="modal-wrapper" @click="closeModal">
                <div class="modal" @click.stop="logMsg">
                    <div class="modal-header">
                        <Icon
                            class="close-button"
                            name="uim:multiply"
                            size="2em"
                            @click.stop="closeModal"
                        ></Icon>
                    </div>
                    <div class="modal-body">2</div>
                    <div class="modal-footer">3</div>
                </div>
            </div>
        </transition>
        <!-- </div> -->
    </Teleport>
</template>
<script lang="ts" setup>
const props = defineProps({
    visible: {
        type: Boolean,
        required: false,
    },
});
const emit = defineEmits(['update:visible']);
const visible = ref(props.visible);
watch(
    () => props.visible,
    (value) => {
        visible.value = value;
    },
);
const closeModal = () => {
    emit('update:visible', false);
    console.log(visible.value);
};
const logMsg = () => {
    console.log('');
};
</script>
<style scope>
.close-button {
    left: 24px;
    position: absolute;
    top: 16px;
}
.modal-container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
}
.modal-mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    background-color: rgba(29, 33, 41, 0.6);
}
.modal-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    z-index: 1001;
    text-align: center;
}
.modal {
    position: absolute;
    top: 0px;
    display: inline-block;
    width: 70%;
    left: 0px;
    margin: 0 auto;
    line-height: 1.5715;
    white-space: initial;
    text-align: left;
    background-color: #fff;
    border-radius: 0;
    height: 100vh;
}

.fadeLeft-enter-from,
.fadeLeft-leave-to {
    /*定义进入开始和离开结束的透明度为0*/

    /* opacity: 0; */
    transform: translate3d(-100%, 0, 0);
}

.fadeLeft-enter-to,
.fadeLeft-leave-from {
    /*定义进入结束和离开开始的透明度为1*/

    /* opacity: 1; */
    transform: translate3d(0, 0, 0);
}

.fadeLeft-enter-active,
.fadeLeft-leave-active {
    /*定义进入和离开过渡状态的透明度变化的时间和变化曲线*/
    transition: all 0.5s ease;
}
/*  */
.fade-enter-from,
.fade-leave-to {
    /*定义进入开始和离开结束的透明度为0*/

    opacity: 0;
    /* transform: translate3d(-100%, 0, 0); */
}

.fade-enter-to,
.fade-leave-from {
    /*定义进入结束和离开开始的透明度为1*/

    opacity: 1;
    /* transform: translate3d(0, 0, 0); */
}

.fade-enter-active,
.fade-leave-active {
    /*定义进入和离开过渡状态的透明度变化的时间和变化曲线*/
    transition: all 0.5s ease;
}
</style>
