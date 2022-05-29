import { baseDB } from "src/datastore/datastore"

export function getRowByInsumoId(idinsumo:string){
  return  `=CELL("address";INDEX(INSUMO!A2:A;MATCH("${idinsumo}";INSUMO!A2:A;0)))` 
}


export function setFormulaSheetAjustes(query:string,spreadSheetId:string) {

  return {
    spreadsheetId: spreadSheetId,
      range: 'AJUSTES!J2',
      insertDataOption: 'INSERT_ROWS',
      valueInputOption: 'USER_ENTERED',
      resource:{
        majorDimension: 'ROWS',        
        values: [[query]],
      }
  }
}
