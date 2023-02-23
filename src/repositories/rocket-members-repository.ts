import { TeamMember } from './../dtos/team-member';
export abstract class RocketMembersRepository {
  abstract create(name: string, memberFunction: string): Promise<void>;
  abstract findAll(): Promise<[TeamMember]>;
}
