import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe',
  standalone: true
})
export class CustompipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
