import { Component } from '@angular/core';
import { TemplateCursos } from '../../../../shared/templates/workspace/cursos/template-cursos';

@Component({
      selector: 'page-cursos',
      imports: [TemplateCursos],
      template: `<template-cursos />`,
})
export default class PageCursos {}
