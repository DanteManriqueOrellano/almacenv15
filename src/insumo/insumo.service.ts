import { Injectable } from '@nestjs/common';
import { UpdateInsumoDto } from './dto/update-insumo.dto';
import { Insumo } from './entities/insumo.entity';
import { Iinsumo } from './interfaces/iinsumo.interface';
import { ConfigdbService } from 'src/configdb/configdb.service';
import { EjecucionObraContex } from 'src/datastore/datastore';
import { ICelda } from 'src/salida/salida.service';

@Injectable()
export class InsumoService {
  
  constructor(private ctx: EjecucionObraContex){ }
  async create(createInsumoDto: Insumo) { 
    return this.ctx.dataSource.create({dataObj:createInsumoDto});
  }

  async findAll() {
    return this.ctx.dataSource.listAll()
  }

  findOne(id: number) {
    return `This action returns a #${id} insumo joder`;
  }

  async update(idinsumo: string, updateInsumoDto: UpdateInsumoDto) {
    let id
    await this.ctx.dataSource.setFormulaActiveCell(idinsumo)
    id = await this.ctx.dataSource.getFormulaActiveCell()
    console.log(id)
    return this.ctx.dataSource.update({dataObj:updateInsumoDto},id)
  }

  async remove(ve:{row: number, sheetId:string}) {
    this.ctx.dataSource.deleteById(ve)
  }
  
  async setFormulaActiveCell(celda:ICelda){
    
    this.ctx.dataSource.setFormulaActiveCell(celda.idinsumo)

  }
  async getFormulaActiveCell(){
    
    return this.ctx.dataSource.getFormulaActiveCell()
  }
  async setFormula(consulta:Iinsumo){
    return this.ctx.dataSource.setFormula(consulta)

  }
  getFormula1(){
    return this.ctx.dataSource.getFormula2()

  }




}
