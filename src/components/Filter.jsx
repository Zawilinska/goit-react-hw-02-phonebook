import PropTypes from 'prop-types';
import { styled } from 'styled-components';

export const Filter = ({ onChange, filter }) => {
  return (
    <label style={{ color: 'red' }} onChange={onChange}>
      Find contacts by name
      <StyledInput
        name="filter"
        type="text"
        placeholder="Search by name"
        filter={filter}
      />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

const StyledInput = styled.input`
  margin-left: 10px;
`;
