import { Body, Controller, Get, Query, ParseIntPipe } from '@nestjs/common';

@Controller('test')
export class TestController {
    @Get(":id")
    async test(@Query('id', ParseIntPipe) a) {
        return a
    }
}
