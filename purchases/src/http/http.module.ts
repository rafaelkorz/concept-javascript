import { Module } from '@nestjs/common';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import path from 'node:path';
import { DatabaseModule } from 'src/database/database.module';
import { ProductsResolver } from './graphql/resolvers/products.resolver';
import { ProductsService } from 'src/services/products.service';
import { PurchasesResolver } from './graphql/resolvers/purchases.resolver';
import { PurchasesService } from 'src/services/purchases.service';
import { CustomersResolver } from './graphql/resolvers/customers.resolver';
import { CustomersService } from 'src/services/custumer.service';
import { MessagingModule } from 'src/messaging/messaging.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MessagingModule,
    DatabaseModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [
    ProductsResolver, 
    ProductsService, 

    PurchasesResolver, 
    PurchasesService,

    CustomersResolver,
    CustomersService
 ]
})
export class HttpModule {}
