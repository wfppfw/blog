// js字符串首字母大写其余小写
// css 文本处理首字母大写text-transform: capitalize;
export const firstUpperCase = (str: string) => {
    return str.toLowerCase().replace(/^\S/, (s) => s.toUpperCase());
};
