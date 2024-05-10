import { defineStore } from 'pinia';

export const RclickStore = defineStore('rclickInfo', {
    state: () => {
        return {
            DisplayStatus: false,
            left: '0px',
            top: '0px',
            width: 188,
            height: 220,
        };
    },
    getters: {},
    actions: {},
});
