import { Test, TestingModule } from '@nestjs/testing';
import { DummiesController } from './dummies.controller';

describe('DummiesController', () => {
  let controller: DummiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DummiesController],
    }).compile();

    controller = module.get<DummiesController>(DummiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
