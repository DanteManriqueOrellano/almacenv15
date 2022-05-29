import { Injectable } from '@nestjs/common';
import { Requerimiento } from 'src/requerimiento/entities/requerimiento.entity';
import { IRequerimiento } from 'src/requerimiento/interfaces/requerimiento.interface';
import { CreateRequerimientoDto } from '../../dto/create-requerimiento.dto';
import { UpdateRequerimientoDto } from '../../dto/update-requerimiento.dto';
import { LoadCrudService } from '../load/load.service';

@Injectable()
export class RequerimientoService {
  constructor(private ctx:LoadCrudService){}
  create(createRequerimiento: Requerimiento) {
    return this.ctx.dataSource.create({dataObj:createRequerimiento});
  }

  findAll() {
    return this.ctx.dataSource.listAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} requerimiento`;
  }

  update(id: number, updateRequerimientoDto: UpdateRequerimientoDto) {
    return `This action updates a #${id} requerimiento`;
  }

  remove(id: number) {
    return `This action removes a #${id} requerimiento`;
  }
}
