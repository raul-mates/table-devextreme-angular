import { ACTIONS } from '../mockData/Actions 1';

export interface TableDataInterface {
  customerNumber: string;
  customerId: number;
  customerName: string;
  posType: string;
  posTypeIdentifier: string;
  city: string;
  parentCustomerNumber: string;
  orderId: number | null;
  orderStatus: string;
  orderNumber: string | null;
  orderPieces: number;
  salesPrice: number;
  planOrderValue: number | null;
  actualOrderValue: number;
  actualVsPlanPercentage: number | null;
  actualVsPlanAbsoluteDifference: number | null;
  currency: string;
  orderType: string;
  collection: string;
  brand: string;
  country: string;
  street: string;
  zipCode: string;
  lastModifiedAt: Date | string | null;
  lastModifiedBy: string | null;
  orderPiecesPreviousYear: number | null;
  orderValuePreviousYear: number;
  orderValueBudgetRelevant: number | null;
  orderValueOnTop: number | null;
  actualVsPreviousYearPercentage: number | null;
  actualVsPreviousYearAbsoluteDifference: number | null;
  menuSharePercentage: number | null;
  colorSharePercentage: number | null;
  designDepartmentSharePercentage: number | null;
  qrShare: number | null;
  qrSharePercentage: number | null;
  rejectReason: string | null;
  campaignId: string | null | number;
  actions: Array<keyof typeof ACTIONS>;
  containsCancelledItems: boolean;
  recommendationId: string | null;
  districtManager: string;
  posTypeValue: string;
}

export interface SummaryInfo {
  value: number;
  summaryProcess?: string;
}

export interface TooltipInfo {
  argumentText: string;
  value: number;
}

export interface PieChartDataInterface {
  status: string;
  totalValue: number;
  salesPrice: number;
  orders: TableDataInterface[];
  count: number;
}

export interface ChartData {
  range: string;
  ordersCount: number;
  orders: OrderSummary[];
}

export interface OrderSummary {
  orderId: number | null;
  customerName: string;
  orderPieces: number;
}

export interface Action {
  value: string;
  label: string;
  icon: string;
}

export interface Environment {
  name: string;
  IP: string;
}
