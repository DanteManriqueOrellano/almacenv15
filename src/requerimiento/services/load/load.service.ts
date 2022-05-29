import { Injectable } from '@nestjs/common';
import { BaseCrud  } from 'src/datastore/datastore';
import { Requerimiento } from 'src/requerimiento/entities/requerimiento.entity';

export class requerimientoCRUD extends BaseCrud{

}

@Injectable()
export class LoadCrudService {
    dataSource = new requerimientoCRUD(Requerimiento)
}
