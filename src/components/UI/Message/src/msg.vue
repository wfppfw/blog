<template>
    <!-- 消息列表 -->
    <div class="message">
        <transition name="slide-fade">
            <div v-show="state.visible" class="message-container">
                <!-- 内容 -->
                <div class="message-content">
                    <!-- 消息类型图标，通过消息类型确定，text类型不配置图标 -->
                    <div v-if="config.icon" class="message-icon">
                        <i :class="config.icon"></i>
                    </div>

                    <!-- 消息文本 -->
                    <span v-text="config.content"></span>

                    <!-- 手动关闭消息 -->
                    <div v-if="!config.close" class="option">
                        <i class="ri-close-fill" @click="onClose"></i>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    config: {
        type: Object,
        default: () => {
            content: '';
        },
    },
    remove: {
        type: Function,
        default: () => {
            return () => undefined;
        },
    },
});
const state = reactive({ visible: true });
const onOpen = (config: { duration: number }) => {
    setTimeout(() => {
        state.visible = true;
    }, 10);
    if (config.duration != 0) {
        setTimeout(() => {
            // onClose();
        }, config.duration);
    }
};
onOpen(props.config as any);
console.log('Message-start', props.config);
const onClose = () => {
    state.visible = false;
    setTimeout(() => {
        props.remove();
    }, 200);
};
</script>
<style lang="less" scoped>
@radius: 4px;
@normalHeight: 34px;

.message {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    z-index: 9999;
    transform: translateZ(9999px);
    padding-top: 28px;
    transition: top 0.4s ease;

    .message-container {
        margin-bottom: 14px;

        .message-icon {
            display: inline-block;

            i {
                font-size: 18px;
                font-weight: 400;
                margin-top: -3px;
                margin-right: 6px;
                display: inline-block;
                box-sizing: border-box;
                vertical-align: middle;
            }

            .ri-checkbox-circle-fill {
                color: #58c05b;
            }

            .ri-close-circle-fill {
                color: #fd4f4d;
            }

            .message-content {
                display: inline-block;
                padding: 4px 18px;
                height: @normalHeight;
                text-align: left;
                line-height: @normalHeight;
                font-size: 14px;
                font-weight: 400;
                border-radius: @radius;
                color: #595959;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                background: #ffffff;

                .option {
                    display: inline-block;
                    pointer-events: all;
                    margin-left: 18px;

                    i {
                        font-size: 18px;
                        font-weight: 400;
                        margin-top: -3px;
                        display: inline-block;
                        box-sizing: border-box;
                        vertical-align: middle;
                        cursor: pointer;
                        color: #d9d9d9;
                        transition: color 0.2s ease;

                        &:hover {
                            color: #ff7c75;
                            transition: color 0.2s ease;
                        }
                    }
                }
            }
        }

        .slide-fade-enter-active {
            transition: all 0.2s ease-out;
        }

        .slide-fade-leave-active {
            transition: all 0.2s ease;
        }

        .slide-fade-enter-from,
        .slide-fade-leave-to {
            transform: translateY(-20px);
            opacity: 0;
        }
    }
}
</style>
