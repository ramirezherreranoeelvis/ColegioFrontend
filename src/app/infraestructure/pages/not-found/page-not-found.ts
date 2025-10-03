import { Component } from '@angular/core';
import { TemplateNotFound } from '../../../components/templates/not-found/not-found';

@Component({
      selector: 'page-not-found',
      imports: [TemplateNotFound],
      template: `<template-not-found />`,
})
export default class PageNotFound {}
