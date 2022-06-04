import { Injectable } from '@nestjs/common';
import { BaseCrud } from 'src/datastore/datastore';
import { Proveedor } from 'src/proveedor/entities/proveedor.entity';

export class ProveedorCRUD extends BaseCrud{
    //aca se pueden poner mas funcionalidad al crud basico
}

@Injectable()
export class LoadcrudproveedorService {
    datastore = new ProveedorCRUD(Proveedor)
}
