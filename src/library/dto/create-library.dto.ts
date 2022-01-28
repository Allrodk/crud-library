import { IsString, IsNotEmpty, IsArray } from 'class-validator';

export class CreateLibraryDto {
  @IsString()
  @IsNotEmpty()
  titulo: String;

  @IsString()
  @IsNotEmpty()
  editora: String;

  @IsString()
  @IsNotEmpty()
  foto: String;

  @IsArray()
  @IsNotEmpty()
  autores: [String];
}
