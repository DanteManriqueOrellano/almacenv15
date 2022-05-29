import { Injectable } from '@nestjs/common';
import { google } from 'googleapis';

@Injectable()
export class ConfigdbService {
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
