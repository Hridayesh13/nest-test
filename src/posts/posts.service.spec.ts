import { Test, TestingModule } from '@nestjs/testing';
import { PostsService } from './posts.service';
import { PrismaService } from 'nestjs-prisma';

describe('PostsService', () => {
  let service: PostsService;
  let prisma: PrismaService;

  beforeEach(async () => {
    service = new PostsService(prisma);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
