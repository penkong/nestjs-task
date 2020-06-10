import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonResolver } from './lesson.resolver';
import { LessonService } from './lesson.service';
import { Lesson } from './lesson.entity';
import { StudentModule } from 'src/student/student.module';

@Module({
  imports: [
    // these allow to inject the repository or our lesson
    TypeOrmModule.forFeature([Lesson]),
    StudentModule,
  ],
  providers: [LessonResolver, LessonService],
})
export class LessonModule {}
