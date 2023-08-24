import { Test, TestingModule } from '@nestjs/testing';
import { PostsResolver } from './posts.resolver';
import { PostsService } from './posts.service';
import { PrismaService } from 'nestjs-prisma';

describe('PostsResolver', () => {
  let resolver: PostsResolver;
  let service: PostsService;
  let prisma: PrismaService;

  beforeEach(async () => {
    service = new PostsService(prisma);
    resolver = new PostsResolver(service);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
