import fs from 'fs';
import path from 'path';
const __dirname = path.resolve();
import { readBody } from 'h3';
export default defineEventHandler(async (event) => {
    //生成修改写入md
    await fs.writeFile(
        path.join(__dirname, 'src/content/markdown/1.md'),
        'data',
        function (err) {
            if (err) {
                return console.log('文件写入失败！' + err.message);
            }
            console.log('文件写入成功1！');
        },
    );
    //读取md
    await fs.readFile(
        path.join(__dirname, 'src/content/index.md'),
        'utf8',
        function (err, dataStr) {
            //2.1打印失败的结果
            //如果读取成功，则err的值为null
            //如果读取失败，则err的值为错误对象，dataStr的值为undefined
            console.log(err);
            console.log('-------');
            //2.2打印成功的结果
            console.log(dataStr);
        },
    );

    // 删除目录：fs.rmdir(path,callback:(err)=>void)
    // https://www.lsjlt.com/news/81455.html
    // 同时支持删除目录和文件：fs.rm(path,callback:(err)=>void)
    //7.fs.rename 重命名  1.改名  2.剪切文件(移动)
    //6.fs.readdir 读取目录下第一级内容  把目录下面的文件和文件夹都获取到。
    // 文件
    //生成目录

    const body = await readBody(event);
    console.log(body);
    //删除目录
    console.log('ss', event.node.req.headers, event.node.res, 'ss');
    return {
        api: 'works',
        ...body,
    };
});
