import { Component } from '@angular/core';
import { TemplateNotasGenerales } from '../../../../shared/templates/workspace/notas-generales/template-notas-generales';

@Component({
      selector: 'page-notas-generales',
      imports: [TemplateNotasGenerales],
      template: `<template-notas-generales />`,
})
export default class PageNotasGenerales {}
