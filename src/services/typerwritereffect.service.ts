import { Injectable } from '@angular/core';
import { concat, from, interval, of } from 'rxjs';
import {
  concatMap,
  delay,
  ignoreElements,
  map,
  repeat,
  take,
} from 'rxjs/operators';

interface TypeParams {
  word: string;
  speed: number;
  backwards?: boolean;
}

@Injectable({
    providedIn: 'root',
  })
  export class TypewriterEffectService {
    private type( word : String, speed : number ) {
      return interval(speed).pipe(map((x) => word.substring(0, x + 1)), take(word.length));
    }
  
    getTypewriterEffect(word: string) {
      return concat(
        this.type( word, 1000 ),
        of('').pipe(delay(3000), ignoreElements())
      );
    }
  }
