<script setup lang="ts">
import showMsg from '~~/src/components/UI/Message/msgshow';
import Message from '~~/src/components/UI/Message/index.js';

const viewport = useViewport();
const { navigation } = useContent();

console.log(useContent(), navigation);
watch(viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
    console.log('Breakpoint updated:', oldBreakpoint, '->', newBreakpoint);
});

onMounted(() => {
    setTimeout(() => {
        showMsg('text1', 'image', 'ok', 'cancel');
        Message({ text: 'sxa68s6x87a6' });
    }, 3000);
});
</script>

<template>
    <div style="height: 200vh">
        <div v-if="viewport.isLessThan('tablet')">
            Should render only on mobile
        </div>

        <div v-else>Current breakpoint: {{ viewport.breakpoint }}</div>
        <div class="cat">
            <div class="leftEar"></div>
            <div class="rightEar"></div>
            <div class="forehead"></div>
            <div class="leftEye"></div>
            <div class="rightEye"></div>
            <div class="rowNose"></div>
            <div class="colNose"></div>
        </div>
        <NuxtLink
            v-for="link of navigation"
            :key="link._path"
            :to="link._path"
            active-class="font-bold"
            class="mr-6"
        >
            {{ link.title }}
        </NuxtLink>
    </div>
</template>

<style scope>
.cat {
    position: absolute;
    top: 100px;
    left: 100px;
    height: 150px;
    width: 120px;
    border: solid 2px black;
    border-top: transparent;
}
.leftEar {
    position: absolute;
    height: 30px;
    width: 2px;
    background-color: black;
    transform-origin: 0%, 0%;
    transform: rotate(150deg);
    left: 6px;
}
.rightEar {
    position: absolute;
    height: 30px;
    width: 2px;
    background-color: black;
    transform-origin: 0%, 0%;
    transform: rotate(-150deg);
    right: 6px;
}
.forehead {
    position: absolute;
    height: 93px;
    width: 2px;
    background-color: black;
    transform-origin: 0%, 0%;
    transform: rotate(-90deg);
    right: 59px;
    top: -18px;
}
.leftEye {
    position: absolute;
    border: 2px solid black;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    left: 20px;
    top: 50px;
}
.rightEye {
    right: 20px;
    top: 50px;
    position: absolute;
    border: 2px solid black;
    width: 10px;
    height: 10px;
    border-radius: 50%;
}
.colNose {
    position: absolute;
    width: 15px;
    height: 30px;
    background-color: black;
    border-radius: 10px;
    transform-origin: 0%, 0%;
    transform: rotate(0deg);
    top: 88px;
    left: 48px;
}
.rowNose {
    position: absolute;
    width: 60px;
    height: 10px;
    background-color: black;
    border-radius: 15px;
    top: 88px;
    left: 28px;
}
.cat::after {
    position: absolute;
    left: 143px;
    top: 96px;
    content: '';
    width: 200px;
    height: 200px;
    background: radial-gradient(
        circle,
        transparent 50px,
        black 51px,
        transparent 52px
    );
    background-size: 20%;
}
</style>
