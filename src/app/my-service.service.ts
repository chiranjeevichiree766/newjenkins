import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }
  getValue(): string {
    return 'Service Value'; // This method should be defined
  }
}
