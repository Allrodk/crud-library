import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateLibraryDto } from './dto/create-library.dto';
import { UpdateLibraryDto } from './dto/update-library.dto';
import { Library } from './schema/library.schema';

@Injectable()
export class LibraryService {
  constructor(
    @InjectModel('Library') private readonly libraryModel: Model<Library>,
  ) {}

  async create(obra: CreateLibraryDto): Promise<Library> {
    const novaObra = await new this.libraryModel(obra).save();
    return novaObra;
  }

  async findAll(): Promise<Library[]> {
    const obras = await this.libraryModel.find().exec();
    return obras;
  }

  async findOne(id: string): Promise<Library> {
    await this.verificaId(id);
    const obra = await this.libraryModel.findById(id).exec();
    return obra;
  }

  async update(
    id: string,
    obra: UpdateLibraryDto,
  ): Promise<{ message: String }> {
    await this.verificaId(id);
    const atualizaObra = await this.libraryModel.updateOne({ _id: id }, obra);
    return { message: 'Obra atualizada com sucesso' };
  }

  async remove(id: string): Promise<{ message: String }> {
    await this.verificaId(id);
    await this.libraryModel.deleteOne({ _id: id }).exec();
    return { message: 'Obra deletada com sucesso' };
  }

  async verificaId(id: String): Promise<Library> {
    const obraExiste = await this.libraryModel.findById(id).exec();
    if (!obraExiste) {
      throw new NotFoundException('Obra não encontrada');
    }
    return obraExiste;
  }
}
