import { Injectable } from '@nestjs/common';

import { createConnection } from 'mysql2';
import Credentials from '../db/credentials';

@Injectable()
export class DBService {
  private connection;

  constructor() {
    this.connection = createConnection(Credentials).promise();
  }

  query(sqlStmt) {
    return this.connection.query(
      sqlStmt
    );
  }
}