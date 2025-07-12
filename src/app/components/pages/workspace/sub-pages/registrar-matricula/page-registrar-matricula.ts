import { Component } from '@angular/core';
import { TemplateRegistrarMatricula } from '../../../../shared/templates/workspace/registrar-matricula/template-registrar-matricula';

@Component({
      selector: 'page-registrar-matricula',
      imports: [TemplateRegistrarMatricula],
      template: `<template-registrar-matricula />`,
})
export default class PageRegistrarMatricula {}
