import * as yup from 'yup';

export const troubleshootValidationSchema = yup.object().shape({
  issue_description: yup.string().required(),
  resolution: yup.string().required(),
  resolution_date: yup.date().required(),
  resolved_by: yup.string().nullable().required(),
  customer_id: yup.string().nullable().required(),
});
