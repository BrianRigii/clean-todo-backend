import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dummy } from './entities/dummy.entity';
import { DummiesController } from './dummies.controller';
import { DummiesService } from './dummies.service';

@Module({
    imports : [
        TypeOrmModule.forFeature([Dummy])
    ],
    controllers: [DummiesController],
    providers: [DummiesService]
})
export class DummiesModule {}
