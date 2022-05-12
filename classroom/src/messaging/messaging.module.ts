import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CoursesService } from '../services/course.service';
import { EnrollmentsService } from '../services/enrollment.service';

import { StudentsService } from '../services/students.service';
import { PurchaseController } from './controllers/purcheses.controller';


@Module({
  imports: [DatabaseModule],
  controllers: [PurchaseController],
  providers: [StudentsService, CoursesService, EnrollmentsService],
})
export class MessagingModule {}