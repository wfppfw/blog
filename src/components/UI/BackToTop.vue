<template>
    <transition>
        <div v-show="showBackTop" class="back-top" @click.stop="backToTop">
            <div class="rockets">
                <!-- 火箭的主体部分  -->
                <div class="rockets-body"></div>
                <!-- 火箭的窗口部分 -->
                <div class="rockets-windows">
                    <span></span>
                    <span></span>
                    <div class="hongqi">
                        <svg
                            t="1674649685381"
                            class="icon"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            p-id="12100"
                            width="20"
                            height="20"
                        >
                            <path
                                d="M554.666667 810.666667h-85.333334a212.138667 212.138667 0 0 1-119.125333-36.437334l40.832-6.826666a42.666667 42.666667 0 1 0-14.08-84.138667l-94.037333 15.658667a210.602667 210.602667 0 0 1-24.661334-79.317334l118.698667 19.797334a42.666667 42.666667 0 0 0 14.08-84.138667L256 532.736V512c0-117.632 95.701333-213.333333 213.333333-213.333333h85.333334c117.632 0 213.333333 95.701333 213.333333 213.333333v20.736l-135.04 22.528a42.666667 42.666667 0 1 0 14.08 84.138667l118.698667-19.797334a210.602667 210.602667 0 0 1-24.661334 79.317334l-94.037333-15.658667a42.666667 42.666667 0 1 0-14.08 84.138667l40.832 6.826666A212.138667 212.138667 0 0 1 554.666667 810.666667zM323.029333 251.904a300.544 300.544 0 0 0-87.381333 74.624l-13.909333-125.312 101.290666 50.688z m479.232-50.688l-13.909333 125.312a300.544 300.544 0 0 0-87.381333-74.624l101.290666-50.688z m100.778667 524.714667a42.666667 42.666667 0 1 1-14.08 84.138666l-108.288-18.048A297.941333 297.941333 0 0 1 554.666667 896h-85.333334a297.941333 297.941333 0 0 1-226.005333-103.978667l-108.288 18.048a42.666667 42.666667 0 0 1-14.08-84.138666l73.344-12.202667a297.386667 297.386667 0 0 1-23.253333-108.629333l-50.090667-8.362667a42.666667 42.666667 0 1 1 14.08-84.138667l35.626667 5.930667v-4.266667L128.256 132.693333a42.581333 42.581333 0 0 1 61.482667-42.88l250.026666 125.013334A307.626667 307.626667 0 0 1 469.333333 213.333333h85.333334c9.984 0 19.84 0.554667 29.568 1.493334l250.026666-125.013334a42.581333 42.581333 0 0 1 61.482667 42.88L853.333333 514.261333v4.266667l35.626667-5.930667a42.666667 42.666667 0 1 1 14.08 84.138667l-50.090667 8.362667a297.386667 297.386667 0 0 1-23.253333 108.629333l73.344 12.202667zM426.666667 426.666667a42.666667 42.666667 0 1 0 0 85.333333 42.666667 42.666667 0 0 0 0-85.333333z m213.333333 42.666666a42.666667 42.666667 0 1 0-85.333333 0 42.666667 42.666667 0 0 0 85.333333 0z m-128 85.333334a42.666667 42.666667 0 1 0 0 85.333333 42.666667 42.666667 0 0 0 0-85.333333z"
                                fill="#8a8a8a"
                                p-id="12101"
                            ></path>
                        </svg>
                    </div>
                </div>
                <div class="rockets-bottom">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="fire burn">
                    <span></span>
                    <span></span>
                    <span></span>
                    <div class="glow"></div>
                </div>
            </div>
            <div class="shadow"></div>
        </div>
    </transition>
