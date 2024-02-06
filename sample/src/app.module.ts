import { Module } from '@nestjs/common';
import { PhotoModule } from './photo/photo.module';
@Module({
  imports: [PhotoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
