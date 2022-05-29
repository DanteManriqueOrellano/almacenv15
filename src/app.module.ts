import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SalidaModule } from './salida/salida.module';
import { InsumoModule } from './insumo/insumo.module';
import { ConfigdbService } from './configdb/configdb.service';

@Module({
  imports: [SalidaModule, InsumoModule],
  controllers: [AppController],
  providers: [AppService, ConfigdbService],
})
export class AppModule {}
