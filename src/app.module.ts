import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';

@Module({
  // sevices
  providers: [],
  // http guyz
  controllers: [],
  // consuming modules
  imports: [TasksModule],
  // export this service for instance consume or other module
  exports: [],
})
export class AppModule {}
