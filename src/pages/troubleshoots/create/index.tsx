import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { troubleshootValidationSchema } from 'validationSchema/troubleshoots';
import { UserInterface } from 'interfaces/user';
import { CustomerInterface } from 'interfaces/customer';
import { TroubleshootInterface } from 'interfaces/troubleshoot';

function TroubleshootCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: TroubleshootInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.troubleshoot.create({ data: values as RoqTypes.troubleshoot });
      resetForm();
      router.push('/troubleshoots');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<TroubleshootInterface>({
    initialValues: {
      issue_description: '',
      resolution: '',
      resolution_date: new Date(new Date().toDateString()),
      resolved_by: (router.query.resolved_by as string) ?? null,
      customer_id: (router.query.customer_id as string) ?? null,
    },
    validationSchema: troubleshootValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Troubleshoots',
              link: '/troubleshoots',
            },
            {
              label: 'Create Troubleshoot',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Troubleshoot
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.issue_description}
            label={'Issue Description'}
            props={{
              name: 'issue_description',
              placeholder: 'Issue Description',
              value: formik.values?.issue_description,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.resolution}
            label={'Resolution'}
            props={{
              name: 'resolution',
              placeholder: 'Resolution',
              value: formik.values?.resolution,
              onChange: formik.handleChange,
            }}
          />

          <FormControl id="resolution_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Resolution Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.resolution_date ? new Date(formik.values?.resolution_date) : null}
              onChange={(value: Date) => formik.setFieldValue('resolution_date', value)}
            />
          </FormControl>
          <AsyncSelect<UserInterface>
            formik={formik}
            name={'resolved_by'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={() => roqClient.user.findManyWithCount({})}
            labelField={'email'}
          />
          <AsyncSelect<CustomerInterface>
            formik={formik}
            name={'customer_id'}
            label={'Select Customer'}
            placeholder={'Select Customer'}
            fetcher={() => roqClient.customer.findManyWithCount({})}
            labelField={'email'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/troubleshoots')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'troubleshoot',
    operation: AccessOperationEnum.CREATE,
  }),
)(TroubleshootCreatePage);
