import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stock'
})
export class StockPipe implements PipeTransform {

  transform(stock : any): any {
    if(stock < 3){
      // stock = <span style="color: red">' + stock + '</span>;
    }
    return stock;
  }

}
