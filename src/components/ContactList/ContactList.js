import { Section } from 'components/Section/Section.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <Section>
      <ul>
        <p>Contact list</p>
        {contacts[0] ? (
          contacts.map(contact => {
            const { id, name, number } = contact;
            return (
              <li key={id}>
                <p>
                  {name} : <span>{number}</span>
                </p>
                <button type="button" onClick={() => onDelete(id)}>
                  Remove contact
                </button>
              </li>
            );
          })
        ) : (
          <p>Your contacts list is empty</p>
        )}
      </ul>
    </Section>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
