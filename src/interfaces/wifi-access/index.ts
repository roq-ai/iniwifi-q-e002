import { CustomerInterface } from 'interfaces/customer';
import { GetQueryInterface } from 'interfaces';

export interface WifiAccessInterface {
  id?: string;
  ssid: string;
  password: string;
  expiry_date: any;
  customer_id: string;
  created_at?: any;
  updated_at?: any;

  customer?: CustomerInterface;
  _count?: {};
}

export interface WifiAccessGetQueryInterface extends GetQueryInterface {
  id?: string;
  ssid?: string;
  password?: string;
  customer_id?: string;
}
