import { v1 as uuid } from 'uuid';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task, TaskStatus } from './task.model';
import { GetTasksFilterDto } from './dto/get-task-filter.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getTasksWithFilter(filterDto: GetTasksFilterDto): Task[] {
    const { search, status } = filterDto;

    let tasks = this.getAllTasks();

    if (status) tasks = tasks.filter(task => task.status === status);

    if (search)
      tasks = tasks.filter(
        task =>
          task.title.includes(search) || task.description.includes(search),
      );

    return tasks;
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTask(id: string): Task {
    const found = this.tasks.find(task => task.id === id);
    if (!found) throw new NotFoundException('task with id not found!');
    return found;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }

  updateTaskStatus(id: string, status: TaskStatus): Task {
    const task = this.getTask(id);
    task.status = status;
    return task;
  }

  deleteTask(id: string): void {
    const found = this.getTask(id);
    this.tasks = this.tasks.filter(el => el.id !== found.id);
  }
}
