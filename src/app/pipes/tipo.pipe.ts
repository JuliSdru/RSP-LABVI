import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipo'
})
export class TipoPipe implements PipeTransform {

  transform(tipo : string): any {
    if(tipo == "calzado"){
      var str = tipo.replace('calzado', '<span style="color: red">calzado</span>');
    }
    else if(tipo == "abrigos"){
      var str = tipo.replace('/abrigos/g', '<span style="color: blue">*</span>');
    }
    else if(tipo == "ropa"){
      var str = tipo.replace('/ropa', '<span style="color: green">*</span>');
    }
    else if(tipo == "jean"){
      var str = tipo.replace('/jean', '<span style="color: blue">*</span>');
    }
    return str;
  }

}
