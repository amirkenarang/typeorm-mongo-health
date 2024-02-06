import { Controller, Get } from '@nestjs/common';
import { PhotoService } from './photo.service';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get()
  async healthCheck(): Promise<any> {
    return await this.photoService.healthCheck();
  }
}
