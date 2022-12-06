import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

  productcode=""
  productname=""
  man_date=""
  exp_date=""
  

  constructor(private api:ApiService){}


  readValue=()=>
  {
    let data:any={"productcode":this.productcode,"productname":this.productname,"man_date":this.man_date,"exp_date":this.exp_date}
    console.log(data)
    
    this.api.addproducts(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success"){
          this.productcode=""
          this.productname=""
          this.man_date=""
          this.exp_date=""
        } else{
          alert("something went wrong")

        }
        
      }
    )
  }

}
