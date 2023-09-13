import { Body, Controller, Post, Req } from '@nestjs/common';
import { DummiesService } from './dummies.service';
import { CreateDummyDto } from './dto/create-dummy.dto';

@Controller('dummies')
export class DummiesController {
    constructor(private dummiesService: DummiesService) {

    }
    @Post()
    create(@Body() req: CreateDummyDto) {
        console.log(req);
        return this.dummiesService.create(req);
    }
}
