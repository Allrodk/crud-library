import * as mongoose from 'mongoose';

export const LibrarySchema = new mongoose.Schema({  
  titulo: { type: String, required: true },
  editora: { type: String, required: true },
  foto: { type: String, required: true },
  autores: { type: [String], required: true },
});

const Library = mongoose.model('Library', LibrarySchema);
export interface Library {
  titulo: String;
  editora: String;
  foto: String;
  autores: [String];
}
