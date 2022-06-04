import { Module } from '@nestjs/common';
import { ProveedorService } from './proveedor.service';
import { ProveedorController } from './proveedor.controller';
import { LoadcrudproveedorService } from './services/loadcrudproveedor/loadcrudproveedor.service';

@Module({
  controllers: [ProveedorController],
  providers: [ProveedorService,LoadcrudproveedorService]
})
export class ProveedorModule {}
