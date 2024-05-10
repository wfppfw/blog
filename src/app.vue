<template>
    <div v-rclick class="container">
        <NuxtLayout>
            <NuxtLoadingIndicator>
                <BasePageLoading></BasePageLoading>
            </NuxtLoadingIndicator>
            <NuxtPage></NuxtPage>
        </NuxtLayout>
        <BaseRclick></BaseRclick>
        <BaseLive2dCatPane></BaseLive2dCatPane>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import logMessage from '@/utils/consoleLog';
const { $dblclick } = useNuxtApp();
logMessage();
onMounted(() => {
    const test = async () => {
        let res = await $fetch('/api/rmFile', {
            body: {
                name: '1',
                mdID: 'index',
                fileID: '2',
                content: 'test-add',
                fileName: '3.md',
                oldName: '3.md',
                newName: '4.md',
            },
            params: { url: '2' },
            method: 'POST',
        });
        console.log(res, 0);
    };
    // test();
    window.document.addEventListener('visibilitychange', function () {
        let titleString = window.document.title;
        let titleArray = titleString.split('|');
        if (window.document.hidden) {
            if (!titleArray[1]) {
                titleArray[1] = ` Moon's blog`;
            }
            window.document.title = 'd(ŐдŐ๑) |' + titleArray[1];
        } else {
            window.document.title = titleString.replace(
                'd(ŐдŐ๑)',
                firstUpperCase(window.location.pathname.split('/')[1]),
            );
        }
    });
    const { colorBallFly } = $dblclick(
        window,
        document as unknown as {
            createElement: (arg0: string) => any;
            body: {
                appendChild: (arg0: DocumentFragment) => void;
                removeChild: (arg0: unknown) => void;
            };
        },
    );
    document.addEventListener('dblclick', function (e) {
        colorBallFly(e.clientX, e.clientY);
        console.log('ondblclick');
    });
});
</script>
<style scoped>
.container {
    height: 100%;
    margin: 0px;
    /* width: 500vh;  */
}
</style>
