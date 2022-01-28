import { Module } from '@nestjs/common';
import { LibraryModule } from './library/library.module';
import { MongooseModule } from '@nestjs/mongoose';
require('dotenv').config({ path: './.env' });

@Module({
  imports: [MongooseModule.forRoot(process.env.DB_URL), LibraryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
