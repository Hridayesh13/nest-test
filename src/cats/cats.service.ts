import { Injectable } from '@nestjs/common';
import { CreateCatInput } from './dto/create-cat.input';
import { UpdateCatInput } from './dto/update-cat.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class CatsService {
  constructor(private readonly prisma: PrismaService) {}

  create(createCatInput: CreateCatInput) {
    return this.prisma.cat.create({ data: createCatInput });
  }

  findAll() {
    return this.prisma.cat.findMany;
  }

  findOne(id: number) {
    return this.prisma.cat.findUniqueOrThrow({ where: { id } });
  }

  update(id: number, updateCatInput: UpdateCatInput) {
    return this.prisma.cat.update({ where: { id }, data: updateCatInput });
  }

  remove(id: number) {
    return this.prisma.cat.delete({ where: { id } });
  }
}
