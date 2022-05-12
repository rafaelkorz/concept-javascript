import {
  ApolloDriver,
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'node:path';

import { DatabaseModule } from '../database/database.module';
import { MessagingModule } from '../messaging/messaging.module';
import { CoursesService } from '../services/course.service';
import { EnrollmentsService } from '../services/enrollment.service';

import { StudentsService } from '../services/students.service';
import { CoursesResolver } from './graphql/resolvers/courses.resolver';
import { EnrollmentsResolver } from './graphql/resolvers/enrollment.resolver';

import { StudentsResolver } from './graphql/resolvers/students.resolver';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    MessagingModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [
    // Resolvers
    CoursesResolver,
    EnrollmentsResolver,
    StudentsResolver,

    // Services
    CoursesService,
    EnrollmentsService,
    StudentsService,
  ],
})
export class HttpModule {}