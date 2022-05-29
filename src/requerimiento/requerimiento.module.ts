import { Module } from '@nestjs/common';
import { RequerimientoService } from './services/requerimiento/requerimiento.service';
import { RequerimientoController } from './requerimiento.controller';
import { LoadCrudService } from './services/load/load.service';

@Module({
  controllers: [RequerimientoController],
  providers: [RequerimientoService, LoadCrudService]
})
export class RequerimientoModule {}
