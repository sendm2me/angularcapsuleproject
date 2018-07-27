import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
