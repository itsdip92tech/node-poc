import { Module } from '@nestjs/common';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { CacheModule } from '@nestjs/cache-manager';
import KeyvRedis from '@keyv/redis';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CsvToJsonModule } from './modules/csvToJson/csvToJson.module';
import { SearchModule } from './modules/dsa/search/search.module';
import { ArrayModule } from './modules/dsa/array/array.module';
import { HashMapModule } from './modules/dsa/hash-map/hash-map.module';
import { StackModule } from './modules/dsa/stack/stack.module';
import { TreeModule } from './modules/dsa/tree/tree.module';
import { StreamService } from './modules/stream/stream.service';
import { StreamModule } from './modules/stream/stream.module';
import { LinkedListModule } from './modules/dsa/linked-list/linked-list.module';
import { SetModule } from './modules/dsa/set/set.module';

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
    HashMapModule,
    StackModule,
    TreeModule,
    StreamModule,
    LinkedListModule,
    SetModule,
  ],
  controllers: [AppController],
  providers: [AppService, StreamService],
})
export class AppModule {}
