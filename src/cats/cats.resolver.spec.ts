import { Test, TestingModule } from '@nestjs/testing';
import { CatsResolver } from './cats.resolver';
import { CatsService } from './cats.service';
import { PrismaService } from 'nestjs-prisma';

describe('CatsResolver', () => {
  let service: CatsService;
  let prisma: PrismaService;
  let resolver: CatsResolver;

  beforeEach(async () => {
    service = new CatsService(prisma);
    resolver = new CatsResolver(service);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
