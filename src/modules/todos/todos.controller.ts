import { Controller, Get, Param } from '@nestjs/common';

import { DBService } from '@services/db.service';

@Controller('todos')
export class TodosController {

  constructor(
    private db: DBService
  ) {}

  @Get()
  async list() {
    const [rows] = await this.db.query('SELECT * FROM `todos`');
    return {
      data: rows
    };
  }

  @Get(':id')
  async get(@Param() { id }) {
    const [[record]] = await this.db.query('SELECT * FROM `todos` WHERE id = ' + id);
    return {
      data: record
    };
  }

}