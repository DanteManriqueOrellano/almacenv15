import { Module } from '@nestjs/common';
import { InsumoService } from './insumo.service';
import { InsumoController } from './insumo.controller';
import { ConfigdbService } from 'src/configdb/configdb.service';
import { GenericoService } from './generico/generico.service';
import { EjecucionObraContex } from 'src/datastore/datastore';


@Module({
  controllers: [InsumoController],
  providers: [InsumoService,ConfigdbService, GenericoService,EjecucionObraContex]
})
export class InsumoModule {}
