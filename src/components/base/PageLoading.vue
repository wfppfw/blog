<template>
    <div class="loading-container">
        <div class="Aniya"></div>
    </div>
</template>
<script lang="ts" setup></script>
<style scope>
.loading-container {
    z-index: 99;
    position: fixed;
    left: calc(50% - 37.5px);
}
.Aniya {
    animation: Aniya-walk-cycle 0.8s steps(7) infinite;
    background: url('https://pic.imgdb.cn/item/63c6167bbe43e0d30e58fda3.png') 0
        0 no-repeat;
    height: 100px;
    width: 75px;
}
@keyframes Aniya-walk-cycle {
    0% {
        background-position: -0 -0;
    }
    100% {
        background-position: -525px -0;
    }
}
</style>
