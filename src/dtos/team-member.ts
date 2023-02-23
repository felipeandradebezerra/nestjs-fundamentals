import { IsNotEmpty, Length } from 'class-validator';

export class TeamMember {
  @IsNotEmpty({
    message: 'Member name should not be empty.',
  })
  @Length(5, 100)
  name: string;

  @IsNotEmpty({
    message: 'Member function should not be empty.',
  })
  function: string;
}
