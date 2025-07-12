import { Component } from '@angular/core';
import { TemplateHistorial } from '../../../../shared/templates/workspace/historial/template-historial';

@Component({
      selector: 'page-historial',
      imports: [TemplateHistorial],
      template: `<template-historial />`,
})
export default class PageHistorial {}
