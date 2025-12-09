import { Controller,Get, Res } from '@nestjs/common';
import { StreamService } from './stream.service';
import type { Response } from 'express';
import * as fs from 'fs';

@Controller('stream')
export class StreamController {
    constructor(private Stream: StreamService){}
    @Get('streamVideo')
    streamVideo(@Res()res:Response){
        res.set({
            'Content-Type':'video/mp4',
        });

        this.Stream.readStream().pipe(res);
    }
}
