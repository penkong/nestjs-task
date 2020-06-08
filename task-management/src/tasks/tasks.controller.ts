import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Query,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';

import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';
import { TaskStatus } from './task-status.enum';
import { GetTasksFilterDto } from './dto/get-task-filter.dto';
import { TaskStatusValidationPipes } from './pipes/task-status-validation.pipe';
import { Task } from './task.entity';

//--------------------------------------------------------------

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get('/:id')
  getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createTask(@Body() createTaskDto: CreateTaskDto): void {
    console.log(1);
    return this.tasksService.createTask(createTaskDto);
  }
}
