import { Controller, Post } from '@nestjs/common';
import { DummiesService } from './dummies.service';

@Controller('dummies')
export class DummiesController {
    constructor(private dummiesService : DummiesService){

    }
    @Post()
    create(){

        

    }
}
