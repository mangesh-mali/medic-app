import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashPipe'
})
export class DashPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(args);
    console.log(value);
    if (args[0] == "Hospital Earning") {
      return "$ " + value;
    }
    else {
      return value;
    }
  }

}
