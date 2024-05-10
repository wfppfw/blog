<template>
    <div class="container">
        <div class="head">
            <div class="left-box">
                <Icon size="1.2em" name="material-symbols:arrow-back"></Icon>
            </div>
            <input
                placeholder="输入文章标题..."
                spellcheck="false"
                maxlength="80"
                class="title-input"
            />
            <div class="right-box">
                <div class="status-text">文章将自动保存至草稿箱</div>
                <div class="drafts">草稿箱</div>
                <div class="publish">发布</div>
                <div class="switch">
                    <Icon name="icon-park:switch" size="1.2em"></Icon>
                </div>
                <div class="user"></div>
            </div>
        </div>
        <div class="toolbar">
            <div class="toolbar-left">
                <div>
                    <Icon size="1.2em" name="lucide:heading"></Icon>
                </div>
                <div>
                    <Tooltip contents="粗体">
                        <Icon
                            size="1.2em"
                            name="material-symbols:format-bold"
                        ></Icon>
                    </Tooltip>
                </div>
                <div>
                    <Tooltip contents="斜体">
                        <Icon
                            size="1.2em"
                            name="material-symbols:format-italic"
                        ></Icon>
                    </Tooltip>
                </div>
                <div>
                    <Icon
                        size="1.2em"
                        name="material-symbols:format-quote"
                    ></Icon>
                </div>
                <div><Icon size="1.2em" name="mdi:link-variant"></Icon></div>
                <div>
                    <Icon
                        size="1.2em"
                        name="material-symbols:image-sharp"
                    ></Icon>
                </div>
                <div><Icon size="1.2em" name="ph:code-bold"></Icon></div>
                <div><Icon size="1.2em" name="bx:code-block"></Icon></div>
                <div><Icon size="1.2em" name="tabler:code-dots"></Icon></div>
                <div>
                    <Icon
                        size="1.2em"
                        name="ic:twotone-format-list-bulleted"
                    ></Icon>
                </div>
                <div>
                    <Icon
                        size="1.2em"
                        name="ic:twotone-format-list-numbered"
                    ></Icon>
                </div>
                <div>
                    <Icon size="1.2em" name="material-symbols:task-alt"></Icon>
                </div>
                <div>
                    <Icon size="1.2em" name="material-symbols:table"></Icon>
                </div>
                <div>
                    <Icon
                        name="icon-park-outline:alignment-horizontal-center"
                    ></Icon>
                </div>
                <div><Icon size="1.2em" name="icon-park:formula"></Icon></div>
                <div><Icon size="1.2em" name="mdi:chart-line"></Icon></div>
            </div>
            <div class="toolbar-right">
                <div>
                    <Icon size="1.2em" name="arcticons:bookcatalogue"></Icon>
                </div>
                <div>
                    <Icon
                        size="1.2em"
                        name="material-symbols:help-center"
                    ></Icon>
                </div>
                <div><Icon size="1.2em" name="la:file-import"></Icon></div>
                <div>
                    <Icon
                        size="1.2em"
                        name="carbon:open-panel-filled-left"
                    ></Icon>
                </div>
                <div>
                    <Icon
                        size="1.2em"
                        name="carbon:open-panel-filled-right"
                    ></Icon>
                </div>
                <div>
                    <Icon size="1.2em" name="akar-icons:full-screen"></Icon>
                </div>
            </div>
        </div>
        <div class="content">
            <EditPane
                class="edit-pane"
                :value="content"
                @change-content="changeContent"
            ></EditPane>
            <Preview
                class="preview"
                :value="content"
                :html-str="marked.parse(content)"
            ></Preview>
        </div>
        <div class="bottom">
            <div class="status_left">
                <span>字数: {{ contentMsg.words }}</span>
                <span>行数: {{ contentMsg.paragraphs }}</span>
            </div>
            <div class="status_right">
                <label><input type="checkbox" />同步滚动</label>
                <span>回到顶部</span>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import EditPane from '@/components/blog/editMarkdown/edit.vue';
import Preview from '@/components/blog/editMarkdown/preview.vue';
import { marked } from 'marked';
import Countable from '@/utils/Coun_table';
import Tooltip from '@/components/UI/Tooltip/tooltip.vue';
definePageMeta({
    layout: false,
});

const content = ref('');

