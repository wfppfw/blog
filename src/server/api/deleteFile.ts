import fs from 'fs';
import path from 'path';
const __dirname = path.resolve();
import { readBody } from 'h3';
export default defineEventHandler(async (event) => {
    const { fileID } = await readBody(event);
    let resMsg = '';
    const deleteFu = () => {
        return new Promise((resolve, reject) => {
            fs.unlink(
                path.join(__dirname, 'src/content/' + fileID + '.md'),
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
    resMsg = (await deleteFu()) as string;
    return {
        resMsg,
    };
});
