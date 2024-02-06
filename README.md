<h1 align="center"></h1>

<div align="center">
  <a href="http://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo_text.svg" width="150" alt="Nest Logo" />
  </a>
</div>

<h3 align="center">TypeOrm Mongo Health</h3>

<div align="center">
  <a href="https://nestjs.com" target="_blank">
    <img src="https://img.shields.io/badge/built%20with-NestJs-red.svg" alt="Built with NestJS">
  </a>
</div>

A health checker for mongodb in typeorm

## Table of contents

- [Installation](#Instalation)
- [Usage](#Usage)
- [Change Log](#ChangeLog)
- [Contributing](#Contributing)

### Installation

```bash
npm install --save typeorm-mongo-health@1.0.5
```

## Usage

The simplest way to check `mongo health` in typeorm is using `typeorm-mongo-health`:

```ts
import { Injectable } from '@nestjs/common';
import { getConnection } from 'typeorm';
import { MongoHealh } from 'typeorm-mongo-health';

@Injectable()
export class HealthService {
  constructor(
    @Inject('DATA_SOURCE') private dataSource: DataSource,
    private mongoHelath: MongoHealh,
  ) {}

  async healthCheck(): Promise<any> {
    // Get the MongoManager from the DataSource
    const mongoManager = this.dataSource.manager;
    const connection = mongoManager.connection;

    const mongoHealth = await this.mongoHelath.mongoHealth(
      connection, // typeorm connection
      'mongodb-name', // mongo name
      10000, // timeout millisecond
    );
    return mongoHealth;
  }
}
```

## Change Log

See [Changelog](CHANGELOG.md) for more information.

## Contributing

Contributions welcome! See [Contributing](CONTRIBUTING.md).

## Author

**Amir Kenarang (Amir Kenarang)**

## License

Licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
