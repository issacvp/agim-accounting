import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbAuthModule, NbEmailPassAuthProvider, NB_AUTH_TOKEN_CLASS, NbAuthJWTToken } from '@nebular/auth';
import { NbSecurityModule, NbRoleProvider } from '@nebular/security';
import { of as observableOf } from 'rxjs/observable/of';
import { getDeepFromObject } from '@nebular/auth/helpers';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { DataModule } from './data/data.module';
import { AnalyticsService } from './utils/analytics.service';
import { AuthGuard } from './utils/auth-guard.service';
import { RoleProvider } from './utils/role.provider';

const NB_CORE_PROVIDERS = [
  ...DataModule.forRoot().providers,
  ...NbAuthModule.forRoot({
    providers: {
      email: {
        service: NbEmailPassAuthProvider,
        config: {
          baseEndpoint: '',
          login: {
            alwaysFail: false,
            rememberMe: true,
            endpoint: '/api/auth/login',
            method: 'post',
            redirect: {
              success: '/pages/dashboard',
              failure: null,
            },
            defaultErrors: ['Login/Email combination is not correct, please try again.'],
            defaultMessages: ['You have been successfully logged in.'],
          },
          register: {
            alwaysFail: false,
            rememberMe: true,
            endpoint: '/api/auth/register',
            method: 'post',
            redirect: {
              success: '/',
              failure: null,
            },
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['You have been successfully registered.'],
          },
          logout: {
            alwaysFail: false,
            endpoint: '/api/auth/logout',
            method: 'delete',
            redirect: {
              success: '/',
              failure: null,
            },
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['You have been successfully logged out.'],
          },
          requestPass: {
            endpoint: '/api/auth/request-pass',
            method: 'post',
            redirect: {
              success: '/',
              failure: null,
            },
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['Reset password instructions have been sent to your email.'],
          },
          resetPass: {
            endpoint: '/api/auth/reset-pass',
            method: 'put',
            redirect: {
              success: '/',
              failure: null,
            },
            resetPasswordTokenKey: 'reset_password_token',
            defaultErrors: ['Something went wrong, please try again.'],
            defaultMessages: ['Your password has been successfully changed.'],
          },
          token: {
            key: 'data.token',
            getter: (module: string, res: HttpResponse<Object>) => getDeepFromObject(res.body,
              'data.token'),
          },
          errors: {
            key: 'data.errors',
            getter: (module: string, res: HttpErrorResponse) => getDeepFromObject(res.error,
              'data.errors',
              'Something went wrong, please try again.'),
          },
          messages: {
            key: 'data.messages',
            getter: (module: string, res: HttpResponse<Object>) => getDeepFromObject(res.body,
              'data.messages',
              'Something went wrong, please try again.'),
          },
        },
      },
    },
    forms: {
      login: {
        redirectDelay: 100,
        provider: 'email',
        rememberMe: true,
        showMessages: {
          success: true,
          error: true,
        },
      },
      register: {
        redirectDelay: 100,
        provider: 'email',
        showMessages: {
          success: true,
          error: true,
        },
        terms: true,
      },
      requestPassword: {
        redirectDelay: 100,
        provider: 'email',
        showMessages: {
          success: true,
          error: true,
        },
      },
      resetPassword: {
        redirectDelay: 100,
        provider: 'email',
        showMessages: {
          success: true,
          error: true,
        },
      },
      logout: {
        redirectDelay: 100,
        provider: 'email',
      },
      validation: {
        password: {
          required: true,
          minLength: 4,
          maxLength: 50,
        },
        email: {
          required: true,
        },
        fullName: {
          required: false,
          minLength: 4,
          maxLength: 50,
        },
      },
    },
  }).providers,
  NbSecurityModule.forRoot({
    accessControl: {
      guest: {
        view: '*',
      },
      user: {
        parent: 'guest',
        create: '*',
        edit: '*',
      },
      admin: {
        parent: 'user',
        remove: '*',
      }
    },
  }).providers,
  { provide: NB_AUTH_TOKEN_CLASS, useValue: NbAuthJWTToken },
  { provide: NbRoleProvider, useClass: RoleProvider },
  AnalyticsService,
  AuthGuard,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    NbAuthModule,
  ],
  declarations: [],
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    };
  }
}
