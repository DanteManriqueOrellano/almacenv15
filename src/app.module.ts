import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SalidaModule } from './salida/salida.module';
import { InsumoModule } from './insumo/insumo.module';
import { ConfigdbService } from './configdb/configdb.service';
import { RequerimientoModule } from './requerimiento/requerimiento.module';
import { IngresoModule } from './ingreso/ingreso.module';

@Module({
  imports: [SalidaModule, InsumoModule, RequerimientoModule, IngresoModule],
  controllers: [AppController],
  providers: [AppService, ConfigdbService],
})
export class AppModule {}
