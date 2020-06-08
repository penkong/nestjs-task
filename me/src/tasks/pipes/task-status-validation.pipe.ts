import {
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { TaskStatus } from '../task.model';

export class TaskStatusValidationPipes implements PipeTransform {
  private readonly allowedStatuses = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,
  ];

  public transform(value: any, metadata: ArgumentMetadata) {
    // console.log(value);
    // DONE
    // console.log(metadata);
    // { metatype: [Function: String], type: 'body', data: 'status' }
    value = value.toUpperCase();
    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} is an invalid status!`);
    }
    return value;
  }

  private isStatusValid(status: any) {
    const idx = this.allowedStatuses.indexOf(status);
    return idx !== -1;
  }
}
