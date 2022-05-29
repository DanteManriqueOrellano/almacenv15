import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IngresoService } from './ingreso.service';
import { CreateIngresoDto } from './dto/create-ingreso.dto';
import { UpdateIngresoDto } from './dto/update-ingreso.dto';
import { Ingreso } from './entities/ingreso.entity';

@Controller('ingreso')
export class IngresoController {
  constructor(private readonly ingresoService: IngresoService) {}

  @Post()
  create(@Body() createIngresoDto: Ingreso) {
    return this.ingresoService.create(createIngresoDto);
  }

  @Get()
  findAll() {
    return this.ingresoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ingresoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIngresoDto: UpdateIngresoDto) {
    return this.ingresoService.update(+id, updateIngresoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ingresoService.remove(+id);
  }
}
