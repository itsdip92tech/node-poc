import { Module } from '@nestjs/common';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { CacheModule } from '@nestjs/cache-manager';
import KeyvRedis from '@keyv/redis';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CsvToJsonModule } from './modules/csvToJson/csvToJson.module';
import { SearchModule } from './modules/search/search.module';
import { ArrayModule } from './modules/array/array.module';
import { TwoPointersModule } from './modules/two-pointers/two-pointers.module';
import { HashMapModule } from './modules/hash-map/hash-map.module';
import { StackModule } from './modules/stack/stack.module';
import { TreeService } from './modules/tree/tree.service';
import { TreeModule } from './modules/tree/tree.module';
@Module({
  imports: [
    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: () => {
        return {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-call
          stores: [new KeyvRedis('redis://localhost:6379')],
        };
      },
    }),
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
    CsvToJsonModule,
    SearchModule,
    ArrayModule,
    TwoPointersModule,
    HashMapModule,
    StackModule,
    TreeModule,
  ],
  controllers: [AppController],
  providers: [AppService, TreeService],
})
export class AppModule {}
