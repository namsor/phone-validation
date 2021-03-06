import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { VerifyService } from './../service/verify.service';
declare var $: any
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  resdata;
  res;
  pro = true;
  iserror = false;
  countriesData: any = '';
  flagImg = '';
  constructor(private VerifyService: VerifyService) { }
  form = new FormGroup({
    fname: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required),
    number: new FormControl('', Validators.required),
  });
  get fname() {
    return this.form.get('fname');
  }
  get lname() {
    return this.form.get('lname');
  }
  get number() {
    return this.form.get('number');
  }
  ngOnInit() {
  }

  loadCountry(code) {
    this.VerifyService.getCountry(code).subscribe(
      data => {
        console.log(data);
        if(data) {
          this.countriesData = data;
          this.flagImg = this.countriesData.flag;
        }
      },

      err => {

      }
    )
  }



  register() {
    if (this.form.valid) {
      console.log(this.form.value)
      this.VerifyService.get(this.form.value).subscribe(data => {
        console.log(data)
        this.resdata = data;
        this.pro = false;
        this.loadCountry(this.resdata.phoneCountryIso2Verified);
        if (data['internationalPhoneNumberVerified'] == null || data['verified'] == false) {
          this.iserror = true;
        } console.log(data);
        //       readOutLoud(data.body[0])
      }, error => {
        console.log(error);
        alert('Get API Is not working properly');
      });
    }
  }

}
