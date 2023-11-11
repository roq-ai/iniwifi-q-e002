import { PaymentInterface } from 'interfaces/payment';
import { TroubleshootInterface } from 'interfaces/troubleshoot';
import { WifiAccessInterface } from 'interfaces/wifi-access';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CustomerInterface {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  address: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  payment?: PaymentInterface[];
  troubleshoot?: TroubleshootInterface[];
  wifi_access?: WifiAccessInterface[];
  user?: UserInterface;
  _count?: {
    payment?: number;
    troubleshoot?: number;
    wifi_access?: number;
  };
}

export interface CustomerGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone_number?: string;
  address?: string;
  user_id?: string;
}
