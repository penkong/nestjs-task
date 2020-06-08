import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { typeOrmConfig } from './config/typeOrm.config';
import { TasksModule } from './tasks/tasks.module';

@Module({
  // sevices
  providers: [],
  // http guyz
  controllers: [],
  // consuming modules
  imports: [TypeOrmModule.forRoot(typeOrmConfig), TasksModule],
  // export this service for instance consume or other module
  exports: [],
})
export class AppModule {}
