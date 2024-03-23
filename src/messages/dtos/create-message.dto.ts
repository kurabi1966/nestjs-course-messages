import { IsString } from 'class-validator';

export class CreateMessageDto {
  @IsString({ message: 'Content should be a string.' })
  content: string;
}
