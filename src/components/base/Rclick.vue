<template>
    <transition name="rclick">
        <div
            v-show="rclickInfo.DisplayStatus"
            ref="container"
            :style="{ left: rclickInfo.left, top: rclickInfo.top }"
            class="rclick"
        >
            <div class="button button--bird">
                <div class="button__wrapper">
                    <div class="flower"></div>
                    <ul>
                        <li @click="reloadFn"><div>Reload</div></li>
                        <li>Color Mode</li>
                        <li>Destory</li>
                        <li @click="handleCat">Call LIVE2d Cat</li>
                    </ul>
                    <!-- <span class="button__text">ENTRY</span> -->
                </div>

                <div class="birdBox">
                    <div class="bird wakeup">
                        <div class="bird__face"></div>
                    </div>
                    <div class="bird wakeup">
                        <div class="bird__face"></div>
                    </div>
                    <div class="bird">
                        <div class="bird__face"></div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { RclickStore } from '@/stores/useRclickStore';
import { useLive2d } from '@/composables/UI/useLive2d';
import { live2dStore } from '@/stores/live2dCat';
const live2d = live2dStore();
const rclickInfo = RclickStore();
const container = ref(null);
const reloadFn = ref();
const handleCat = () => {
    useLive2d(
        () => {
            live2d.isShow = !live2d.isShow;
        },
        'tororo',
        'live2d',
    );
};
const showCatFn = () => {
    console.log('');
};
onMounted(() => {
    // console.log(container.value.clientWidth, container.value.clientHeidth);
    reloadFn.value = () => {
        location.reload();
    };
});
</script>

<style scope>
.rclick {
    position: fixed;
    left: 0;
    top: 0;
}
.button__wrapper li:hover {
    background-color: white;
    /* font-size: 20px; */
}
.button__wrapper li:nth-child(1) {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
}
.rclick-leave-to {
    opacity: 0;
}

.rclick-leave-from {
    opacity: 1;
}

.rclick-enter-active,
.rclick-leave-active {
    /*定义进入和离开过渡状态的透明度变化的时间和变化曲线*/
    transition: opacity 0.1s ease;
}
.button__wrapper ul {
    margin-left: -74px;
    margin-top: -57px;
    width: 100%;
}
.button__wrapper li {
    list-style: none;
    font-size: 18px;
    letter-spacing: 2px;
    user-select: none;
    padding: 10px 0px 0px 28px;
}

.flower {
    /* display: none; */
    border: 3px solid black;
    width: 30px;
    height: 20px;
    border-bottom: transparent;
    border-right: transparent;
    border-top: transparent;
    position: relative;
    left: 20px;
    bottom: -145px;
    z-index: 1;
    transition: all 0.5s ease;
}

