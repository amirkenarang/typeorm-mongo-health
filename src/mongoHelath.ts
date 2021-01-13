import { Injectable } from '@nestjs/common';
import { StatusType } from './statusType';
import { ServiceHealthDto } from './dto/serviceHealth.dto';

/**
 * @description Helath Check Service - This Service developed to check typeorm mongo connection is Up or DOWN.
 * @author Amir Kenarang <amir.kenarang@gmail.com>
 * @version 1.0.0
 * @param connection {any} - typeOrm connection
 * @param name - {string} - service name
 * @param time - {number} - millisecond for timestamp
 * @returns {Object} - Health status object
 */
@Injectable()
export class MongoHealh {
  constructor() {}

  async mongoHealth(
    connection: any,
    name: string,
    time: number,
  ): Promise<ServiceHealthDto> {
    // Check Dante mongo connecton
    const mongoHealth = await this.checkMongoDBConnection(
      connection,
      name,
      time,
    );
    const response = mongoHealth;
    return response;
  }

  /**
   * @description This private function return status after pingMongo called
   * @param connection {any} - Type orm Connection
   * @param name {string} - Name of Mongo Service
   * @param timeout {number} time of check database connection timeout
   * @returns {object} Status of mongo connection base on HelatDto
   */
  private async checkMongoDBConnection(
    connection: any,
    name: string,
    timeout: number,
  ): Promise<ServiceHealthDto> {
    return {
      name,
      status: (await this.pingMongo(connection, timeout))
        ? StatusType.UP
        : StatusType.DOWN,
    };
  }

  /**
   * @description This private function check database ping
   * @param connection {any} - Type orm Connection
   * @param timeout {number} time of check database connection timeout
   * @returns {boolean} It return boolean status of database. It check timeout
   */
  private async pingMongo(connection: any, timeout: number): Promise<boolean> {
    return new Promise(async resolve => {
      const ClientDb = (connection.driver as any).queryRunner
        .databaseConnection;

      setTimeout(() => {
        resolve(false);
      }, timeout);

      const pingResult = await ClientDb.db().command({ ping: 1 });

      resolve(pingResult.ok === 1 ? true : false);
    });
  }
}
