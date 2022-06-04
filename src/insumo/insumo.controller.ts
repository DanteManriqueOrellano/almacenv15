import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InsumoService } from './insumo.service';
import { CreateInsumoDto } from './dto/create-insumo.dto';
import { UpdateInsumoDto } from './dto/update-insumo.dto';
import { Insumo } from './entities/insumo.entity';
import { Iinsumo } from './interfaces/iinsumo.interface';
import { ICelda } from 'src/salida/salida.service';
import { IDeleteRow } from 'src/utils/arguments.delete';


@Controller('insumo')
export class InsumoController {
  constructor(private readonly insumoService: InsumoService) {}

  @Post()
  create(@Body() createInsumoDto: Insumo) {
    return this.insumoService.create(createInsumoDto);
  }

  @Get()
  findAll() {
    return this.insumoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.insumoService.findOne(+id);
  }

  @Patch(':idinsumo')
  update(@Param('idinsumo') idinsumo: string, @Body() updateInsumoDto: Iinsumo) {
    return this.insumoService.update(idinsumo, updateInsumoDto);
  }

  @Delete(':row/:sheetId')
  remove(@Param() eliminar: IDeleteRow) {
    console.log(eliminar)
    return this.insumoService. remove(eliminar);
  }
  @Post('setformula')
  setFormula(@Body() insumo: Iinsumo) {
    return this.insumoService.setFormula(insumo);
  }
  @Post('setformulacell')
  setFormulaActivateCell(@Body() celda: ICelda) {
    return this.insumoService.setFormulaActiveCell(celda);
  }
  @Get('getformulacell')
  getFormulaActivateCell() {
    return this.insumoService.getFormulaActiveCell();
  }

 @Get('get/formula')
  getFormula() {
    return this.insumoService.getFormula1();
  }
}
