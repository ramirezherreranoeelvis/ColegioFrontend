import { Component } from '@angular/core';
import { TemplateWorkspace } from '../../shared/templates/workspace/template-workspace';

@Component({
      selector: 'page-workspace',
      imports: [TemplateWorkspace],
      template: `<template-workspace />`,
})
export default class PageWorkspace {}
