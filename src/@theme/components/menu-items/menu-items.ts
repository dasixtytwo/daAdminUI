import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Navigation',
    main: [
      {
        state: 'dashboard',
        short_label: 'D',
        name: 'Dashboard',
        type: 'link',
        icon: 'icon-home'
      }
    ]
  },
  {
    label: 'Pages',
    main: [
      {
        state: 'auth',
        short_label: 'A',
        name: 'Authentication',
        type: 'sub',
        icon: 'icon-id-badge',
        children: [
          {
            state: 'login',
            name: 'Login'
          },
          {
            state: 'registration',
            name: 'Registration'
          },
          {
            state: 'forgot',
            name: 'Forgot Password'
          }
        ]
      },
      {
        state: 'user',
        short_label: 'U',
        name: 'User Profile',
        type: 'sub',
        icon: 'icon-user',
        children: [
          {
            state: 'profile',
            name: 'Profile'
          }
        ]
      },
      {
        state: 'email',
        short_label: 'E',
        name: 'Email',
        type: 'sub',
        icon: 'feather icon-email',
        children: [
          {
            state: 'email-compose',
            name: 'Compose Email'
          },
          {
            state: 'email-inbox',
            name: 'Inbox'
          },
          {
            state: 'email-read',
            name: 'Read Mail'
          },
          {
            state: 'email-template',
            name: 'Email Template',
            type: 'sub',
            children: [
              {
                state: 'email-welcome',
                name: 'Welcome Email',
                target: true
              },
              {
                state: 'email-reset-password',
                name: 'Reset Password',
                target: true
              },
              {
                state: 'email-newsletter',
                name: 'Newsletter Email',
                target: true
              },
              {
                state: 'app-launch',
                name: 'App Launch',
                target: true
              },
              {
                state: 'activation-code',
                name: 'Activation Code',
                target: true
              }
            ]
          }
        ]
      }
    ]
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
