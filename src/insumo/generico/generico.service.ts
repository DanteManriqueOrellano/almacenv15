import { Injectable } from '@nestjs/common';

@Injectable()
export class GenericoService {
    resp:string ="lolololo"
    
    getSaludo(){
        return this.resp
    }


}
