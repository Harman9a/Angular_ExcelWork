import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router'
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileUploadControl, FileUploadValidators } from '@iplab/ngx-file-upload';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-data-upload',
  templateUrl: './data-upload.component.html',
  styleUrls: ['./data-upload.component.css']
})
export class DataUploadComponent implements OnInit {

  constructor(private router: Router, private ds: DataService) { }

  public uploadedFiles1: Array<File> = [];
  public uploadedFiles2: Array<File> = [];
  public uploadedFiles3: Array<File> = [];
  public uploadedFiles4: Array<File> = [];
  public uploadedFiles5: Array<File> = [];
  public uploadedFiles6: Array<File> = [];
  public uploadedFiles7: Array<File> = [];
  public uploadedFiles8: Array<File> = [];

  nextbtn = true;

  finData = [];
  
  ngOnInit(): void {
    this.getData();
  }

  getData(){
    var fd = new FormData();
    let c_id = localStorage.getItem('c_id');
    fd.append("c_id",c_id);
    fd.append('action_id', 'CHECK_FINAL_DATA_FIN_ANA');
    this.ds.GetFinalForFinAna(fd).subscribe((res) => {
        if(res[0].dataUpload != 'null'){
          this.finData = JSON.parse(res[0].dataUpload)
          this.nextbtn = false;
        }
        console.log(this.finData);
    });
  }

  saveImage(){
    console.log(this.uploadedFiles1)
    const formData = new FormData();
    formData.append('action_id', 'UPLOAD_USER_DATA');

    // formData.append('img',testData);

    var ins:any = this.uploadedFiles1.length;
    formData.append(`popL`,ins);
    for (var x = 0; x < ins; x++) {
        formData.append(`pop${x}`,this.uploadedFiles1[x]);
    }

    ins = this.uploadedFiles2.length;
    formData.append(`opL`,ins);
    for (var x = 0; x < ins; x++) {
        formData.append(`op${x}`,this.uploadedFiles2[x]);
    }

    ins = this.uploadedFiles3.length;
    formData.append(`fpL`,ins);
    for (var x = 0; x < ins; x++) {
        formData.append(`fp${x}`,this.uploadedFiles4[x]);
    }

    ins = this.uploadedFiles4.length;
    formData.append(`gpL`,ins);
    for (var x = 0; x < ins; x++) {
        formData.append(`gp${x}`,this.uploadedFiles4[x]);
    }

    ins = this.uploadedFiles5.length;
    formData.append(`cpL`,ins);
    for (var x = 0; x < ins; x++) {
        formData.append(`cp${x}`,this.uploadedFiles5[x]);
    }

    ins = this.uploadedFiles6.length;
    formData.append(`fvL`,ins);
    for (var x = 0; x < ins; x++) {
        formData.append(`fv${x}`,this.uploadedFiles6[x]);
    }

    ins = this.uploadedFiles7.length;
    formData.append(`gvL`,ins);
    for (var x = 0; x < ins; x++) {
        formData.append(`gv${x}`,this.uploadedFiles7[x]);
    }

    ins = this.uploadedFiles8.length;
    formData.append(`cvL`,ins);
    for (var x = 0; x < ins; x++) {
        formData.append(`cv${x}`,this.uploadedFiles8[x]);
    }

    this.ds.UploadUserData(formData).subscribe(
      (res) => {
        // console.log(res)
        if(true){
            // alert('Done');
            let c_id =localStorage.getItem('c_id');
            let year =localStorage.getItem('year');
            var jsdata = JSON.stringify(res);

            var fd = new FormData();
            fd.append("action_id",'SAVE_DATA_UPLOAD' );
            fd.append("c_id",c_id);
            fd.append("year",year );
            fd.append("data",jsdata);

            this.ds.SaveStep2(fd).subscribe((res)=>{
              console.log(res);
              if(res == true){
                // this.router.navigateByUrl('/SuperRating');
                this.nextbtn = false;
              }
            });
        }else{
          // alert('error');
        }
      },
      (err) => {  
          // alert('error');
      }
    );
  }

  nextGo(){
    this.router.navigateByUrl('/SuperRating');
  }
}
