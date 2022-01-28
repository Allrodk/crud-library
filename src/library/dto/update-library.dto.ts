import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class UpdateLibraryDto {
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
