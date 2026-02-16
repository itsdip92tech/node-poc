import { Test, TestingModule } from '@nestjs/testing';
import { LinkedListController } from './linked-list.controller';
import { LinkedListService } from './linked-list.service';

describe('LinkedListController', () => {
  let controller: LinkedListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LinkedListController],
      providers: [LinkedListService],
    }).compile();

    controller = module.get<LinkedListController>(LinkedListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
