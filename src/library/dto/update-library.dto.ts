import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class UpdateLibraryDto {
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