.flower::before {
    content: '';

    z-index: 2;
    position: absolute;
    bottom: 4px;
    width: 32px;
    height: 32px;
    left: -17px;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB0PSIxNjcyMzQ1NDQ0ODg1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgICAgICAgcC1pZD0iMTEyODMiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+CgoKICAgICAgICA8cGF0aAogICAgICAgICAgICBkPSJNMzY5LjIzMjM5NyA3NTQuMzQxMDI1YzQ4LjU1MTE0IDYyLjE0MjQxMyAzOS44MTc1MjEgMTYyLjM1OTAwOCA3Ljk1NTA0MSAyMjkuMTk4MjgxLTQ3Ljc4OTQ4OCAzMC4yNzE0NzEtMTEzLjA4MDA2NiAxMS4yMTMyMjMtMTU2LjgyNDMzMS0xMy40ODEyNTYtNzYuNDUzMDI1LTU1LjY4NTI4OS0xMzEuNDYxMjg5LTE0MS43NTIwNjYtMTEyLjMwMTQ4Ny0yNDAuNDYyMjgxIDYuMzU1NTctMjIuOTg0OTkyIDE3LjU2ODc5My01MC45Mzc2NTMgNDMuODAzNTA0LTU4Ljg5MjY5NSA4My42Mjk0ODgtMjEuNDg3MDc0IDE3MC4zNTYzNjQgNi4zNTU1NyAyMTcuMzU4ODEgODMuNjM3OTUxTTkxMC42MTUyNzMgNzM1LjE2NDI5OGMxOC4zMzg5MDkgOTEuNDgyOTc1LTIwLjY2NjE4MiAxNzguMzc5MTA3LTk5LjQ4ODc5NCAyMzEuNzM3MTIzLTUwLjk3OTk2NyAzNi42MjcwNDEtMTIyLjYyNjExNiA1OC45NDM0NzEtMTg1LjUzODY0NCAzMS44MjAxNjYtNDEuNDI1NDU1LTIzLjgxNDM0Ny0zOS44MjU5ODMtNzguODIyNjEyLTM4LjE2NzI3My0xMjQuMTMyNDk2LTAuODI5MzU1LTcxLjY5NjkyNiA2MS4yNTM4MTgtMTMzLjc5NzAyNSAxMjAuMTg4ODI2LTE2NC4wNjAwMzMgNTYuNTE0NjQ1LTIxLjU5NzA5MSAxMjguOTgxNjg2LTI1LjUyMzgzNSAxODUuNDQ1NTU0LTEuNjA3OTM0IDkuNjU2MDY2IDcuMTkzMzg4IDEzLjYzMzU4NyAxNi43Mzk0MzggMTcuNTYwMzMxIDI2LjI1MTYzNiIKICAgICAgICAgICAgZmlsbD0iIzIzMTkxNiIgcC1pZD0iMTEyODYiPjwvcGF0aD4KICAgICAgICA8cGF0aAogICAgICAgICAgICBkPSJNMzM0Ljk1ODAxNyA3OTguMTI3NjAzYzE4LjI3OTY2OSA0MC42NTUzMzkgMjMuMDM1NzY5IDkzLjE0MTY4NiA0LjAyODI5NyAxMzMuNzk3MDI1LTE1LjEzOTk2NyAyNS40MTM4MTgtNDguNjEwMzggOC42NzQzOC03MC45MTgzNDcgNy45NTUwNDEtNTguODkyNjk0LTE5LjE2ODI2NC05Ny44ODkzMjItNzguMTExNzM2LTEwOS4xMDI1NDYtMTM1LjQwNDk1OC0zLjkxODI4MS0yNi4yMzQ3MTEtMS41NDg2OTQtNTQuOTU3NDg4IDkuNjEzNzUzLTc2LjQ0NDU2MiA2My43NDE4ODQtMTkuODg3NjAzIDEzMi45NTA3NDQgMTAuMzgzODY4IDE2Ni4zNzg4NDMgNzAuMDk3NDU0TTg1My4zMDUxMjQgNzU4LjM2OTMyMmMxOS4xMTc0ODggNDQuNDgwNTI5IDAgOTIuMzEyMzMxLTI1LjQ2NDU5NSAxMjguMDU5MjQtNDUuNDAyOTc1IDQ4LjYxMDM4LTEwNS4xMDgwOTkgODEuMzEwNjc4LTE3Mi4wMDY2MTIgNjEuNDIzMDc0LTI1LjQ2NDU5NS0zMC4zODE0ODgtNy45MDQyNjQtNzguODczMzg4IDAtMTEzLjE4MTYxOSAyMy4wOTUwMDgtNDYuOTUxNjY5IDcwLjg2NzU3LTg5LjExMzM4OCAxMjQuMjg0ODI3LTg5LjkzNDI4MSAyNy4wMTMyODktMC43NzAxMTYgNTIuNTI4NjYxIDAuODI5MzU1IDczLjE4NjM4IDEzLjY0MjA0OSIKICAgICAgICAgICAgZmlsbD0iIzE1QUI0QSIgcC1pZD0iMTEyODciPjwvcGF0aD4KICAgIDwvc3ZnPg==');
    transition: all 0.5s ease;
}

