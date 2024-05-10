import loadJs from '@/utils/loadJs';
import {
    LIVE2D_CDN_JS,
    LIVE2D_CDN_MODELJSON,
    LIVE2D_LOCAL_JS,
    LIVE2D_LOCAL_MODELJSON,
} from '@/composables/api/url';
export const useLive2d = async (fnEvent: any, name: string, id: string) => {
    await loadJs(LIVE2D_LOCAL_JS).then(async () => {
        await window.loadlive2d(
            id,
            LIVE2D_LOCAL_MODELJSON + name + '/' + name + '.model.json',
        );
        fnEvent();
    });
};
