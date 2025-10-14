import { Component, input } from '@angular/core';
import { TemplateResource } from '../../../../../../../components/templates/workspace/courses/resource/resource';

@Component({
      selector: 'page-resource',
      imports: [TemplateResource],
      template: `<template-resource />`,
})
export default class PageResource {
      code = input('');
}
