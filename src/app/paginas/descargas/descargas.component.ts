import { Component, OnInit, Input} from '@angular/core';
declare const require: any;
const jsPDF = require('jspdf');
require('jspdf-autotable');
import { ExportToCsv } from 'export-to-csv';

@Component({
  selector: 'app-descargas',
  templateUrl: './descargas.component.html',
  styleUrls: ['./descargas.component.css']
})
export class DescargasComponent implements OnInit {

  @Input() tabla: any[];

  constructor() { }

  ngOnInit(): void {
  }

  descargarPDF(){
    let pdf = new jsPDF('l', 'pt');
    pdf.autoTable({html : '#tablaProd'});
    pdf.save('lista.pdf');
  }

  descargarCSV(){
    // console.log(this.tabla);
    const options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'Tabla',
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
    };

    const csvExporter = new ExportToCsv(options);
    csvExporter.generateCsv(this.tabla);
  }

}
