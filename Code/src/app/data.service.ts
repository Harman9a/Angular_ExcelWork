import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

   demoapi(fdata){
  return this.http.post('http://localhost/Harman/Node/Angular/angular9App/API/api.php',fdata);

   }

   addpf(pfdata){
    return this.http.post('http://localhost/Harman/Node/Angular/angular9App/API/api.php',pfdata);
  
     }

     addkfr(pfdata){
      return this.http.post('http://localhost/Harman/Node/Angular/angular9App/API/api.php',pfdata);
    
       }

     addis(cid){
      return this.http.post('http://localhost/Harman/Node/Angular/angular9App/API/api.php',cid);
    
       }
       delete(did){
        return this.http.post('http://localhost/Harman/Node/Angular/angular9App/API/api.php',did);
      
         }
   addcompany(cdata){
    return this.http.post('http://localhost/Harman/Node/Angular/angular9App/API/api.php',cdata);

   }
   getclist(fd){
    return this.http.post('http://localhost/Harman/Node/Angular/angular9App/API/api.php',fd);
   }

   gethead(dd){
    return this.http.post('http://localhost/Harman/Node/Angular/angular9App/API/api.php',dd);


   }

   getdata(id){
   

    return this.http.get('http://localhost/Harman/Node/Angular/angular9App/API/getdata.php?id='+id);


   }

   getpfdata(pfid){
   

    return this.http.get<any>('http://localhost/Harman/Node/Angular/angular9App/API/getdata.php?pfid='+pfid);


   }
   getcdata(cid){
   

    return this.http.get<any>('http://localhost/Harman/Node/Angular/angular9App/API/getdata.php?cid='+cid);


   }

   getdidata(di){
   

    return this.http.get<any>('http://localhost/Harman/Node/Angular/angular9App/API/getdata.php?di='+di);


   }

   getisdata(is){
   

    return this.http.get<any>('http://localhost/Harman/Node/Angular/angular9App/API/getdata.php?is='+is);


   }

// Harman Api's Start
   SignupUser(data){    
    return this.http.post('http://localhost/Harman/Node/Angular/angular9App/API/Axios.php',data);
  }

  LoginUser(data){    
    return this.http.post('http://localhost/Harman/Node/Angular/angular9App/API/Axios.php',data);
  }

  GetFinalForFinAna(data){
    return this.http.post('http://localhost/Harman/Node/Angular/angular9App/API/Axios.php',data);
  }

  UploadUserData(data){
    return this.http.post('http://localhost/Harman/Node/Angular/angular9App/API/Axios.php',data);
  }

  SaveStep2(data){
    return this.http.post('http://localhost/Harman/Node/Angular/angular9App/API/Axios.php',data);
  }
// Harman Api's End
}
