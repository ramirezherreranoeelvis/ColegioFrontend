import { Component, computed, inject, signal } from '@angular/core';
import { TemplateWorkspace } from '../../shared/templates/workspace/template-workspace';
import { AuthTokenManager } from '../../../infrastructure/services/AuthTokenManager';

@Component({
      selector: 'page-workspace',
      imports: [TemplateWorkspace],
      template: `<template-workspace [rolUser]="rolUser()" />`,
})
export default class PageWorkspace {
      protected authTokenManager = inject(AuthTokenManager);
      private userTokenSignal = this.authTokenManager.userToken$;
      protected rolUser = computed(() => this.userTokenSignal()?.rol ?? '');
}
