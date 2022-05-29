import { Injectable } from '@nestjs/common';
import { BaseCrud } from 'src/datastore/datastore';
import { Ingreso } from 'src/ingreso/entities/ingreso.entity';

export class ingresoCRUD extends BaseCrud {


}

@Injectable()
export class LoadcrudService {
    datastore = new ingresoCRUD(Ingreso)
}
