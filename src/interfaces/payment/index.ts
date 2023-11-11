import { CustomerInterface } from 'interfaces/customer';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PaymentInterface {
  id?: string;
  amount: number;
  payment_date: any;
  payment_method: string;
  customer_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  customer?: CustomerInterface;
  user?: UserInterface;
  _count?: {};
}

export interface PaymentGetQueryInterface extends GetQueryInterface {
  id?: string;
  payment_method?: string;
  customer_id?: string;
  user_id?: string;
}