.flower::after {
    content: '';

    z-index: 2;
    position: absolute;
    bottom: 14px;
    width: 32px;
    height: 32px;
    left: -18px;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB0PSIxNjcyMzM5NjUxMzkwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDExMjIgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijg0NjgiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTUwLjQ4OTg3MiA2NjQuNDc3OTU3YzU0Ljg2MDI1NS0xNi43NjUyNzcgMTEzLjIzOTE0OS00My45MDEyNzcgMTQ2LjI3OTQ5LTEwMi42MDY5NzggMTYuODE5NzQ1LTI5LjA1MzI3NyAzMy4wNTEyMzQtNzkuNzMwMzgzIDEyLjk2MzQwNC0xNDQuNjg5MDIyLTExLjQzODI5OC00NS41NTcxMDYtMTExLjMwMDA4NS0xOTguNDI3MjM0LTM0OS44MDQ5MzYtMTIyLjY4MzkxNCA0LjM5MDEyOC0xMDUuMTIzNDA0LTM3LjEwMzY2LTIxNy4wNDQ0MjYtMTI1LjEzNDk3OS0yNjEuOTkxNDlDNTgxLjM5MjM0IDIuOTE5NDg5IDUxNi43MDYwNDMgMy4xODA5MzYgNDU2LjU5NTA2NCAzMy41NzQxMjhjMCAwLTEyMC42MTQxMjggNTkuNTc3MTkxLTExNC4yMzA0NjggMjY3Ljc2NTEwNi0zNi41MDQ1MTEtMTEuOTYxMTkxLTc0LjkzNzE5MS0yMS4wMDI4OTQtMTE0LjAzNDM4My0yMC40MDM3NDUtNzguMjU5NzQ1LTMuMzMzNDQ3LTE3NC41Mzc1MzIgMzUuMzcxNTc0LTIxMC41MDgyNTYgMTE3LjgyNTM2MiAwIDAtMzcuMjM0MzgzIDgzLjM3OTc0NSAyMS45Mzk3NDUgMTczLjc1MzE5MiAwIDAgNTQuMTk1NzQ1IDgxLjE5MDEyOCAyMDIuNTk5NDg5IDEyMS4xNDc5MTQtNDAuMDIzMTQ5IDgxLjcyMzkxNS00OC4xNDk3ODcgMTUyLjE0MDI1NS0yNC42NzQwNDIgMjEzLjUxNDg5NCAyMS45NTA2MzggNTguMDUyMDg1IDczLjk0NTg3MiA5OC4wODYxMjggMTQyLjYzMDEyOCAxMTAuMDQ3MzE5IDAgMCAxMzkuNDkyNzY2IDI2LjA2ODQyNiAyNDQuNzQ2ODkzLTEzOS4zNzI5MzYgNDUuMDg4NjgxIDY1LjgzMDEyOCAxMTQuNjMzNTMyIDEzNy4xMTc5NTcgMjI1LjQ3NjA4NSAxNDQuNDI3NTc1IDAgMCAxMTEuMTY5MzYyIDYuOTgyODA5IDE2MS4xMTY1OTYtODYuMTAzMTQ5IDQxLjI4NjgwOS03Ny40MTAwNDMgMzAuMTA5OTU3LTE2OS4xMDE2MTctNDEuMTc3ODcyLTI3MS43MDg1OTYiIGZpbGw9IiMyMzE5MTYiIHAtaWQ9Ijg0NjkiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik02OTEuMDE0ODA5IDIzNy4zMTc0NDdjNi4xMjIyMTMgNDQuMTUxODMtMC40MDMwNjQgODguNzA2NzIzIDAuNzk1MjM0IDEzMy4xMiAzLjY2MDI1NSA2LjI1MjkzNiAxMC41NjY4MDkgMTEuNTY5MDIxIDE3LjYyNTg3MiAxMS4wMzUyMzQgNjMuNjI5NjE3LTIwLjAxMTU3NCAxMjguNjUzNjE3LTQ3LjI3ODI5OCAxOTUuMjEzNjE3LTQxLjY4OTg3MiA2My45MDE5NTcgNC4zOTAxMjggMTI0LjAwMjA0MyAzNi45MDc1NzQgMTQ4Ljc0MTQ0NyA5NS4zNTE4MjkgOC45NzYzNCAzMC4zOTMxOTEgMTAuNDM2MDg1IDYzLjIzNzQ0Ny02LjUxNDM4MyA5Mi40MzIzNDEtMzUuNTc4NTUzIDYyLjk2NTEwNi0xMjQuMTQzNjYgNzYuNDA3ODMtMTg2LjU3NDk3OSA5Mi44ODk4NzItNy4zMDk2MTcgNC4yNTk0MDQtMTIuOTYzNDA0IDEyLjAzNzQ0Ny0xMy4wMjg3NjYgMjAuNzUyMzQgMTMuMzU1NTc0IDI5LjExODYzOCAzOS42OTYzNCA0Ni4wMTQ2MzggNTcuMzExMzE5IDcxLjU0OTI3NyA0MC40OTE1NzQgNjAuOTA2MjEzIDY5LjQxNDEyOCAxMzIuNTIwODUxIDMzLjU3NDEyOCAxOTkuMzUzMTkyLTE3Ljg4NzMxOSAzNC44Mzc3ODctNjAuOTcxNTc0IDQ5LjI3MTgzLTk3LjU0MTQ0NyA1MC4yNjMxNDktMTA3LjkxMjE3LTYuOTcxOTE1LTE2OC4wMjMxNDktOTYuMjEyNDI2LTIxNi4zNTgxMjgtMTgyLjMyNjQ2OS01LjY1Mzc4Ny04Ljg0NTYxNy0xOC44Nzg2MzgtNy41MTY1OTYtMjYuOTk0MzgzLTkuMzY4NTEtMjAuNjEwNzIzIDExLjQzODI5OC0yOC4xMjczMTkgMzMuMjM2NDI2LTM3LjEwMzY1OSA1My42NTEwNjQtMzYuMzczNzg3IDY4LjQyMjgwOS0xMDUuMjU0MTI4IDE0MC4zNzUxNDktMTkxLjg5MTA2NCAxMzMuOTI2MTI3LTM5LjYzMDk3OS02LjkxNzQ0Ny03Ni41Mjc2Ni0yNy41MjgxNy05MS44ODc2Ni02Ny45NjUyNzYtMjYuNjAyMjEzLTY5LjgxNzE5MSAxNC4zNTc3ODctMTU0LjI1MzYxNyA1MS40NjE0NDctMjEzLjc3NjM0MSA0LjI0ODUxMS02LjMxODI5OCAxLjM5NDM4My0xMi4zMDk3ODcgMS40NTk3NDUtMTguMTQ4NzY2LTYuMTg3NTc0LTE4LjY5MzQ0Ny0yOS41ODcwNjQtMTguOTU0ODk0LTQ1LjM1MDEyOC0yMS41NDc1NzQtNzMuNDAxMTkxLTE2LjQ5MjkzNi0xNDkuNzk4MTI4LTQ2Ljg3NTIzNC0xOTYuMjE1ODMtMTAxLjk0MjQ2OC0yMS44MDkwMjEtMzMuMTE2NTk2LTI5LjUyMTcwMi03Mi44NzgyOTgtMTYuNTU4Mjk3LTExMC40Mzk0OSAyMy42ODI3MjMtNTQuMjYxMTA2IDk0LjY4NzMxOS04MS41Mjc4MyAxNTAuMTQ2NzIzLTc3Ljg2NzU3NCA1Ni4wNDc2Ni0xLjE5ODI5OCAxMTguMjgyODk0IDI1LjEzMTU3NCAxNzEuNzQ4NzY2IDQ1LjY3NjkzNiA3Ljg0MzQwNC0wLjI2MTQ0NyAxNi43NTQzODMtNS45OTE0ODkgMjAuODcyMTctMTIuMjk4ODk0IDEuMjYzNjYtMzcuNzAyODA5LTcuNjQ3MzE5LTczLjk0NTg3Mi02LjM4MzY1OS0xMTEuNzE0MDQyIDMuMzg3OTE1LTY2LjIzMzE5MSAyMS4yNzUyMzQtMTQzLjA5ODU1MyA3OC41OTc0NDYtMTgxLjkyMzQwNCAzNy45NjQyNTUtMTkuMDIwMjU1IDgwLjMxODYzOC0yMy4wMDczMTkgMTE3Ljc2LTEuMTk4Mjk4IDU0LjkwMzgzIDI3Ljc4OTYxNyA3OS4xMjAzNCA5NS44MjAyNTUgODcuMDk0NDY5IDE1Mi4yMDU2MTciIGZpbGw9IiNFRTkwQjIiIHAtaWQ9Ijg0NzAiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik01MzEuNTc1ODMgNTE5LjkxOTY2QzUxMC4zNjU5NTcgNDczLjQzNjU5NiA0OTQuODc1MjM0IDI4Ni4xMjA4NTEgNTU0Ljg0NDU5NiAyODQuMzIzNDA0YzU5Ljg0OTUzMi0xLjkyODE3IDU3Ljg0NTEwNiAxOTcuMDMyODUxIDU1Ljg2MjQ2OCAyMjAuMTYgNDIuNjE1ODMtMjMuMTI3MTQ5IDE5OC45MzkyMzQtNjkuNjEwMjEzIDIxOC4xNTU1NzQtMTcuNDA4IDE5LjM0NzA2NCA1Mi4wNjA1OTYtMTIzLjQ3OTE0OSA5NC41NTY1OTYtMTk0Ljg4NjgwOCA3NS4xOTg2MzkgMzQuNzA3MDY0IDE5LjM0NzA2NCAxODMuMzgzMTQ5IDEzNS4xODk3ODcgMTM1LjEwMjYzOCAxNzUuNjgxMzYxLTMyLjA0OTAyMSAyNi45MjkwMjEtMTYyLjE2MjM4My00OC4yNjk2MTctMTg1LjM3NjY4MS0xMzEuMjY4MDg1LTUuNzczNjE3IDYxLjc3NzcwMi0xMDcuMDQwNjgxIDE3Ny4yODI3MjMtMTUwLjUyOCAxNTAuNDg0NDI2LTM0Ljc3MjQyNi0yMS4wMTM3ODcgNDQuNDEzMjc3LTEzNi45NzYzNCA5MC43NTQ3MjQtMTcxLjgyNTAyMi04MS4xMTM4NzIgMTkuNDg4NjgxLTE5Ni43Mzg3MjMtMjkuNzE3Nzg3LTE4OS4yMjIxMjgtNTkuNzA3OTE0IDkuNjI5OTU3LTM4LjU2MzQwNCAxMzguODkzNjE3LTI5LjEyOTUzMiAxOTYuODY5NDQ3LTUuNzE5MTQ5IiBmaWxsPSIjRkVGRUZFIiBwLWlkPSI4NDcxIj48L3BhdGg+CgogICAgICAgICAgICA8L3N2Zz4=');
    transition: all 0.5s ease;
}

