<template>
    <header class="header">
        <nav>
            <div v-show="viewport.isLessThan('tablet')" class="centerWorld">
                <span>Moon's Blog</span>
            </div>
            <div class="leftHeader">
                <div v-if="!viewport.isLessThan('tablet')" class="banner">
                    <NuxtLink to="/"><span> ss </span></NuxtLink>
                </div>
                <div v-else class="banner">
                    <Icon
                        name="uim:bars"
                        size="2em"
                        @click="visible = true"
                    ></Icon>
                    <MenuModal v-model:visible="visible"></MenuModal>
                </div>
            </div>
            <div class="rightHeader">
                <ul>
                    <li v-for="item in headNavList" :key="item.path">
                        <NuxtLink class="listIcon" :to="item.path">
                            <Icon size="1em" :name="item.IconName"></Icon>
                            <span>{{ item.name }}</span>
                        </NuxtLink>
                    </li>
                    <li v-if="!viewport.isLessThan('tablet')">
                        <ModeButton></ModeButton>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
</template>
<script setup lang="ts" name="header">
import { ref, onMounted, watch } from 'vue';
import ModeButton from '@/components/UI/ModeButton.vue';
import MenuModal from '@/components/UI/Modal/menu.vue';
// import HomeSvg from '@/assets/images/svg/switch.svg';

const navRightList = [
    {
        path: '/projects',
        name: 'PROJECTS',
        IconName: 'icon-park-outline:bedside-two',
    },
    {
        path: '/blog',
        name: 'BLOG',
        IconName: 'icon-park-outline:bookshelf',
    },
    {
        path: '/about',
        name: 'ABOUT',
        IconName: 'icon-park-outline:vacation',
    },
];
const visible = ref(false);
const headNavList = ref([...navRightList]);
const viewport = useViewport();
watch(viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
    console.log('Breakpoint updated:', oldBreakpoint, '->', newBreakpoint);
    if (viewport.isLessThan('tablet')) {
        headNavList.value = [];
    } else {
        headNavList.value = navRightList;
    }
});
</script>
<style scoped>
.listIcon {
    margin-top: -5px;
    margin-right: 4px;
}
.centerWorld {
    position: absolute;
    left: 50%;
    transform: translate3d(-50%, 100%, 0);
}
nav {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.header {
    z-index: 30;
    transition: all;
    transition-duration: 0.15s;
    background-color: rgba(255, 255, 255, 0.5) !important;
    backdrop-filter: blur(12px) !important;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    -webkit-backdrop-filter: blur(12px);
    position: sticky;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    top: 0px;
    width: 100%;
    height: 56px;
    font: var(--theme-color);
    background-color: var(--theme-background);
    --un-ring-shadow: 0 0 rgba(0, 0, 0, 0);
    --un-shadow-inset: ;
    --un-shadow: 0 0 rgba(0, 0, 0, 0);
    --un-shadow: 0 1px 8px 0 var(--un-shadow-color, rgba(27, 35, 47, 0.1));
    box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow),
        var(--un-shadow);
}
.rightHeader {
    flex: 1;
    position: relative;
}
.leftHeader {
    flex: 1;
    position: relative;
}
.banner {
    position: absolute;
    left: 24px;
    top: 6px;
}
.rightHeader ul {
    width: 70%;
    position: absolute;
    right: 24px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    display: flex;
}
.rightHeader ul li {
    list-style: none;
    display: inline;
    color: black;
}
.rightHeader ul li a {
    text-decoration: none;
    color: black;
}
.rightHeader ul li:nth-child(4) {
    margin-top: -6px;
}
</style>
