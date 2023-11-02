import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { DummiesService } from './dummies.service';
import { CreateDummyDto } from './dto/create-dummy.dto';
import { Public } from 'src/auth/public';

@Public()
@Controller('dummies')
export class DummiesController {
    constructor(private dummiesService: DummiesService) {

    }
    @Post()
    create(@Body() req: CreateDummyDto) {
        
        return this.dummiesService.create(req);
    }

    @Get()
    findAll() {
        return this.dummiesService.findAll();
    }

    @Get("/live")
    checkLive(){
        return "server is live now";
    }
}
