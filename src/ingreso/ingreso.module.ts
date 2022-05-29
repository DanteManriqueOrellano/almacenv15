import { Module } from '@nestjs/common';
import { IngresoService } from './ingreso.service';
import { IngresoController } from './ingreso.controller';
import { LoadcrudService } from './services/loadcrud/loadcrud.service';

@Module({
  controllers: [IngresoController],
  providers: [IngresoService, LoadcrudService]
})
export class IngresoModule {}
