import { Component } from '@angular/core';



@Component({
  selector: 'page-education-support',
  templateUrl: 'education-support.html'
})
export class EducationAndSupportPage {

  segment = 'education';
  tabDisplayFlag = false;
  
  constructor() {
    this.updateEducation();
  }
  updateEducation(){
    if(this.segment === 'sports'){
    // service call to get sport data
      this.tabDisplayFlag = true;
    }else{
    // service call to get Education Data
      this.tabDisplayFlag = false;
    }
  }

}
