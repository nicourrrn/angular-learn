import { Injectable } from "@angular/core";


@Injectable({providedIn: 'root'})
export class Loggen {
  writeCount(counter: number) {
    console.log(counter);
    return counter % 12;
  }
}
