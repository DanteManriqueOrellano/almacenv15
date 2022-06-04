import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProveedorService } from './proveedor.service';
import { Proveedor } from './entities/proveedor.entity';
import { IDeleteRow } from 'src/utils/arguments.delete';

@Controller('proveedor')
export class ProveedorController {
  constructor(private readonly proveedorService: ProveedorService) {}

  @Post()
  create(@Body() createProveedorDto: Proveedor) {
    return this.proveedorService.create(createProveedorDto);
  }

  @Get()
  findAll() {
    return this.proveedorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proveedorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProveedorDto: Proveedor) {
    return this.proveedorService.update(+id, updateProveedorDto);
  }

  @Delete(':row/:sheetId')
  remove(@Param() eliminar: IDeleteRow) {
    return this.proveedorService.remove(eliminar);
  }
}
