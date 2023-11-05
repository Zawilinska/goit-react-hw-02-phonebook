import PropTypes from 'prop-types';
import { styled } from 'styled-components';

export const ContactList = ({ contacts, onClick }) => {
  return (
    <StyleUl>
      {contacts.map(contact => (
        <StyledLi key={contact.id}>
          {contact.name}: {contact.number}
          <StyledButon onClick={() => onClick(contact.id)} type="button">
            Delete
          </StyledButon>
        </StyledLi>
      ))}
    </StyleUl>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

const StyleUl = styled.ul`
  list-style-type: none;
  padding: 10px;
  margin-bottom: 0;
`;

const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
`;

const StyledButon = styled.button`
  border: 2px solid red;

  &:hover {
    cursor: pointer;
  }
`;
