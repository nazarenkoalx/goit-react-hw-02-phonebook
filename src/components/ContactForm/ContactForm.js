import { Formik, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { Form, SubmitButton } from './ContactForm.styled';
import { object, string, number } from 'yup';
import PropTypes from 'prop-types';
import { Section } from 'components/Section/Section.styled';

let ContactsSchema = object({
  name: string().required(),
  number: number().required().positive().integer(),
});

export const ContactForm = ({ onSubmit }) => (
  <Section>
    <h1>Contact Book</h1>
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, actions) => {
        onSubmit({ ...values, id: nanoid() });
        actions.resetForm();
      }}
      validationSchema={ContactsSchema}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field
          type="text"
          id={nanoid()}
          name="name"
          placeholder="Joe Biden"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
        <ErrorMessage name="name" component="span" />
        <label htmlFor="number">Phone</label>
        <Field
          type="tel"
          id={nanoid()}
          name="number"
          placeholder="101"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        />
        <ErrorMessage name="number" component="span" />
        <SubmitButton type="submit">Add contact</SubmitButton>
      </Form>
    </Formik>
  </Section>
);

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
