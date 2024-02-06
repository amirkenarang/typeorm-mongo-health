import { Module } from '@nestjs/common';
import { photoProviders } from './photo.providers';
import { PhotoService } from './photo.service';
import { DatabaseModule } from '../database/database.module';
import { PhotoController } from './photo.controller';

@Module({
  imports: [DatabaseModule],
  providers: [...photoProviders, PhotoService],
  controllers: [PhotoController],
})
export class PhotoModule {}