.button:hover .flower {
    /* display: block; */
    /* animation: bounceInUp .5s ease; */
    transform: translateY(-45px);
}

.button--bird {
    /* --main_color: #f4cf47;rgb(252,251,135) */
    --main_color: rgb(252, 251, 135);
    --sub_color1: #f4e19c;
    --sub_color2: #ff8108;
    --base_color: #000;
    --border_radius1: 60px 60px 40px 40px / 48px 48px 30px 30px;
    --border_radius2: 70px 70px 40px 40px / 48px 48px 30px 30px;
    --border_radius3: 40px 40px 40px 40px / 48px 48px 30px 30px;
}

.button {
    display: flex;
    justify-content: center;
    align-items: center;

    box-sizing: border-box;
    width: 192px;
    height: 226px;

    text-decoration: none;
    border: solid 3px #000;
    border-radius: 6px;
    background: var(--main_color);
    position: relative;
    box-shadow: 2px 0px 6px 6px rgba(140, 139, 139, 0.1),
        -2px 0px 6px 6px rgba(140, 140, 140, 0.1),
        0px -2px 6px 6px rgba(140, 140, 140, 0.1),
        0px 2px 6px 6px rgba(140, 140, 140, 0.1);
}

.button__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    /* border-radius: 40px; */

    overflow: hidden;
    position: relative;
}

