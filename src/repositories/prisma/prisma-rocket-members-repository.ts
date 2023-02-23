import { TeamMember } from './../../dtos/team-member';
import { Injectable } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { PrismaService } from 'src/database/prisma.service';
import { RocketMembersRepository } from '../rocket-members-repository';

@Injectable()
export class PrismaRocketMembersRepository implements RocketMembersRepository {
  constructor(private prisma: PrismaService) {}

  async create(name: string, memberFunction: string): Promise<void> {
    await this.prisma.rocketTeamMember.create({
      data: {
        id: randomUUID(),
        name,
        function: memberFunction,
      },
    });
  }

  async findAll(): Promise<[TeamMember]> {
    const members = await this.prisma.rocketTeamMember.findMany();
    const result = members.map((member) => ({
      name: member.name,
      function: member.function,
    })) as [TeamMember];
    return result;
  }
}
