import { Component, computed, inject } from '@angular/core';
import { TemplateWorkspace } from '../../../components/templates/workspace/workspace';
import { AuthTokenManager } from '../../services/AuthTokenManager';

@Component({
      selector: 'page-workspace',
      imports: [TemplateWorkspace],
      template: `
            <!-- <template-workspace [rolUser]="rolUser()" /> -->
            <template-workspace />
      `,
})
export default class PageWorkspace {
      protected authTokenManager = inject(AuthTokenManager);
      private userTokenSignal = this.authTokenManager.userToken$;
      protected rolUser = computed(() => this.userTokenSignal()?.rol ?? '');
}
