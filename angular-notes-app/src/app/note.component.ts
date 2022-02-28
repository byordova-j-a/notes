import { Component,OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {DataService} from './data.service';

@Component({
  selector: 'note-comp',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent{
 text:string[];
 id: any;
 textarray:string[];
 subsctiption1:Subscription;
 subsctiption2:Subscription;
 private routeSubscription:Subscription;

 constructor(private route: ActivatedRoute,private dataservice:DataService){
 }

 ngOnInit(){
  this.subsctiption1= this.dataservice.sendedData1$.subscribe((data)=>{
    this.textarray=data.split(/\n/);
  }); 

  this.subsctiption1.unsubscribe();
  
  this.subsctiption2=this.dataservice.sendedData$.subscribe((data)=>{
    this.textarray=data.split(/\n/);
  });
 
   this.routeSubscription=this.route.params.subscribe(params=>{
    this.id=params['id'];
    this.text=this.textarray
  });
 }

 ngOnDestroy(){
  this.subsctiption2.unsubscribe();
  this.routeSubscription.unsubscribe();
 }
}
