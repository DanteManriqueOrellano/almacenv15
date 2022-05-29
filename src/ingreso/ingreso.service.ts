import { Injectable } from '@nestjs/common';
import { CreateIngresoDto } from './dto/create-ingreso.dto';
import { UpdateIngresoDto } from './dto/update-ingreso.dto';
import { Ingreso } from './entities/ingreso.entity';
import { LoadcrudService } from './services/loadcrud/loadcrud.service';

@Injectable()
export class IngresoService {
  constructor(private ctx:LoadcrudService){}
  create(createIngresoDto: Ingreso) {
    return this.ctx.datastore.create({dataObj:createIngresoDto}) ;
  }

  findAll() {
    return this.ctx.datastore.listAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} ingreso`;
  }

  update(id: number, updateIngresoDto: UpdateIngresoDto) {
    return `This action updates a #${id} ingreso`;
  }

  remove(id: number) {
    return `This action removes a #${id} ingreso`;
  }
}
