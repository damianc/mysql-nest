import { Module } from '@nestjs/common';

import { TodosController } from './todos.controller';
import { DBService } from '@services/db.service';

@Module({
  imports: [],
  controllers: [TodosController],
  providers: [DBService]
})
export class TodosModule {}
