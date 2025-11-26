import { Test, TestingModule } from '@nestjs/testing';
import { TwoPointersController } from './two-pointers.controller';

describe('TwoPointersController', () => {
  let controller: TwoPointersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TwoPointersController],
    }).compile();

    controller = module.get<TwoPointersController>(TwoPointersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
