import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { LibraryService } from './library.service';
import { CreateLibraryDto } from './dto/create-library.dto';
import { UpdateLibraryDto } from './dto/update-library.dto';
import { Library } from './schema/library.schema';

@Controller('obras')
export class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  @Post()
  create(@Body() obra: CreateLibraryDto): Promise<Library> {
    return this.libraryService.create(obra);
  }

  @Get()
  findAll(): Promise<Library[]> {
    return this.libraryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Library> {
    return this.libraryService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() obra: UpdateLibraryDto,
  ): Promise<{ message: String }> {
    return this.libraryService.update(id, obra);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<{ message: String }> {
    return this.libraryService.remove(id);
  }
}
