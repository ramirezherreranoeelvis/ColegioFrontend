import { Component } from '@angular/core';
import { TemplateReportesIncidentes } from '../../../../shared/templates/workspace/reportes-incidentes/template-reportes-incidentes';

@Component({
      selector: 'page-reportes-incidentes',
      imports: [TemplateReportesIncidentes],
      template: `<template-reportes-incidentes />`,
})
export default class PageReportesIncidentes {}
