import { PrismaService } from './database/prisma.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RocketMembersRepository } from './repositories/rocket-members-repository';
import { PrismaRocketMembersRepository } from './repositories/prisma/prisma-rocket-members-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: RocketMembersRepository,
      useClass: PrismaRocketMembersRepository,
    },
  ],
})
export class AppModule {}
