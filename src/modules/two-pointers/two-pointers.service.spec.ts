import { Test, TestingModule } from '@nestjs/testing';
import { TwoPointersService } from './two-pointers.service';

describe('TwoPointersService', () => {
  let service: TwoPointersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TwoPointersService],
    }).compile();

    service = module.get<TwoPointersService>(TwoPointersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
