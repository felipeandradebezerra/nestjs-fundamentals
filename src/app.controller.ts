import { Body, Controller, Post, Get } from '@nestjs/common';
import { TeamMember } from './dtos/team-member';
import { RocketMembersRepository } from './repositories/rocket-members-repository';

@Controller('app')
export class AppController {
  constructor(private rocketMembersRepository: RocketMembersRepository) {}

  @Post('member')
  async postMember(@Body() body: TeamMember) {
    const { name, function: memberFunction } = body;
    await this.rocketMembersRepository.create(name, memberFunction);
  }

  @Get('member')
  async getMembers() {
    return await this.rocketMembersRepository.findAll();
  }
}
