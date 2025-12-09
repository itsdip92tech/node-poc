import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class StreamService {
    readStream =():fs.ReadStream=>{
        const fileName = ""
        const read = fs.createReadStream(fileName);
        return read;
    }
}
