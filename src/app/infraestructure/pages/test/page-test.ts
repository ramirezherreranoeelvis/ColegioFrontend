import { Component } from '@angular/core';
import { TemplateTest } from '../../../components/templates/test/test';

@Component({
      selector: 'page-test',
      imports: [TemplateTest],
      template: `<template-test />`,
})
export default class PageTest {}
