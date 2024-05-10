import { firstUpperCase } from '@/utils/stringFn';
export const useSetDymHead = () => {
    const route = useRoute();
    const title = ref('');
    const { path, fullPath, hash, name, params, query } = route;
    console.log(path, fullPath, hash, name, params, query);
    if (path === '/') {
        title.value = 'Home';
    } else {
        console.log(path, firstUpperCase(path.split('/')[1]));
        title.value = firstUpperCase(path.split('/')[1]);
    }
    title.value = title.value + ' | ';
    useHead({
        title: title.value,
        meta: [
            {
                name: 'keywords',
                content: 'blog,前端',
            },
            {
                name: 'description',
                content: 'show code life',
            },
        ],
    });
};
