export interface PathVariable {
  key: string;
  type: string;
  value: null;
  isRequierd: boolean;
}

export interface Operation {
  operationKey: string;
  operationLabel: string;
  api: string;
  method: string;
  pathVariables: PathVariable[];
  params: any[];
}

export interface Service {
  serviceKey: string;
  serviceLabel: string;
  operations: Operation[];
}

export const SERVICE_MANAGEMENT = [
  {
    serviceKey: 'AdUserManagementResource',
    serviceLabel: 'AD User Management',
    operations: [
      {
        operationKey: 'adSalesUsers',
        operationLabel: 'AD SALES Users',
        api: '/api/ad-management/sales-users',
        method: 'GET',
        pathVariables: [],
        params: [],
      },
      {
        operationKey: 'adCstUsers',
        operationLabel: 'AD CST Users',
        api: '/api/ad-management/cst-users',
        method: 'GET',
        pathVariables: [],
        params: [],
      },
      {
        operationKey: 'adErpAdminUsers',
        operationLabel: 'AD ERP Admin Users',
        api: '/api/ad-management/erp-admin-users',
        method: 'GET',
        pathVariables: [],
        params: [],
      },
      {
        operationKey: 'salesUsersSynchronization',
        operationLabel: 'synchronization SALES Users',
        api: '/api/ad-management/synchronization/sales-users',
        method: 'GET',
        pathVariables: [],
        params: [],
      },
      {
        operationKey: 'adRolffiUsers',
        operationLabel: 'AD ROLFFI Users',
        api: '/api/ad-management/rolffi-users',
        method: 'GET',
        pathVariables: [],
        params: [],
      },
      {
        operationKey: 'adOrderHelperUsers',
        operationLabel: 'AD Order Helper Users',
        api: '/api/ad-management/order-helper-users',
        method: 'GET',
        pathVariables: [],
        params: [],
      },
      {
        operationKey: 'ldapUsersSynchronization',
        operationLabel: 'Sync LDAP Users',
        api: '/api/ldap-user/sync-ldap-users',
        method: 'GET',
        pathVariables: [],
        params: [],
      },
    ],
  },
  {
    serviceKey: 'AutomaticReplenishmentGeneration',
    serviceLabel: 'Automatic Replenishment Generation',
    operations: [
      {
        operationKey: 'generateAutomaticReplenishment',
        operationLabel: 'Generate Automatic Replenishment',
        api: '/api/service/automatic-replenishment',
        method: 'GET',
        pathVariables: [],
        params: [],
      },
      {
        operationKey: 'generateAutomaticReplenishmentWithUpdatedPriorities',
        operationLabel: 'Generate Automatic Replenishment (Updated Priorities)',
        api: '/api/service/automatic-replenishment/priorities-update',
        method: 'GET',
        pathVariables: [],
        params: [],
      },
    ],
  },
  {
    serviceKey: 'CacheResource',
    serviceLabel: 'Cache Service',
    operations: [
      {
        operationKey: 'Clear All Cache',
        operationLabel: 'clearAllCache',
        api: '/api/cache/clear-all',
        method: 'GET',
        pathVariables: [],
        params: [],
      },
      {
        operationKey: 'clearCache',
        operationLabel: 'Clear cache',
        api: '/api/cache/clear/{cacheName}',
        method: 'GET',
        pathVariables: [
          {
            key: 'cacheName',
            type: 'string',
            value: null,
            isRequierd: true,
          },
        ],
        params: [],
      },
      {
        operationKey: 'cacheStatus',
        operationLabel: 'Cache Status',
        api: '/api/cache/status',
        method: 'GET',
        pathVariables: [],
        params: [],
      },
      {
        operationKey: 'enableCache',
        operationLabel: 'Enable Cache',
        api: '/api/cache/enable',
        method: 'GET',
        pathVariables: [],
        params: [],
      },
      {
        operationKey: 'disableCache',
        operationLabel: 'Disable Cache',
        api: '/api/cache/disable',
        method: 'GET',
        pathVariables: [],
        params: [],
      },
    ],
  },
  {
    serviceKey: 'CollectionImagesZipFileGeneration',
    serviceLabel: 'Automatic Replenishment Generation',
    operations: [
      {
        operationKey: 'generateAndSaveCollectionImagesZipFile',
        operationLabel: 'Generate And Save Collection Images ZIP',
        api: '/api/collection-images/generate-zip-file/',
        method: 'GET',
        pathVariables: [
          {
            key: 'brand',
            type: 'string',
            value: null,
            isRequierd: true,
          },
        ],
        params: [],
      },
      {
        operationKey: 'generateAndSaveCollectionImagesZipFileBySeason',
        operationLabel: 'Generate And Save Collection Images ZIP By Season',
        api: '/api/collection-images/generate-zip-file/',
        method: 'GET',
        pathVariables: [
          {
            key: 'brand',
            type: 'string',
            value: null,
            isRequierd: true,
          },
          {
            key: 'seasonNumber',
            type: 'string',
            value: null,
            isRequierd: true,
          },
        ],
        params: [],
      },
    ],
  },
  {
    serviceKey: 'ESBInboundConnectivityResource',
    serviceLabel: 'ESB Inbound Connectivity',
    operations: [
      {
        operationKey: 'consumerStatus',
        operationLabel: 'Get Consumer Status',
        api: '/api/esb-connectivity/consumer-status',
        method: 'GET',
        pathVariables: [],
        params: [],
      },
      {
        operationKey: 'startConsumer',
        operationLabel: 'Start Consumer',
        api: '/api/esb-connectivity/start-consumer',
        method: 'GET',
        pathVariables: [],
        params: [],
      },
      {
        operationKey: 'stopConsumer',
        operationLabel: 'Stop Consumer',
        api: '/api/esb-connectivity/stop-consumer',
        method: 'GET',
        pathVariables: [],
        params: [],
      },
    ],
  },
  {
    serviceKey: 'ESBOutboundConnectivityResource',
    serviceLabel: 'ESB Outbound Connectivity',
    operations: [
      {
        operationKey: 'producerStatus',
        operationLabel: 'Get Producer status',
        api: '/api/esb-connectivity/producer-status',
        method: 'GET',
        pathVariables: [],
        params: [],
      },
      {
        operationKey: 'sendPendingOutboundMessages',
        operationLabel: 'Send Pending Outbound Messages',
        api: '/api/esb-connectivity/send-pending-outbound-messages',
        method: 'GET',
        pathVariables: [],
        params: [],
      },
      {
        operationKey: 'startProducer',
        operationLabel: 'Start Producer',
        api: '/api/esb-connectivity/start-producer',
        method: 'GET',
        pathVariables: [],
        params: [],
      },
      {
        operationKey: 'stopProducer',
        operationLabel: 'Stop Producer',
        api: '/api/esb-connectivity/stop-producer',
        method: 'GET',
        pathVariables: [],
        params: [],
      },
    ],
  },
  {
    serviceKey: 'ETLUsersResource',
    serviceLabel: 'ETL Users',
    operations: [
      {
        operationKey: 'm3rb2badmUsers',
        operationLabel: 'Sync m3rb2badm Users',
        api: '/api/etl-m3-user/sync-m3rb2badm-users',
        method: 'GET',
        pathVariables: [],
        params: [],
      },
      {
        operationKey: 'm3rcstusrUsers',
        operationLabel: 'Sync m3rcstusr Users',
        api: '/api/etl-m3-user/sync-m3rcstusr-users',
        method: 'GET',
        pathVariables: [],
        params: [],
      },
      {
        operationKey: 'm3rgebusrUsers',
        operationLabel: 'Sync m3rgebusr Users',
        api: '/api/etl-m3-user/sync-m3rgebusr-users',
        method: 'GET',
        pathVariables: [],
        params: [],
      },
      {
        operationKey: 'allM3rgebusrUsers',
        operationLabel: 'Sync All m3rgebusr Users',
        api: '/api/etl-m3-user/sync-all-m3rgebusr-users',
        method: 'GET',
        pathVariables: [],
        params: [],
      },
      {
        operationKey: 'allM3rolffiUsers',
        operationLabel: 'Sync ALl m3rolffi Users',
        api: '/api/etl-m3-user/sync-all-m3rolffi-users',
        method: 'GET',
        pathVariables: [],
        params: [],
      },
      {
        operationKey: 'cleanupM3rolffiUserRights',
        operationLabel: 'Cleanup m3rolffi user rights',
        api: '/api/etl-m3-user/cleanup-m3rolffi-user-rights',
        method: 'GET',
        pathVariables: [],
        params: [],
      },
    ],
  },
  {
    serviceKey: 'NodeAvailabilityResource',
    serviceLabel: 'Node Availability',
    operations: [
      {
        operationKey: 'nodeAvailabilityStatus',
        operationLabel: 'Get Node Availability Status',
        api: '/api/node-availability/status',
        method: 'GET',
        pathVariables: [],
        params: [],
      },
      {
        operationKey: 'enableNodeAvailability',
        operationLabel: 'Enable Node Availability',
        api: '/api/node-availability/enable',
        method: 'GET',
        pathVariables: [],
        params: [],
      },
      {
        operationKey: 'disableNodeAvailability',
        operationLabel: 'Disable Node Availability',
        api: '/api/node-availability/disable',
        method: 'GET',
        pathVariables: [],
        params: [],
      },
    ],
  },
  {
    serviceKey: 'OrderSheetGenerationResource',
    serviceLabel: 'Generate Order Sheet Resource',
    operations: [
      {
        operationKey: 'uploadOrderSheet',
        operationLabel: 'Upload Order Sheet',
        api: '/service/eprom/upload-order-sheet',
        method: 'POST',
        pathVariables: [],
        params: [
          {
            key: 'country',
            type: 'string',
            value: null,
            isRequierd: true,
          },
          {
            key: 'collection',
            type: 'string',
            value: null,
            isRequierd: false,
          },
          {
            key: 'campaign',
            type: 'long',
            value: null,
            isRequierd: false,
          },
          {
            key: 'brand',
            type: 'string',
            value: null,
            isRequierd: false,
          },
        ],
      },
      {
        operationKey: 'generateOrderSheets',
        operationLabel: 'Generate Order Sheets',
        api: '/service/eprom/generate-order-sheets',
        method: 'POST',
        pathVariables: [],
        params: [
          {
            key: 'collection',
            type: 'string',
            value: null,
            isRequierd: false,
          },
          {
            key: 'campaign',
            type: 'long',
            value: null,
            isRequierd: false,
          },
        ],
      },
    ],
  },
  {
    serviceKey: 'PricatGenerationResource',
    serviceLabel: 'Pricat Generation',
    operations: [
      {
        operationKey: 'pricatGeneration',
        operationLabel: 'Sync m3rb2badm Users',
        api: '/api/service/pricat/',
        method: 'GET',
        pathVariables: [
          {
            key: 'season',
            type: 'string',
            value: null,
            isRequierd: true,
          },
        ],
        params: [],
      },
    ],
  },
  {
    serviceKey: 'SalesStructureResource',
    serviceLabel: 'Sales Structure',
    operations: [
      {
        operationKey: 'retrieveSalesStructureHierarchy',
        operationLabel: 'Retrieve Sales Structure Hierarchy (flattened)',
        api: '/api/sales-structure-flattened-hierarchy',
        method: 'GET',
        pathVariables: [],
        params: [],
      },
    ],
  },
  {
    serviceKey: 'SyncMeasurementsResource',
    serviceLabel: 'Sync Measurements',
    operations: [
      {
        operationKey: 'syncMeasurements',
        operationLabel: 'Sync Measurements',
        api: '/api/measure/sync-measurements',
        method: 'GET',
        pathVariables: [],
        params: [],
      },
      {
        operationKey: 'syncMeasurementsSeason',
        operationLabel: 'Sync Measurements By Season',
        api: '/api/measure/sync-measurements/season',
        method: 'GET',
        pathVariables: [],
        params: [
          {
            key: 'seasonNumber',
            type: 'string',
            value: null,
            isRequierd: true,
          },
        ],
      },
      {
        operationKey: 'syncMeasurementsArticle',
        operationLabel: 'Sync Measurements By Article',
        api: '/api/measure/sync-measurements/article',
        method: 'GET',
        pathVariables: [],
        params: [
          {
            key: 'articleNumber',
            type: 'string',
            value: null,
            isRequierd: true,
          },
        ],
      },
      {
        operationKey: 'syncMeasurementsSeasonArticle',
        operationLabel: 'Sync Measurements By Season and Article',
        api: '/api/measure/sync-measurements/season/article',
        method: 'GET',
        pathVariables: [],
        params: [
          {
            key: 'articleNumber',
            type: 'string',
            value: null,
            isRequierd: true,
          },
          {
            key: 'seasonNumber',
            type: 'string',
            value: null,
            isRequierd: true,
          },
        ],
      },
      {
        operationKey: 'syncMeasurementsSeasonList',
        operationLabel: 'Sync Measurements By Season List',
        api: '/api/measure/sync-measurements/season-list',
        method: 'GET',
        pathVariables: [],
        params: [
          {
            key: 'seasonNumber',
            type: 'string[]',
            value: null,
            isRequierd: true,
          },
        ],
      },
    ],
  },
  {
    serviceKey: 'UserManagementResource',
    serviceLabel: 'User Management (Master users)',
    operations: [
      {
        operationKey: 'masterLoginsReset',
        operationLabel: 'Reset Master Logins',
        api: '/api/user-management/reset-master-logins',
        method: 'GET',
        pathVariables: [],
        params: [],
      },
      {
        operationKey: 'masterActivationKeysReset',
        operationLabel: 'Reset Master Activation Keys',
        api: '/api/user-management/reset-master-activation-keys',
        method: 'GET',
        pathVariables: [],
        params: [],
      },
    ],
  },
];
