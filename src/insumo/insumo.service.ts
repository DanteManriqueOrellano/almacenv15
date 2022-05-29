import { Injectable } from '@nestjs/common';
import { UpdateInsumoDto } from './dto/update-insumo.dto';
import { Insumo } from './entities/insumo.entity';
import { Iinsumo } from './interfaces/iinsumo.interface';
import { ConfigdbService } from 'src/configdb/configdb.service';
import { EjecucionObraContex } from 'src/datastore/datastore';
import { ICelda } from 'src/salida/salida.service';

@Injectable()
export class InsumoService {
  
  constructor(private db:ConfigdbService,private ctx: EjecucionObraContex){ }
   
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



/*
  async setFormula(consulta:Iinsumo){
    
    const  query =  `=QUERY({SALIDA!A2:G500\\ARRAYFORMULA(IF(SALIDA!D2:D500="";"";VLOOKUP(SALIDA!D2:D500;{INSUMO!A2:D500};{2\\4};FALSE)))};"SELECT Col8,Col9 where Col8 = '${consulta.insumo}'")` 
    const payload = await this.db.sheet.spreadsheets.values.append({
      spreadsheetId: "1Smlg0vdnDPWPdQ_6023ex9OTwnMwVjgtfjEQyIuPQGA",
      range: 'AJUSTES!A1',
      insertDataOption: 'INSERT_ROWS',
      valueInputOption: 'USER_ENTERED',
      resource:{
        majorDimension: 'ROWS',        
        values: [[query]],
      }
      
    })
    return payload.data


  }
  async getQuery(){
    const getRows = await this.db.sheet.spreadsheets.values.get(
      {
        auth: this.db.auth,
        spreadsheetId:"1Smlg0vdnDPWPdQ_6023ex9OTwnMwVjgtfjEQyIuPQGA",
        range: 'AJUSTES!A1',  
      },
      
    )
    return getRows.data

  }
  async deleteFormula(id:number){
    const res = await this.db.sheet.spreadsheets.batchUpdate({
      auth: this.db.auth,
      spreadsheetId: "1Smlg0vdnDPWPdQ_6023ex9OTwnMwVjgtfjEQyIuPQGA",
      resource: {
        "requests": 
        [
          {
            "deleteRange": 
            {
              "range": 
              {
                "sheetId": "1201560136", // gid
                "startRowIndex": id - 1,//empieza de 43
                "endRowIndex": id
              },
              "shiftDimension": "ROWS"
            }
          }
        ]
      }
    }, (err, response) => {
      return response
    })

  }*/

}
