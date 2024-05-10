<template>
    <div>ss</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Msg',
    setup() {
        console.log('setup');
    },
    data() {
        return {
            /**
             * 显示文字
             */
            text: '',
            /**
             * 显示图片
             */
            image: '',
            /**
             * 模态框挂载的DOM元素，用于后面销毁模态框
             */
            mountDom: '',
        };
    },
    methods: {
        /**
         * 自定义确定事件
         */
        ok() {},
        /**
         * 自定义取消事件
         */
        cancel() {},
        clickOk() {
            // 先执行自定义确定方法
            this.ok();
            // js传入该模态框实例挂载的元素，关闭时将其销毁
            this.mountDom.remove();
        },
        clickCancel() {
            // 先执行自定义取消方法
            this.cancel();
            // js传入该模态框实例挂载的元素，关闭时将其销毁
            this.mountDom.remove();
        },
    },
});
</script>

<style scope></style>
