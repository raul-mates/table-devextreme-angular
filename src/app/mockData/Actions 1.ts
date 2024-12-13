import { Action } from '../shared/interfaces';

export const ACTIONS: Record<string, Action> = {
  APPROVE: {
    value: 'APPROVE',
    label: 'APPROVE ORDER',
    icon: 'fa-solid fa-stamp',
  },
  DELETE: {
    value: 'DELETE',
    label: 'DELETE ORDER',
    icon: 'fa-solid fa-trash-alt',
  },
  EDIT: {
    value: 'EDIT',
    label: 'EDIT ORDER',
    icon: 'fa-solid fa-pencil-alt',
  },
  EDIT_QEM_ORDER: {
    value: 'EDIT_QEM_ORDER',
    label: 'EDIT QEM',
    icon: 'fa-solid fa-pencil-alt',
  },
  EXPORT: {
    value: 'EXPORT',
    label: 'EXPORT',
    icon: 'fa-solid fa-download',
  },
  INSIGHTS: {
    value: 'INSIGHTS',
    label: 'INSIGHTS',
    icon: 'fa-solid fa-chart-simple',
  },
  NEW_ORDER: {
    value: 'NEW_ORDER',
    label: 'START ORDER',
    icon: 'fa-solid fa-plus',
  },
  REJECT: {
    value: 'REJECT',
    label: 'REJECT ORDER',
    icon: 'fa-solid fa-times-circle',
  },
  START_FREE_ORDER: {
    value: 'START_FREE_ORDER',
    label: 'NEW FREE ORDER',
    icon: 'fa-solid fa-play-circle',
  },
  START_MENU_ORDER: {
    value: 'START_MENU_ORDER',
    label: 'NEW MENU ORDER',
    icon: 'fa-solid fa-play-circle',
  },
  START_QEM_ORDER: {
    value: 'START_QEM_ORDER',
    label: 'START QEM',
    icon: 'fa-solid fa-play-circle',
  },
  SUBMIT: {
    value: 'SUBMIT',
    label: 'SUBMIT ORDER',
    icon: 'fa-solid fa-paper-plane',
  },
  VIEW: {
    value: 'VIEW',
    label: 'VIEW ORDER',
    icon: 'fa-solid fa-eye',
  },
  VIEW_QEM_ORDER: {
    value: 'VIEW_QEM_ORDER',
    label: 'VIEW QEM',
    icon: 'fa-solid fa-eye',
  },
};
