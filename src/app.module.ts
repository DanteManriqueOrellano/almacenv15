import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SalidaModule } from './salida/salida.module';

@Module({
  imports: [SalidaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
