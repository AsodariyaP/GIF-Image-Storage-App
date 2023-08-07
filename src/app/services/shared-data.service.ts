import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }

  private dataSubject = new BehaviorSubject<any>({});
  public data$ = this.dataSubject.asObservable();

  updateData(data: any): void {
    this.dataSubject.next(data);
  }
}
