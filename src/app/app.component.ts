import { Component, OnInit } from '@angular/core';
import { DoctorService } from './doctor.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  users: any[] = [];
  data: any;
  constructor(
    protected doctorService: DoctorService
  ) {
  }

  ngOnInit() {
    this.doctorService.getUsers() 
    .subscribe(
      (data) => { // Success
      this.data = data;
        this.users = data[''];
      },
      (error) => {
        console.error(error);
      }
    );
  }
}



/*j
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/