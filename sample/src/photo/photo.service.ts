import { Injectable, Inject } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { MongoHealh } from 'typeorm-mongo-health';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoService {
  constructor(
    private mongoHelath: MongoHealh,
    @Inject('PHOTO_REPOSITORY')
    private photoRepository: Repository<Photo>,
    @Inject('DATA_SOURCE') private dataSource: DataSource,
  ) {}

  async healthCheck(): Promise<any> {
    // Get the MongoManager from the DataSource
    const mongoManager = this.dataSource.manager;
    const connection = mongoManager.connection;

    // Here you can check ping
    const mongoHealth = await this.mongoHelath.mongoHealth(
      connection, // typeorm connection
      'mongodb-name', // mongo name
      10000, // timeout millisecond
    );
    return mongoHealth;
  }

  async findAll(): Promise<Photo[]> {
    return this.photoRepository.find();
  }
}
