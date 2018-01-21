import { Component } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AngularFireDatabase]
})
export class AppComponent {
  title = 'app';
  // description = 'Angular4-Firebase Demo';

  // itemValue = 'hello';
  // items: FirebaseListObservable<any[]>;

  // constructor(db: AngularFireDatabase) {
  //   this.items = db.list('/items');
  //   this.items.push({ content: this.itemValue });
  // }

  // onSubmit() {
  //   this.items.push({ content: this.itemValue });
  //   this.itemValue = '';
  // }
}
