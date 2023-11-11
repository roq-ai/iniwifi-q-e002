import { UserInterface } from 'interfaces/user';
import { CustomerInterface } from 'interfaces/customer';
import { GetQueryInterface } from 'interfaces';

export interface TroubleshootInterface {
  id?: string;
  issue_description: string;
  resolution: string;
  resolved_by: string;
  customer_id: string;
  resolution_date: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  customer?: CustomerInterface;
  _count?: {};
}

export interface TroubleshootGetQueryInterface extends GetQueryInterface {
  id?: string;
  issue_description?: string;
  resolution?: string;
  resolved_by?: string;
  customer_id?: string;
}