.button__text {
    position: absolute;
    font-size: 24px;
    letter-spacing: 4px;
    color: var(--base_color);
    transition: all 0.3s ease;
}

/* .button::before {
    content: '';
    position: absolute;

    right: 20px;
    margin: auto 0;
    width: 24px;
    height: 24px;
    background: var(--base_color);
    clip-path: path('M24,12.02c0-1.09-.75-1.71-.81-1.77L11.17,.45c-.91-.74-2.21-.56-2.91,.42-.69,.97-.52,2.37,.39,3.11l7.12,5.81-13.7-.02h0C.93,9.77,0,10.76,0,11.99c0,1.23,.93,2.22,2.07,2.22l13.7,.02-7.13,5.78c-.91,.74-1.09,2.13-.4,3.11,.41,.58,1.03,.88,1.65,.88,.44,0,.88-.15,1.25-.45l12.04-9.76c.07-.06,.82-.67,.82-1.77Z');
    transition: all ease .2s;
} */

.button--bird .button__wrapper::before,
.button--bird .button__wrapper::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 130px;
    height: 38px;
    background: var(--sub_color1);
    transition: all 0.5s ease;

    clip-path: path(
        'M13.77,37.35L.25,16.6c-.87-1.33,.69-2.91,2-2.02l12.67,8.59c.81,.55,1.91,.14,2.18-.81l2.62-9.33c.39-1.4,2.34-1.42,2.76-.02l3.6,11.99c.33,1.11,1.74,1.4,2.47,.52L49.38,.52c.87-1.04,2.53-.42,2.53,.95V23.7c0,1.13,1.2,1.83,2.16,1.26l12.75-7.51c.85-.5,1.94,0,2.13,.98l1.5,7.6c.2,1.03,1.37,1.51,2.22,.92l17.74-12.3c1.09-.75,2.52,.25,2.21,1.55l-2.44,10.2c-.26,1.09,.74,2.06,1.8,1.75l30.8-9.04c1.37-.4,2.42,1.26,1.49,2.36l-9.07,10.66c-.83,.98-.1,2.49,1.17,2.42l12.12-.68c1.6-.09,2.12,2.15,.65,2.8l-2.73,1.21c-.18,.08-.38,.12-.58,.12H14.97c-.48,0-.93-.25-1.2-.65Z'
    );
}

