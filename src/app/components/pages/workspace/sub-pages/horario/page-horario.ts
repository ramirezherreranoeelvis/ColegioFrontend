import { Component } from '@angular/core';
import { TemplateHorario } from '../../../../shared/templates/workspace/horario/template-horario';

@Component({
      selector: 'page-horario',
      imports: [TemplateHorario],
      template: `<template-horario />`,
})
export default class PageHorario {}
