import { Component, input } from '@angular/core';
import { TemplateResource } from '../../../../../shared/templates/workspace/courses/resource/template-resource';

@Component({
      selector: 'page-resource',
      imports: [TemplateResource],
      template: `<template-resource />`,
})
export default class PageResource {
      code = input('');
}
