import { createApp } from 'vue';
import TopMsg from './msg.vue';

export default function Msg(text, image, ok, cancel) {
    const mountDom = document.createElement('div');
    mountDom.style.position = 'absolute';
    mountDom.style.left = '50%';
    mountDom.style.top = '80px';
    mountDom.style.zIndex = '100001';
    document.body.appendChild(mountDom);
    // 挂载组件以显示，mount函数返回vue组件实例
    const dialog = createApp(TopMsg).mount(mountDom);
    // 设定vue实例中的变量，将一些数据传入vue
    dialog.text = text;
    dialog.image = image;
    dialog.ok = ok;
    dialog.cancel = cancel;
    // 传入挂载的dom是为了vue组件关闭时可以直接销毁这个挂载的dom达到销毁模态框的目的
}
