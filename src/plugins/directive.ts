import { RclickStore } from '@/stores/useRclickStore';
export default defineNuxtPlugin((nuxtApp) => {
    //注册右键自定义菜单指令
    nuxtApp.vueApp.directive('rclick', {
        mounted(el, binding) {
            const rclickInfo = RclickStore();
            //获取右键位置到pinia
            el.oncontextmenu = (e: MouseEvent) => {
                e.preventDefault();
                console.log(e.x, e.y, e.clientY);
                rclickInfo.DisplayStatus = true;
                //判断是否与网页可视区域碰撞document.documentElement.clientHeight,document.documentElement.clientWidth
                rclickInfo.top =
                    (e.clientY + rclickInfo.height >
                    document.documentElement.clientHeight
                        ? e.clientY - rclickInfo.height
                        : e.clientY) -
                    2 +
                    'px';

                rclickInfo.left =
                    (e.clientX + rclickInfo.width >
                    document.documentElement.clientWidth
                        ? e.clientX - rclickInfo.width
                        : e.clientX) -
                    2 +
                    'px';
            };
            el.onclick = () => {
                rclickInfo.DisplayStatus = false;
            };
        },
    });
    nuxtApp.vueApp.directive('visibility', {
        mounted(el, binding) {
            console.log('s');
        },
    });
});
