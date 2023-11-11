interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Team Member', 'Customer Service Representative', 'Payment Manager'],
  tenantName: 'Organization',
  applicationName: 'INIWIFI.Q',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage organization information',
    'Manage user accounts',
    'Manage customer information',
    'Manage payment transactions',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/1a69c444-a067-4943-8fdb-262ead49675d',
};
