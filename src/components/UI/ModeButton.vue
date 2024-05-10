<template>
    <label>
        <input class="toggle-checkbox" type="checkbox" @change="changeMode" />
        <div class="toggle-slot">
            <div class="sun-icon-wrapper">
                <div class="iconify sun-icon c_sun">
                    <div class="c-sun__circle"></div>
                    <div v-for="i in 6" :key="i" class="c-sun__arrow"></div>
                </div>
            </div>
            <div class="toggle-button"></div>
            <div class="moon-icon-wrapper">
                <div class="iconify moon-icon c_moon">
                    <div class="min_moon"></div>
                </div>
            </div>
        </div>
    </label>
</template>
<script setup lang="ts" name="ModeButton">
import { useChangeMode } from '@/plugins/mode/changeMode';
// const modeValue = ref()
const changeMode = (e: { target: { checked: any } }) => {
    if (e.target.checked) {
        useChangeMode('dark');
    } else {
        useChangeMode('');
    }
};
</script>
<style scoped lang="less">
.toggle-checkbox {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
}

.toggle-slot {
    position: relative;
    height: 2em;
    width: 4em;
    border: 1px solid #e4e7ec;
    border-radius: 2em;
    background-color: white;
    box-shadow: 0px 2px 5px #e4e7ec;
    transition: background-color 250ms;
}

.toggle-checkbox:checked ~ .toggle-slot {
    background-color: #374151;
}

.toggle-button {
    transform: translate(2.35em, 0.35em);
    position: absolute;
    height: 1.3em;
    width: 1.3em;
    border-radius: 50%;
    background-color: #ffeccf;
    box-shadow: inset 0px 0px 0px 0.15em #ffbb52;
    transition: background-color 250ms, border-color 250ms,
        transform 500ms cubic-bezier(0.26, 2, 0.46, 0.71);
}

.toggle-checkbox:checked ~ .toggle-slot .toggle-button {
    background-color: #485367;
    box-shadow: inset 0px 0px 0px 0.15em white;
    transform: translate(0.35em, 0.35em);
}

.sun-icon {
    position: absolute;
    height: 1.2em;
    width: 1.2em;
    color: #ffbb52;
}

.sun-icon-wrapper {
    position: absolute;
    height: 1.2em;
    width: 1.2em;
    opacity: 1;
    transform: translate(0.4em, 0.4em) rotate(15deg);
    transform-origin: 50% 50%;
    transition: opacity 150ms, transform 500ms cubic-bezier(0.26, 2, 0.46, 0.71);
}

.toggle-checkbox:checked ~ .toggle-slot .sun-icon-wrapper {
    opacity: 0;
    transform: translate(0.6em, 0.4em) rotate(0deg);
}

.moon-icon {
    position: absolute;
    height: 1.2em;
    width: 1.2em;
    color: white;
}

.moon-icon-wrapper {
    position: absolute;
    height: 1.2em;
    width: 1.2em;
    opacity: 0;
    transform: translate(2.2em, 0.4em) rotate(0deg);
    transform-origin: 50% 50%;
    transition: opacity 150ms,
        transform 500ms cubic-bezier(0.26, 2.5, 0.46, 0.71);
}

.toggle-checkbox:checked ~ .toggle-slot .moon-icon-wrapper {
    opacity: 1;
    transform: translate(2.4em, 0.4em) rotate(-15deg);
}
.Bn {
    background-color: grey;
}
.c_sun {
    display: inline-block;
    position: relative;
    & .c-sun__circle {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: yellow;
        position: absolute;

        left: 4px;
        top: 4px;
    }
    & .c-sun__arrow {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        &:nth-child(1) {
            transform: translate(-50%, -50%) rotateZ(1 * 60deg);
        }
        &:nth-child(2) {
            transform: translate(-50%, -50%) rotateZ(2 * 60deg);
        }
        &:nth-child(3) {
            transform: translate(-50%, -50%) rotateZ(3 * 60deg);
        }
        &:nth-child(4) {
            transform: translate(-50%, -50%) rotateZ(4 * 60deg);
        }
        &:nth-child(5) {
            transform: translate(-50%, -50%) rotateZ(5 * 60deg);
        }
        &:nth-child(6) {
            transform: translate(-50%, -50%) rotateZ(6 * 60deg);
        }
        &:nth-child(7) {
            transform: translate(-50%, -50%) rotateZ(7 * 60deg);
        }
        &:after {
            position: absolute;
            right: -4px;
            content: '';
            display: block;
            top: -4px;
            border: 3px solid transparent;
            border-left-color: #ffdc18;
        }
    }
}
.c_moon {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid white;
    background-color: transparent;
    position: relative;
    border-top-color: transparent;
    transform: rotate(54deg);
}
.min_moon {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    border: 2px solid white;
    background-color: transparent;
    position: absolute;
    left: 1px;
    top: -6px;
    border-bottom-color: transparent;
    transform: rotate(-138deg);
    border-right-color: transparent;
}
</style>
