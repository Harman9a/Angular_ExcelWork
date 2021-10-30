import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

   demoapi(fdata){
  return this.http.post('http://localhost/Harman/Node/Angular/EXCEL_WORK/EXCEL_WORK/Code/api.php',fdata);

   }

   addpf(pfdata){
    return this.http.post('http://localhost/Harman/Node/Angular/EXCEL_WORK/EXCEL_WORK/Code/api.php',pfdata);
  
     }

     addis(cid){
      return this.http.post('http://localhost/Harman/Node/Angular/EXCEL_WORK/EXCEL_WORK/Code/api.php',cid);
    
       }
       delete(did){
        return this.http.post('http://localhost/Harman/Node/Angular/EXCEL_WORK/EXCEL_WORK/Code/api.php',did);
      
         }
   addcompany(cdata){
    return this.http.post('http://localhost/Harman/Node/Angular/EXCEL_WORK/EXCEL_WORK/Code/api.php',cdata);

   }
   getclist(fd){
    return this.http.post('http://localhost/Harman/Node/Angular/EXCEL_WORK/EXCEL_WORK/Code/api.php',fd);


   }

   gethead(dd){
    return this.http.post('http://localhost/Harman/Node/Angular/EXCEL_WORK/EXCEL_WORK/Code/api.php',dd);


   }

   getdata(id){
   

    return this.http.get('http://localhost/Harman/Node/Angular/EXCEL_WORK/EXCEL_WORK/Code/getdata.php?id='+id);


   }

   getpfdata(pfid){
   

    return this.http.get<any>('http://localhost/Harman/Node/Angular/EXCEL_WORK/EXCEL_WORK/Code/getdata.php?pfid='+pfid);


   }
   getcdata(cid){
   

    return this.http.get<any>('http://localhost/Harman/Node/Angular/EXCEL_WORK/EXCEL_WORK/Code/getdata.php?cid='+cid);


   }

   getdidata(di){
   

    return this.http.get<any>('http://localhost/Harman/Node/Angular/EXCEL_WORK/EXCEL_WORK/Code/getdata.php?di='+di);


   }

   getisdata(is){
   

    return this.http.get<any>('http://localhost/Harman/Node/Angular/EXCEL_WORK/EXCEL_WORK/Code/getdata.php?is='+is);


   }
}
