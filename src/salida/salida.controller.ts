import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalidaService } from './salida.service';
import { CreateSalidaDto } from './dto/create-salida.dto';
import { UpdateSalidaDto } from './dto/update-salida.dto';
import { Salida } from './entities/salida.entity';
import { IConsulta } from './interfaces/salida.interface';

@Controller('salida')
export class SalidaController {
  constructor(private readonly salidaService: SalidaService) {}

  @Post()
  create(@Body() createSalidaDto: Salida) {
    return this.salidaService.create(createSalidaDto);
  }

  @Get()
  findAll() {
    return this.salidaService.findAll();
  }

  @Get(':id/findone')
  findOne(@Param('id') id: string) {
    return this.salidaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSalidaDto: UpdateSalidaDto) {
    return this.salidaService.update(+id, updateSalidaDto);
  }

  @Delete(':id/remove')
  remove(@Param('id') id: string) {
    return this.salidaService.remove(+id);
  }

  @Post('setformula')
  setFormula(@Body() insumo: IConsulta) {
    return this.salidaService.setFormula(insumo);
  }
  @Get('getformula')
  getFormula() {
    return this.salidaService.getQuery();
  }

}
