import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsArray } from 'class-validator';

export class CreateLibraryDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  titulo: String;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  editora: String;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  foto: String;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty()
  autores: [String];
}
