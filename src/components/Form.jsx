import { styled } from 'styled-components';
import PropTypes from 'prop-types';

export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <StyledLabel>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
        />
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter phone number"
        />
        <StyledButton type="submit">Add contact</StyledButton>
      </StyledLabel>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const StyledLabel = styled.label`
  display: flex;
`;

const StyledButton = styled.button`
  cursor: pointer;
  margin: 10px auto 0;
  width: 100px;
`;
