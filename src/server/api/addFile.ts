import fs from 'fs';
import path from 'path';
const __dirname = path.resolve();
import { readBody } from 'h3';
export default defineEventHandler(async (event) => {
    const { content, fileName } = await readBody(event);
    let resMsg = '';
    const addFu = () => {
        return new Promise((resolve, reject) => {
            fs.writeFile(
                path.join(__dirname, 'src/content/' + fileName),
                content,
                (err) => {
                    if (err) {
                        reject(err);
                    }
                    resolve('success');
                },
            );
        });
    };

    resMsg = (await addFu()) as string;
    return {
        resMsg,
    };
});
