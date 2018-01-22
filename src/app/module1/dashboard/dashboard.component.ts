import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import 'rxjs/add/operator/first';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [AngularFireDatabase]
})
export class DashboardComponent implements OnInit {
  todos$: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase) { }

  ngOnInit() {
    // this.todos$ = this.af.list('/todos', {
    //   query: {
    //     limitToFirst: 3,

    //   }
    // });
    // this.addTodo('f1');
    // this.addTodo('fff5f5');
    // this.addTodo('vvdv');
    // this.addTodo('d');
    // this.addTodo('dvdvdvsd');
    // this.deleteTodo('f1');
    // this.getvalues();
  }

  // addTodo(value: string): void {
  //   this.todos$.push({ content: value, done: false });
  // }
  // deleteTodo(todo: any): void {
  //   this.af.object('/todos/' + todo.$key).remove();
  // }

  // toggleDone(todo: any): void {
  //   this.af.object('/todos/' + todo.$key)
  //     .update({ content: todo.content, done: !todo.done });
  // }
  // getvalues(): void {
  //   const v = this.af.list('/users/email', {
  //     query: {
  //       orderByChild: 'email',
  //       equalTo: true
  //     }
  //   }).first();
  //   console.log('v', v );

  // }

  // updateTodo(todo: any, newValue: string): void {
  //   // ...
  // }
  // updateTodo2(todo: any, newValue: string): void {
  //   this.af.object('/todos/' + todo.$key)
  //     .update({ content: newValue, done: todo.done });
  // }

}
