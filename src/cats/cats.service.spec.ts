import { Test, TestingModule } from '@nestjs/testing';
import { CatsService } from './cats.service';
import { PrismaService } from 'nestjs-prisma';

describe('CatsService', () => {
  let service: CatsService;
  let prisma: PrismaService;

  beforeEach(async () => {
    service = new CatsService(prisma);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
