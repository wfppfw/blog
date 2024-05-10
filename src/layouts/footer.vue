<template>
    <footer class="footer">
        <div>
            © {{ runtimeConfig.public.adminUserName }}
            <span>
                <div
                    style="display: inline-block"
                    class="animate__animated animate__heartBeat animate__infinite"
                >
                    <img src="@/public/images/heart.svg" alt="" />
                </div>
            </span>
            _ {{ year }}
        </div>
    </footer>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
const year = new Date().getFullYear();
const runtimeConfig = useRuntimeConfig();
console.log(runtimeConfig);
</script>
<style scoped>
.animate__animated {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
}

.animate__heartBeat {
    -webkit-animation-name: heartBeat;
    animation-name: heartBeat;
    -webkit-animation-duration: 2.6s;
    animation-duration: 2.6s;
    -webkit-animation-duration: 2.6s;
    animation-duration: 2.6s;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
}
.animate__animated.animate__infinite {
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
}
@-webkit-keyframes heartBeat {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }

    14% {
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
    }

    28% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }

    42% {
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
    }

    70% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}
@keyframes heartBeat {
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }

    14% {
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
    }

    28% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }

    42% {
        -webkit-transform: scale(1.3);
        transform: scale(1.3);
    }

    70% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
}
.footer {
    display: block;
    font-size: 0.875rem;
    line-height: 1.25rem;
    user-select: none;
    color: var(--footer-color);
    /* opacity: 0.5; */
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 40px;
    background-color: var(--theme-background);
}
</style>