.button--bird .button__wrapper::before {
    left: 4px;
}

.button--bird .button__wrapper::after {
    right: 4px;
    transform: rotateY(180deg);
}

.button:hover .button__wrapper::before {
    transform: translateX(-12px);
}

.button:hover .button__wrapper::after {
    transform: rotateY(180deg) translateX(-12px);
}

.button:hover .button__text {
    letter-spacing: 6px;
}

.button:hover::before {
    right: 14px;
}

.birdBox {
    position: absolute;
    top: -54px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 180px;
    height: 56px;
}

.bird {
    position: relative;
    width: 56px;
    height: 36px;
    box-sizing: border-box;
    border: solid 3px #000;
    background: var(--main_color);
    border-radius: var(--border_radius1);
    animation: sleep 1s ease infinite alternate;
    display: flex;
    justify-content: center;
}

.bird__face {
    position: absolute;
    top: 15px;
    width: 12px;
    height: 6px;
    background: var(--sub_color2);
    border-radius: 50% 50% 50% 50% / 78% 78% 22% 22%;
    transition: 0.2s;
}

.bird__face::before,
.bird__face::after {
    content: '';
    position: absolute;
    top: -4px;
    width: 8px;
    height: 2px;
    border-radius: 4px;
    background: #000;
}

.bird__face::before {
    left: -5px;
}

