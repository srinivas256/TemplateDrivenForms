import { Component } from '@angular/core';
import { User} from './user';
import { UpdateUserService} from './update-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 topics = ["Angular", "React", "Vue"];
 selectedTopic = false;
 errorMessage="";
userModel = new User('Rob', 'rob@test.com', 5567756, 'default', 'morning', true);
constructor( private _updateUser:UpdateUserService ){}

userData(){
  this._updateUser.updateServer(this.userModel)
 .subscribe( data => console.log(data),
      error => this.errorMessage= error.message)
  //console.log(this.userModel);
}

validateSelect(ctopic){
   if(ctopic === 'default'){
     this.selectedTopic = false;
   }
   else{
    this.selectedTopic = true;
   }
}


}
