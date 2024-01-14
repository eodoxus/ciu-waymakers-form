import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';
import { useState } from 'react';

import TextAreaField from '../../../components/TextAreaField';
import TextField from '../../../components/TextField';
import { createTicket } from '../helpers/api';

const INITIAL_VALUES = {
  account: '',
  subject: '',
};

const CreateTicketForm = ({ initialValues = INITIAL_VALUES }) => {
  const [error, setError] = useState();

  const onSubmit = async values => {
    const response = await createTicket(values);
    if (response.status === 'error') {
      setError(response.message);
    }
  };

  const formikProps = {
    initialValues,
    onSubmit,
  };

  return (
    <div className="card m-b-10">
      <div className="card-body">
        {error && <Alert variant="danger">{error}</Alert>}

        <Formik {...formikProps}>
          {({ handleSubmit, isValidating, isSubmitting, ...formikBag }) => (
            <Form onSubmit={handleSubmit}>
              <TextField
                name="account"
                label="Account"
                placeholder="Select your account"
                required
                {...formikBag}
              />

              <TextField
                name="subject"
                label="Subject"
                placeholder="How can we help?"
                required
                {...formikBag}
              />

              <TextAreaField
                name="description"
                label="Description"
                placeholder="Tell us a little about the issue"
                required
                {...formikBag}
              />

              <Button
                variant="primary"
                type="submit"
                disabled={isSubmitting || isValidating}
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreateTicketForm;
