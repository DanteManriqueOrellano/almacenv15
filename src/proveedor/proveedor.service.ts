import { Injectable } from '@nestjs/common';
import { CreateProveedorDto } from './dto/create-proveedor.dto';
import { UpdateProveedorDto } from './dto/update-proveedor.dto';
import { Proveedor } from './entities/proveedor.entity';
import { LoadcrudproveedorService } from './services/loadcrudproveedor/loadcrudproveedor.service';

@Injectable()
export class ProveedorService {
  
  constructor(private ctx:LoadcrudproveedorService){ }
  create(createProveedor: Proveedor) {
    return this.ctx.datastore.create({dataObj:createProveedor});
  }

  findAll() {
    console.log("hola")
    return this.ctx.datastore.listAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} proveedor`;
  }

  update(id: number, updateProveedorDto: Proveedor) {
    return `This action updates a #${id} proveedor`;
  }

  async remove(ve:{row: number, sheetId:string}) {
    return this.ctx.datastore.deleteById(ve);
  }
}
