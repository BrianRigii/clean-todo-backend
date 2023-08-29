import { Test, TestingModule } from '@nestjs/testing';
import { DummiesService } from './dummies.service';

describe('DummiesService', () => {
  let service: DummiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DummiesService],
    }).compile();

    service = module.get<DummiesService>(DummiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
