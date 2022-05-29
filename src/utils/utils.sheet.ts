export async function deleteResponseQueryFromApi(row:number,sheetId:string,spreadsheetId:string,auth:any){
    await this.sheet.spreadsheets.batchUpdate({
        auth,
        spreadsheetId,
        resource: {
          "requests": 
          [
            {
              "deleteRange": 
              {
                "range": 
                {
                  "sheetId": sheetId, // gid
                  "startRowIndex": row - 1,//empieza de 43
                  "endRowIndex": row
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