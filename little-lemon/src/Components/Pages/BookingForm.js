
import Header from '../Header';
import 'bootstrap/dist/css/bootstrap.min.css'; //Needed for boostrap
import { useFormik, Form, FormikProvider } from 'formik';
import { Button, Row } from 'react-bootstrap';
import {FormLabel,FormText, Form as FormBoostrap } from 'react-bootstrap';
import * as Yup from "yup";

const BookingForm = () => {
  
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    guests: Yup.number().required('Password is required')
  });

  const formik = useFormik({
    initialValues: {
      date: '',
      time: '',
      guests: '',
      occassion:"Ocassion"
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {

    }
  });
  

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  return (
    <>
    <Header/>
    <FormikProvider value={formik}>
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Row>
            <FormBoostrap.Control
                InputProps={{ style: { color: 'Black' } }}
                fullWidth
                focused
                color="omega"
                type="date"
                placeholder="date"
                {...getFieldProps('date')}
                value={formik.values.date}
                error={Boolean(touched.date && errors.date)}
                helperText={touched.date && errors.date}
              />
              <FormBoostrap.Control
                InputProps={{ style: { color: 'Black' } }}
                fullWidth
                focused
                color="omega"
                type="time"
                placeholder="5pm"
                {...getFieldProps('time')}
                value={formik.values.time}
                error={Boolean(touched.time && errors.time)}
                helperText={touched.time && errors.time}
              />
              <FormBoostrap.Control
                InputProps={{ style: { color: 'Black' } }}
                fullWidth
                focused
                color="omega"
                type="number"
                placeholder="5pm"
                {...getFieldProps('guest')}
                value={formik.values.guests}
                error={Boolean(touched.guests && errors.guests)}
                helperText={touched.guests && errors.guests}
              />  
              <FormBoostrap.Control
                InputProps={{ style: { color: 'Black' } }}
                fullWidth
                focused
                color="omega"
                type="string"
                placeholder="5pm"
                {...getFieldProps('occassion')}
                value={formik.values.occassion}
                error={Boolean(touched.occassion && errors.occassion)}
                helperText={touched.occassion && errors.occassion}
              />
            </Row>
              <Button>
                Submit
              </Button>
          </Form>
        </FormikProvider>
    </>
  );
};
export default BookingForm;
