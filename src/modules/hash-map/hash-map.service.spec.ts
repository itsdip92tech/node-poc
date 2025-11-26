import { Test, TestingModule } from '@nestjs/testing';
import { HashMapService } from './hash-map.service';

describe('HashMapService', () => {
  let service: HashMapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HashMapService],
    }).compile();

    service = module.get<HashMapService>(HashMapService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
