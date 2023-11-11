import * as yup from 'yup';

export const paymentValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  payment_date: yup.date().required(),
  payment_method: yup.string().required(),
  customer_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
