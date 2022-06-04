import { Type } from '@nestjs/common';
import { google } from 'googleapis';
import { Insumo } from 'src/insumo/entities/insumo.entity';

export class baseDB {
    public readonly sheet:any 
    public spreadSheetId="1Smlg0vdnDPWPdQ_6023ex9OTwnMwVjgtfjEQyIuPQGA"
    public readonly auth:any
    constructor(){
      this.auth = new google.auth.GoogleAuth({
          credentials: {
            client_email: "googleserviceaccountaquasinfac@aquasinfactura.iam.gserviceaccount.com",
            client_id: "113075941984597740311",
            private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQClVCCtz2fdqC3i\n4ge7WjA/TWzUgmcyFWmcOOJkZc+73A7zTzZAp8UR5S2Ofzblmhp5VIfJx/Kb3PKj\n8M4rI/iRvxwfo3mYuNKoIotmRH3aNh0fJYXo1zlo+l1Jy/U6xiOHZ1T2XQSZBaWO\n2XyNgSK3kwSuSIkrzxINWoSdegXiAzqZLxzrj7WTiDbcEAD0Z6VRlXmwJCAxckeJ\nME5nSzpGN5dPYL54jwWhAroJsFSJMcV3yBkzKTRQMXkxeH9yywcg0BMTPraSzVZH\nEhorceBrmosHc9vc5G8jx/AnoJq+avLexamyz3xL7jnOkV3hi1o7rT6bKzghi4tn\nnNTcAWa3AgMBAAECggEAFWN1WNcYwlnUGeKRCoFn9YCQQEvgit+vSoknbMKpJc4Z\n1wtb4vBxc9e41ZMKqJiPrTus14N5FQX4FBJ+saEVMtHNEyDEhef/RMY3T5Mzzuuq\nR9HEabOSV0zwjbAHuUNR7F4HZVnyUtOisADd9raKpcIs3FlA+bxvwu9/cZoMMclw\nnTFhy30Rr0NJF3sG4H4SQqop5OdP4d0zRj+hPByKUvji27+Mfukp7k/5C4+V/Ylo\nz2UCQRnI+yQEtVcCZf1JCeapNc6y13HiLxKU0WrKOz5iw2+uObAXNu3rJvGc5ObQ\nUfG0BOFeCRSJINpVL7Rs8NXaAGbRroYxtOT5OVdaPQKBgQDlB0mWv1pWrlpwtcFf\nd6oQDGVutZqPoFIETGeT8OX2i8LIMuhyrDmwcQk3QsJFmzrKL1VuOkmbUu57YfIl\nWWMT9wmPqFoR4y9TYE9GIyCIF3imEYZL5CT1hJSTtH5b9C/wn+fMq5F7wmYTEmLq\noVLBUCXYh9mGNTynQUKqAzqaDQKBgQC4zG2EsnSIBkmWTJbvSBVwpyOtOWUkYFw1\nbNsaGEHk6zK8CiUarHlMcmtkU0xG90hb7MTtThwmNX+BPAFey2EQlOXWFvi7oQ6S\nHOvOCf2BwPpyF8b0Vy9v/Uf7LxGFzkzoOcNehyXCQ36iRvwKQ98Fuz1l6ratKDtg\n/9lyWhCm0wKBgEYM1ZA7FNmAWH8yyGN3yVdBQ2D6QLz/TzarW97fBqdDFh9/mqNA\nVCDIYgY58Au0L+YZVirxvwO3+ONaEOMllO1NWOpMlsfz0czRn02XfuLBMxCwOYBK\n1pcVpxAKW7+qT2NstUxfiY7t5aSdsg2LrDEeX4T8ACdRbyzFBCvV8v2dAoGAb0dq\ni4WKdn6SwVbNbLlTb8q1yRHOveDopaMvLL9+roKSwni5bx58zHP6ByfBvtoZUIF6\n9AsdGEUOypt/l72QbZO78vdSQGnzhDi2JhQN+5xhM2LuAySdBCrYtYDaZGCeHxjp\ndHqdWiWak8166BOGsMTXbA+ygQLA/uAR6LIjZNECgYBicuyGrLwKqol3GvFpVWbu\nEWv7GC9eavnOUXy5MTckXutprysM2chJP78+7vWt5+kkti/MDQxckvErKcokbrfI\nCJ0wehrc5w2DHL739LuZI6uoyPWZmmYhmKC/OCovL0/huMBoMPv0KWySUpbvFer9\neyxSZ4wufn205q291XFldw==\n-----END PRIVATE KEY-----\n"
          },
          scopes: [
            'https://www.googleapis.com/auth/drive',
            'https://www.googleapis.com/auth/drive.file',
            'https://www.googleapis.com/auth/spreadsheets',
          ],
        });
    
        this.sheet = google.sheets({
          auth:this.auth,
          version: 'v4',
        });
      
    }
     
  }

export type createInput<T> = {
    dataObj: T 
}