</template>
<script setup lang="ts">
const showBackTop = ref(false);
const scrollToTop = (el: HTMLElement) => {
    const cubic = (value: number) => Math.pow(value, 3);
    const easeInOutCubic = (value: number) =>
        value < 0.5 ? cubic(value * 2) / 2 : 1 - cubic((1 - value) * 2) / 2;
    const beginTime = Date.now();
    const beginValue = el.scrollTop;
    const rAF =
        window.requestAnimationFrame || ((func) => setTimeout(func, 16));
    const frameFunc = () => {
        const progress = (Date.now() - beginTime) / 500;
        if (progress < 1) {
            el.scrollTop = beginValue * (1 - easeInOutCubic(progress));
            rAF(frameFunc);
        } else {
            el.scrollTop = 0;
            document.querySelector('.rockets')?.classList.remove('launch');
        }
    };
    rAF(frameFunc);
};
const backToTop = () => {
    document.querySelector('.rockets')?.classList.add('launch');
    scrollToTop(document.documentElement || document.body);
};
const handleScroll = () => {
    const el = document.documentElement || document.body;
    showBackTop.value = el.scrollTop > 300;
};
onMounted(() => {
    window.addEventListener('scroll', handleScroll, false);
    window.addEventListener('resize', handleScroll, false);
});
onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll, false);
    window.removeEventListener('resize', handleScroll, false);
});
</script>
<style lang="less" scoped>
.back-top {
    position: fixed;
    width: 60px;
    height: 80px;
    bottom: 20px;
    right: 20px;
    // border: 1px solid black;
}
.rockets {
    width: 100px;
    height: 100px;
    position: absolute;
    bottom: 46px;
    right: -24px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 2s ease;
    animation: float 1.5s ease infinite alternate;
}

.rockets .fire {
    visibility: hidden;
    /* display: none; */
}

.rockets:hover .fire {
    visibility: inherit;
    /* display: inline; */
}

.rockets-body {
    width: 35%;
    height: 80%;
    border: 1px solid #e4e4e4;
    background-color: white;
    /* 设置圆角 */
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;
    /* flex布局 */
    display: flex;
    justify-content: center;
    /* 为 :before :after 确定定位基准 */
    position: relative;
    z-index: 1;
    box-shadow: inset 0px -57px 0px -26px white,
        inset 0px -71px 0px -20px #e4e4e4;
}

.rockets-body:before {
    content: '';
    position: absolute;
    width: calc(100% - 16px);
    height: 24%;
    background-color: inherit;
    bottom: -10px;
    transform: perspective(2em) rotateX(-50deg);
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    box-shadow: inset 0px -33px 0px 0px rgba(0, 0, 0, 0.1);
}

.rockets-body:after {
    content: '';
    position: absolute;
    width: 45%;
    height: 20px;
    background-color: #f95959;
    bottom: -14px;
    transform: perspective(2em) rotateX(-50deg);
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    z-index: -1;
}

.rockets-windows {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    position: absolute;
}

.rockets-windows span {
    background-color: #ace7ef;
    box-shadow: inset -4px 4px 0px 0px rgba(0, 0, 0, 0.3),
        inset 0px 0px 0px 2px white;
    border: 1px solid #f95959;
    z-index: 2;
    position: absolute;
    border-radius: 100%;
    overflow: hidden;
}

.rockets-windows span:before {
    position: absolute;
    content: '';
    background-color: white;
    width: 200%;
    height: 100%;
    transform: rotate(45deg);
    opacity: 0.4;
}

.rockets-windows span:nth-child(1) {
    width: 10px;
    height: 10px;
    top: 23%;
}

.rockets-windows span:nth-child(1):before {
    top: 10px;
    right: 0px;
}

.rockets-windows span:nth-child(2) {
    width: 15px;
    height: 15px;
    top: 40%;
}

.hongqi {
    width: 30px;
    height: 20px;
    /* background-image: url(./hongqi2.jpeg); */
    position: absolute;
    background-size: cover;
    bottom: 22px;
    left: 40px;
    z-index: 1;
    /* box-shadow: 0px 0px 0px 1px #e4e4e4; */
}

.rockets-windows span:nth-child(2):before {
    top: 12px;
    right: 0px;
}

@keyframes float {
    0% {
        transform: translateY(16px);
    }

    100% {
        transform: translateY(0px);
    }
}

/************* 火箭的底部部分 *************/
.rockets-bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    position: absolute;
}

.rockets-bottom span {
    background-color: #4ba3b7;
    border-radius: 10px;
    position: absolute;
    overflow: hidden;
}

.rockets-bottom span:before {
    content: '';
    position: absolute;
    background-color: white;
    width: 2px;
    height: 120%;
    border-radius: 20px;
}

.rockets-bottom span:nth-child(1) {
    width: 5px;
    height: 28px;
    z-index: 2;
    bottom: -6%;
    box-shadow: inset -5px -3px 0px 0px rgba(0, 0, 0, 0.18);
}

.rockets-bottom span:nth-child(1):before {
    display: none;
}

.rockets-bottom span:nth-child(2) {
    width: 16px;
    height: 43px;
    left: 31%;
    bottom: 6%;
    transform: perspective(5em) rotateX(60deg) translateZ(-1px);
    box-shadow: inset -5px -3px 0px 0px rgba(0, 0, 0, 0.2);
}

