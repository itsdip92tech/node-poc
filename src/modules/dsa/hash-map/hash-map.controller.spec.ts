import { Test, TestingModule } from '@nestjs/testing';
import { HashMapController } from './hash-map.controller';

describe('HashMapController', () => {
  let controller: HashMapController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HashMapController],
    }).compile();

    controller = module.get<HashMapController>(HashMapController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
