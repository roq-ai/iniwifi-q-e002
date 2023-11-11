import * as yup from 'yup';

export const wifiAccessValidationSchema = yup.object().shape({
  ssid: yup.string().required(),
  password: yup.string().required(),
  expiry_date: yup.date().required(),
  customer_id: yup.string().nullable().required(),
});
