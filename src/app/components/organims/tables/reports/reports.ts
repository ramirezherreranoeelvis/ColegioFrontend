import { Component, input } from '@angular/core';
import { Report } from './report';
@Component({
      selector: 'table-reports',
      templateUrl: 'reports.component.html',
})
export class TableReports {
      reports = input<Report[]>([]);
}
