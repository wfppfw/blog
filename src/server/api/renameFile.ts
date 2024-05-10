import fs from 'fs';
import path from 'path';
const __dirname = path.resolve();
import { readBody } from 'h3';
export default defineEventHandler(async (event) => {
    const { oldName, newName } = await readBody(event);
    let resMsg = '';
    const addFu = () => {
        return new Promise((resolve, reject) => {
            fs.rename(
                path.join(__dirname, 'src/content/' + oldName),
                path.join(__dirname, 'src/content/' + newName),
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
