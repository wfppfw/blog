import fs from 'fs';
import path from 'path';
const __dirname = path.resolve();
import { readBody } from 'h3';
export default defineEventHandler(async (event) => {
    const { fileName } = await readBody(event);
    let mdStr = '';
    const readFu = () => {
        return new Promise((resolve, reject) => {
            fs.readFile(
                path.join(__dirname, 'src/content/' + fileName),
                'utf8',
                function (err, dataStr) {
                    if (err) {
                        reject(err);
                    }
                    resolve(dataStr);
                },
            );
        });
    };
    //读取md
    mdStr = (await readFu()) as string;
    return {
        mdStr,
    };
});
