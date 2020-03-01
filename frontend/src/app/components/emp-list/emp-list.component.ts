import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';
import jsPDF from 'jspdf'


@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  Employee:Array<any>;
  totalRec : number;
  page: number = 1;
constructor(private apiService : ApiService) {
    this.readEmployee();
    this.Employee=new Array<any>();
   }

  ngOnInit() {
    this.readEmployee()
  }

  makePdf(name,email,designation){
    console.log(name)
    let doc = new jsPDF();
    doc.text(20,20,"name"+"=>"+name+" , "+"email"+"=>"+email+" , "+"designation"+"=>"+designation);
    doc.save('Test.pdf');
  }

  readEmployee(){
    this.apiService.getEmployees().subscribe((data:any[]) => {
      console.log('data',typeof data,data.length)
     this.Employee = data;
     this.totalRec = this.Employee.length;
     console.log(this.totalRec);
     console.log(this.page);
    })    
  }

}