const data = ref(
    marked.parse('# Marked in browser\n\nRendered by **marked**.'),
);
const changeContent = (val: string) => {
    content.value = val;
};
const contentMsg = ref({
    words: 0,
    paragraphs: 0,
});
watch(
    () => content.value,
    (newValue) => {
        Countable.count(
            newValue,
            (res: { words: number; paragraphs: number }) => {
                contentMsg.value.words = res.words;
                contentMsg.value.paragraphs = res.paragraphs;
            },
        );
    },
);
</script>
<style lang="less" scoped>
:deep(.cm-activeLine) {
    background-color: #f8f9fa;
}
:deep(.cm-activeLineGutter) {
    background-color: #f8f9fa;
}
.container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}
.head {
    height: 63px;
    display: flex;
    border-bottom: 1px solid #ddd;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .right-box {
        display: flex;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-pack: end;
        -ms-flex-pack: end;
        justify-content: flex-end;
        div {
            margin-left: 8px;
            margin-right: 8px;
        }
        .status-text {
            font-size: 14px;
            white-space: nowrap;
            color: #c9cdd4;
            cursor: default;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        .drafts {
            min-width: 76px;
            color: #1d7dfa;
            background-color: #fff;
            height: 32px;
            padding: 2px 16px;
            font-size: 14px;
            line-height: 24px;
            border: 1px solid #1d7dfa;
            border-radius: 2px;
            cursor: pointer;
            box-sizing: border-box;
        }
        .switch {
            cursor: pointer;
            box-sizing: border-box;
            padding: 2px 16px;
        }
        .publish {
            min-width: 62px;
            user-select: none;
            height: 32px;
            padding: 2px 16px;
            font-size: 14px;
            line-height: 24px;
            border: 1px solid #1d7dfa;
            border-radius: 2px;
            cursor: pointer;
            color: #fff;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            background-color: #1d7dfa;
        }
        .user {
            background-image: url('https://p3-passport.byteimg.com/img/user-avatar/e3a1d72869fb8e6f44b561762bb64958~64x64.awebp');
            width: 1.667rem;
            height: 1.667rem;
            border-radius: 50%;
            background-color: #eee;
            background-position: 50%;
            background-size: cover;
            background-repeat: no-repeat;
            cursor: pointer;
        }
    }

    .title-input {
        -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        height: 100%;
        margin: 0;
        padding: 0;
        font-size: 24px;
        font-weight: 500;
        color: #1d2129;
        border: none;
        outline: none;
    }

    .left-box {
        padding-right: 14px;
        padding-left: 14px;
        cursor: pointer;
    }
}
.toolbar {
    padding: 4px 0px;
    border-bottom: 1px solid #e1e4e8;
    background-color: #fafbfc;
    height: 32px;
    width: 100%;
    user-select: none;
    overflow: hidden;
    .toolbar-left {
        float: left;
        display: flex;
        div {
            display: inline-block;
            vertical-align: top;
            cursor: pointer;
            border-radius: 4px;
            margin-left: 6px;
            margin-right: 6px;
        }
    }
    .toolbar-right {
        float: right;
        display: flex;
        div {
            display: inline-block;
            vertical-align: top;
            cursor: pointer;
            border-radius: 4px;
            margin-left: 6px;
            margin-right: 6px;
        }
    }
}
.content {
    // height: 500px;
    height: calc(100% - 58px);
    overflow: auto;
    .edit-pane {
        display: inline-block;
        vertical-align: top;
        height: 100%;
        width: 50%;
        overflow: hidden;
        :deep(.cm-editor) {
            height: 100%;
            background: #f8f9fa;
            .cm-gutters {
                background-color: #f8f9fa;
                // color: #7d8799;
                color: #000;
            }
        }
    }

    .preview {
        display: inline-block;
        vertical-align: top;
        height: 100%;
        width: 50%;
        overflow: hidden;
        box-sizing: border-box;
        border-left: 1px solid #e1e4e8;
    }
}
.bottom {
    // height: 24px;
    box-sizing: border-box;
    width: 100%;
    font-size: 12px;
    line-height: 24px;
    border-top: 1px solid #e1e4e8;
    user-select: none;
    .status_left {
        float: left;
        margin: 0px 4px;
        span {
            padding-left: 16px;
        }
    }
    .status_right {
        margin: 0px 4px;
        float: right;
        span {
            margin-right: 16px;
            cursor: pointer;
        }
        label {
            margin-right: 16px;
            cursor: pointer;
            input {
                vertical-align: middle;
                margin-right: 3px;
            }
        }
    }
}
</style>
