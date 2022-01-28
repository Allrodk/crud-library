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
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Obras')
@Controller('obras')
export class LibraryController {
  constructor(private readonly libraryService: LibraryService) {}

  @Post()
  @ApiOperation({
    summary: 'Cadastra uma obra',
  })
  create(@Body() obra: CreateLibraryDto): Promise<Library> {
    return this.libraryService.create(obra);
  }

  @Get()
  @ApiOperation({
    summary: 'Retorna todas as obras',
  })
  findAll(): Promise<Library[]> {
    return this.libraryService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Retorna uma obra',
  })
  findOne(@Param('id') id: string): Promise<Library> {
    return this.libraryService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({
    summary: 'Altera uma obra',
  })
  update(
    @Param('id') id: string,
    @Body() obra: UpdateLibraryDto,
  ): Promise<{ message: String }> {
    return this.libraryService.update(id, obra);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deleta uma obra',
  })
  remove(@Param('id') id: string): Promise<{ message: String }> {
    return this.libraryService.remove(id);
  }
}
