import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Dummy } from './entities/dummy.entity';
import { Repository } from 'typeorm';
import { CreateDummyDto } from './dto/create-dummy.dto';

@Injectable()
export class DummiesService {
    constructor(@InjectRepository(Dummy) private dummyRepository : Repository<Dummy>){}


    create(createDummyDto: CreateDummyDto):Promise<Dummy> {
        const dummy = this.dummyRepository.create(createDummyDto);
        return this.dummyRepository.save(dummy);
    }

}
