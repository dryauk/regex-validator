import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './App.controller';

describe('AppController', () => {
  let controller: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    controller = app.get(AppController);
  });

  describe('ping', () => {
    it('should return "pong"', () => {
      expect(controller.ping()).toBe('pong');
    });
  });
});
