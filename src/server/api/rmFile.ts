import fs from 'fs';
import path from 'path';
const __dirname = path.resolve();
import { readBody } from 'h3';
export default defineEventHandler(async (event) => {
    const { fileName } = await readBody(event);
    let resMsg = '';
    const rmFu = () => {
        return new Promise((resolve, reject) => {
            fs.rm(
                path.join(__dirname, 'src/content/' + fileName),
                {},
                (err) => {
                    if (err) {
                        reject(err);
                    }
                    resolve('success');
                },
            );
        });
    };
    //读取md
    resMsg = (await rmFu()) as string;
    return {
        resMsg,
    };
});