interface IDatabase {
    create<T>(input: createInput<T>, range: string): Promise<any>;
    deleteById({row: number,sheetId:string}): Promise<any>;
    //findById(id: string): Promise<any>;
    listAll<T>(range: string): Promise<any[]>;
    update<T>(input: createInput<T>, range: string): Promise<any>
}
export class BaseCrud extends baseDB implements IDatabase {
    rangeEntity:any
    
    
    constructor(entity:any){
        super()
        const der  =  new entity()
        this.rangeEntity = der.constructor.name
       
        
    }
    async update<T>(input: createInput<T>, range: string): Promise<any> {
        //=CELL("address";INDEX(A2:A17;MATCH(E2;A2:A17;0)))
        let values = [
            Object.values(input.dataObj),
            // Additional rows ...
          ];
          const resource = {
            values,
          };


          try {
            const result = await this.sheet.spreadsheets.values.update({
              spreadsheetId:this.spreadSheetId,
              range,
              valueInputOption:'USER_ENTERED',
              resource,
            });
            console.log('%d cells updated.', result.data.updatedCells);
            return result;
          } catch (err) {
            // TODO (Developer) - Handle exception
            throw err;
          }
       
    }
    async listAll<T>(range:string='A2:I'){//: Promise<any[]> {
      
       
      const getRows = await this.sheet.spreadsheets.values.get(
            {
              auth: this.auth,
              spreadsheetId:this.spreadSheetId ,
              range: `${this.rangeEntity.toUpperCase()}!${range}`,  
            },
            
          )
        var retorno
        const inicio = getRows.data.values

          if(this.rangeEntity.toUpperCase() === 'INSUMO'){
            retorno = inicio.map((value)=>{
              return {
                idinsumo:value[0],
                insumo:value[1],
                umedida:value[2],
                idcategoria:value[3]

              }

            })
            
          return  retorno
        }
        if(this.rangeEntity.toUpperCase() === 'INGRESO'){
          retorno = inicio.map((value)=>{
            return {
              idingreso:value[0],
              iddocumento:value[1],
              idinsumo:value[2],
              idproveedor:value[3],
              fingreso:value[4],
              nrodocumento:value[5],
              cantidad:value[6],
              punitario:value[7],
              reingreso:value[8]

            }

          })
          
        return  retorno
      }
      if(this.rangeEntity.toUpperCase() === 'SALIDA'){
        retorno = inicio.map((value)=>{
          return {
            idsalida:value[0],
            nroficharequerimiento:value[1],
            infcomplementaria:value[2],
            idinsumo:value[3],
            cantidad:value[4],
            obs:value[5],
            fechasalida:value[6],

          }

        })
        
      return  retorno
    }
    if(this.rangeEntity.toUpperCase() === 'REQUERIMIENTO'){
      retorno = inicio.map((value)=>{
        return {
          idrequerimiento:value[0],
          fpedido:value[1],
          idinsumo:value[2],
          frequerida:value[3],
          infcomplementaria:value[4],
          cantidad:value[5],
          secuencia_origen_requerimiento:value[6]

        }

      })
      
    return  retorno
  }








          
          

    }
    async deleteById(ve:{row: number,sheetId:string}): Promise<any> {
        await this.sheet.spreadsheets.batchUpdate({
            auth: this.auth,
            spreadsheetId:this.spreadSheetId,
            resource: {
              "requests": 
              [
                {
                  "deleteRange": 
                  {
                    "range": 
                    {
                      "sheetId": ve.sheetId, // gid
                      "startRowIndex": ve.row - 1,//empieza de 43
                      "endRowIndex": ve.row
                    },
                    "shiftDimension": "ROWS"
                  }
                }
              ]
            }
          }, (err, response) => {
            return response
          })
    }
    async create<T>(input: createInput<T>, range: string='A2:I'): Promise<any> {
        const payload = await this.sheet.spreadsheets.values.append({
          spreadsheetId: this.spreadSheetId,
          range: `${this.rangeEntity.toUpperCase()}!${range}`,
          valueInputOption: 'USER_ENTERED',
          resource:{
            majorDimension: 'ROWS',        
            values: [Object.values(input.dataObj)],
          }    })
        return payload   
    }
}
export class EjecucionObraCRUD extends BaseCrud{
    
  async setFormula(celda:Iinsumo){
    const  query =  `=CELL("address";INDEX(INSUMO!A2:A;MATCH("${celda.insumo}";INSUMO!A2:A;0)))` 
    const payload = await this.sheet.spreadsheets.values.append({
      spreadsheetId: this.spreadSheetId,
      range: 'AJUSTES!J2',
      insertDataOption: 'INSERT_ROWS',
      valueInputOption: 'USER_ENTERED',
      resource:{
        majorDimension: 'ROWS',        
        values: [[query]],
      }
    })
    return payload.data
  }
  async getFormula2():Promise<string>{
    const getRows = await this.sheet.spreadsheets.values.get(
      {
        auth: this.auth,
        spreadsheetId:this.spreadSheetId,
        range: 'AJUSTES!J2',  
      },
    )
    return await getRows.data.values[0][0]
  }
  async setFormulaActiveCell(idinsumo:string){
    const  query:string =  `=CELL("address";INDEX(INSUMO!A2:A;MATCH("${idinsumo}";INSUMO!A2:A;0)))` 
     await this.sheet.spreadsheets.values.append(setFormulaSheetAjustes(query,this.spreadSheetId))
  }
  async getFormulaActiveCell(){
    
    const getRows = await this.sheet.spreadsheets.values.get(
        
      {
          auth: this.auth,
          spreadsheetId:this.spreadSheetId,
          range: 'AJUSTES!J2',  
        },
        
      )
      const resultado = await getRows.data.values[0][0]
      //eliminar la nueva fila creada
      this.deleteById({row:2,sheetId:"1598237507"})  
      return resultado
}
}
import { Injectable } from '@nestjs/common';
import { Iinsumo } from 'src/insumo/interfaces/iinsumo.interface';
import { setFormulaSheetAjustes } from 'src/utils/utils.sheet';


@Injectable()
export class EjecucionObraContex{
    /*datasource (){
        return new EjecucionObraCRUD(Insumo)
    } */
    dataSource = new EjecucionObraCRUD(Insumo)
    
        
}