.rockets-bottom span:nth-child(2):before {
    left: 0px;
    border-right: 2px solid #f95959;
}

.rockets-bottom span:nth-child(3) {
    width: 16px;
    height: 43px;
    right: 30%;
    bottom: 6%;
    transform: perspective(5em) rotateX(60deg) translateZ(-1px);
    box-shadow: inset -5px -3px 0px 0px rgba(0, 0, 0, 0.2);
}

.rockets-bottom span:nth-child(3):before {
    right: 0px;
    border-left: 2px solid #f95959;
}

.shadow {
    width: 50px;
    height: 10px;
    background-color: black;
    position: absolute;
    border-radius: 100%;
    opacity: 0.2;
    bottom: -21px;
    z-index: -1;
    animation: shadow 1.5s ease infinite alternate;
    transition: all 0.5s ease;
    right: 4px;
}

@keyframes shadow {
    0% {
        width: 50px;
    }

    100% {
        width: 40px;
    }
}

/* 飞船的点火部分 */
.fire {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    position: absolute;
    bottom: -50px;
    left: 4px;
}

.fire.burn span {
    border-radius: 50px;
    top: 0;
    position: absolute;
    background-color: #ffd460;
    height: inherit;
    animation: fire 0.8s ease infinite alternate;
}

.fire.burn span:nth-child(1) {
    width: 6px;
    height: 40px;
    left: 44%;
    transform: translateY(27px);
    box-shadow: inset 0px -7px 10px #ea5455, inset 0px -19px 10px #ffc175,
        0px -7px 10px #ea5455;
    animation-delay: 0.2s;
}

.fire.burn span:nth-child(1):after {
    position: absolute;
    content: '';
    width: 4px;
    height: 60%;
    border-radius: 50px;
    background-color: #ffd460;
    bottom: 0;
    transform: translate(8px, 15px);
    box-shadow: inset 0px -5px 10px #ea5455, inset 0px -19px 10px #ffc175,
        0px -7px 10px #ea5455;
}

.fire.burn span:nth-child(2) {
    width: 10px;
    height: 60px;
    left: calc(50% - 8px);
    transform: translateY(35px);
    box-shadow: inset 0px -10px 10px #ea5455, inset 0px -30px 10px #ffc175,
        0px -7px 10px #ea5455;
}

.fire.burn span:nth-child(2):after {
    position: absolute;
    content: '';
    width: 10px;
    height: 100%;
    border-radius: 10px;
    background-color: #ffd460;
    top: 0;
    transform: translate(-6px, -25px);
    box-shadow: inset 0px -5px 10px #ea5455, inset 0px -15px 10px #ffc175,
        0px -7px 10px #ea5455;
}

.fire.burn span:nth-child(3) {
    width: 10px;
    height: 40px;
    right: 45%;
    transform: translateY(27px);
    box-shadow: inset 0px -5px 10px #ea5455, inset 0px -30px 10px #ffc175,
        0px -7px 10px #ea5455;
    animation-delay: 0.4s;
}

.fire.burn span:nth-child(3):after {
    position: absolute;
    content: '';
    width: 6px;
    height: 180%;
    border-radius: 10px;
    background-color: #ffd460;
    top: 0;
    transform: translate(-6px, -15px);
    box-shadow: inset 0px -5px 10px #ea5455, inset 0px -20px 10px #ffc175,
        0px -7px 10px #ea5455;
}

@keyframes fire {
    0% {
        height: 10px;
        bottom: 0;
        /* 50% {
top: 0;
}
100% {
height: 20px;
bottom: 0;
} */
    }
}

.fire.burn > .glow {
    position: absolute;
    width: 0px;
    height: 0px;
    border-radius: 100%;
    box-shadow: 0px 0px 50px 20px #ea5455;
    opacity: 1;
    animation: glow 0.1s ease infinite alternate;
}

@keyframes glow {
    0% {
        box-shadow: 0px 0px 50px 20px #ea5455;
    }

    100% {
        box-shadow: 0px 0px 50px 25px #ea5455;
    }
}

/* 火箭发射样式 */
.rockets.launch {
    bottom: 120%;
    animation: launch 0.5s ease;
}

@keyframes launch {
    0% {
        bottom: 130px;
        transform: translatex(2px);
    }

    10% {
        transform: translatex(-2px);
    }

    20% {
        transform: translatex(2px);
    }

    30% {
        transform: translatex(-2px);
    }

    60% {
        transform: translatex(0px);
        bottom: 150px;
    }

    100% {
        bottom: 120%;
        opacity: 0;
    }
}
</style>
