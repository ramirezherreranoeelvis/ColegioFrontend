import { Component } from '@angular/core';
import { TemplateLogin } from '../../shared/templates/login/template-login';

@Component({
      selector: 'page-login',
      imports: [TemplateLogin],
      template: `<template-login />`,
})
export default class PageLogin {}
