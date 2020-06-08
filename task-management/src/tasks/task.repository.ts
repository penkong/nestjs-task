import { Repository, EntityRepository } from 'typeorm';

import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './task-status.enum';
import { Logger, InternalServerErrorException } from '@nestjs/common';

// -------------------------------------------------------------------

// make it available on module
//persistance layer

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
  private logger = new Logger('TaskRepository');
  //
  // async createTask2(createTaskDto: CreateTaskDto): Promise<Task> {
  //   console.log(createTaskDto);
  //   const { title, description } = createTaskDto;
  //   const task = new Task();
  //   task.title = title;
  //   task.description = description;
  //   task.status = TaskStatus.OPEN;
  //   await task.save();
  //   return task;
  // }
  createTask(
    createTaskDto: CreateTaskDto,
    // user: User,
  ): void {
    const { title, description } = createTaskDto;
    console.log(title, description);
    // const task = new Task();
    // task.title = title;
    // task.description = description;
    // task.status = TaskStatus.OPEN;
    // // task.user = user;

    // try {
    //   await task.save();
    // } catch (error) {
    //   console.log(error);
    //   this.logger.error(
    //     `Failed to create a task for user "". Data: ${createTaskDto}`,
    //     error.stack,
    //   );
    //   throw new InternalServerErrorException();
    // }

    // // delete task.user;
    // return task;
  }
}
