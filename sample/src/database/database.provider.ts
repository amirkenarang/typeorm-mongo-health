import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        name: 'my-connection',
        type: 'mongodb',
        url: 'mongodb://...',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
        useNewUrlParser: true,
        logging: true,
      });

      return dataSource.initialize();
    },
  },
];
