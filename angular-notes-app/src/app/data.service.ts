import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import {Injectable} from '@angular/core';
import { ReplaySubject } from 'rxjs';
@Injectable()
export class DataService{
sendedData$:Observable<string>;
sendedData1$:Observable<string>;
subject = new ReplaySubject<string>();
private sendedDataSubject=new Subject<string>();
constructor()
{
    this.sendedData$=this.sendedDataSubject.asObservable();
    this.sendedData1$=this.subject.asObservable();
    
}

sendData1(data){
    this.subject.next(data);
   // console.log(`data`);
   // console.log(data);
   // console.log(`data`);
}

sendData(data){
    this.sendedDataSubject.next(data);
  //  console.log(`data`);
    //console.log(data);
   // console.log(`data`);
}

}