import { Section } from 'components/Section/Section.styled';
import { Wrapper } from 'components/Wrapper/Wrapper.styled';
import PropTypes from 'prop-types';
import { Input } from './Filter.styled';

export const Filter = ({ onChange, contacts }) => {
  const disabled = contacts[0] ? false : true;
  return (
    <Section>
      <Wrapper>
        <label htmlFor="filter">Search contacts by name</label>
        <Input name="filter" onChange={onChange} disabled={disabled}></Input>
      </Wrapper>
    </Section>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
