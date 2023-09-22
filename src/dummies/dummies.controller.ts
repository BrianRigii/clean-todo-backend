import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { DummiesService } from './dummies.service';
import { CreateDummyDto } from './dto/create-dummy.dto';

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
}
