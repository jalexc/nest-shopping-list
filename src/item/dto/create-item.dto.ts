import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class CreateItemDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsInt()
  @Min(0)
  quantity: number;
}