.bird__face::after {
    right: -5px;
}

.bird::before {
    content: '';
    position: absolute;
    top: -12px;
    left: 22px;
    width: 12px;
    height: 12px;
    background: #000;
    clip-path: path(
        'M10.23,3.32c-3.54,.63-5.72,2.51-7.02,4.23-.33-1.58-.34-3.54,.93-5.12,.52-.65,.41-1.59-.24-2.11C3.24-.19,2.29-.08,1.77,.57c-3.82,4.77-.31,11.11-.13,11.42,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0-.01-.02,2.49,.04,2.52,0,.1-.14,1.54-4.82,6.59-5.71,.82-.14,1.37-.92,1.22-1.74s-.94-1.36-1.75-1.21Z'
    );
}

.button:hover .wakeup {
    animation: wakeup 0.2s ease;
    animation-fill-mode: forwards;
}

.button:hover .wakeup .bird__face {
    top: 20px;
}

.button:hover .wakeup .bird__face::before,
.button:hover .wakeup .bird__face::after {
    animation: eye 5s linear infinite;
}

.button:hover .wakeup:nth-child(2) .bird__face::before,
.button:hover .wakeup:nth-child(2) .bird__face::after {
    animation: eye_2 5s linear infinite;
}

@keyframes wakeup {
    0% {
        height: 32px;
        border-radius: var(--border_radius2);
    }

    100% {
        height: 56px;
        border-radius: var(--border_radius3);
    }
}

@keyframes eye {
    0% {
        top: -6px;
        width: 6px;
        height: 6px;
    }

    30% {
        top: -6px;
        width: 6px;
        height: 6px;
    }

    32% {
        top: -4px;
        width: 8px;
        height: 2px;
    }

    34% {
        top: -6px;
        width: 6px;
        height: 6px;
    }

    70% {
        top: -6px;
        width: 6px;
        height: 6px;
    }

    72% {
        top: -4px;
        width: 8px;
        height: 2px;
    }

    74% {
        top: -6px;
        width: 6px;
        height: 6px;
    }

    76% {
        top: -4px;
        width: 8px;
        height: 2px;
    }

    78% {
        top: -6px;
        width: 6px;
        height: 6px;
    }

    100% {
        top: -6px;
        width: 6px;
        height: 6px;
    }
}

@keyframes eye_2 {
    0% {
        top: -6px;
        width: 6px;
        height: 6px;
    }

    10% {
        transform: translateX(0);
    }

    12% {
        transform: translateX(3px);
    }

    20% {
        top: -6px;
        width: 6px;
        height: 6px;
    }

    22% {
        top: -4px;
        width: 8px;
        height: 2px;
    }

    24% {
        top: -6px;
        width: 6px;
        height: 6px;
    }

    25% {
        transform: translateX(3px);
    }

    27% {
        transform: translateX(0);
    }

    74% {
        top: -6px;
        width: 6px;
        height: 6px;
        transform: translateX(0);
    }

    76% {
        top: -4px;
        width: 8px;
        height: 2px;
        transform: translateX(3px);
    }

    78% {
        top: -6px;
        width: 6px;
        height: 6px;
    }

    80% {
        top: -4px;
        width: 8px;
        height: 2px;
    }

    82% {
        top: -6px;
        width: 6px;
        height: 6px;
    }

    85% {
        transform: translateX(3px);
    }

    87% {
        transform: translateX(0);
    }

    100% {
        top: -6px;
        width: 6px;
        height: 6px;
        transform: translateX(0);
    }
}

@keyframes sleep {
    0% {
        height: 36px;
        border-radius: var(--border_radius1);
    }

    100% {
        height: 32px;
        border-radius: var(--border_radius2);
    }
}
</style>
