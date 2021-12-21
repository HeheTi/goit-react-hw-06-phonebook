import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { connect } from 'react-redux';
import Input from '../../common/Input';
import { changeFilter } from '../../redux/contacts/contactsActions';

function Filter({ filter, onChangeFilter }) {
  const onChangeFilterValue = useCallback(
    e => {
      const value = e.target.value.trim();
      onChangeFilter(value);
    },
    [onChangeFilter],
  );

  return (
    <Input
      label="Find contacts by name"
      type="text"
      onChange={onChangeFilterValue}
      name="filter"
      value={filter}
    />
  );
}

Filter.propTypes = {
  onChangeFilter: PropTypes.func,
  filter: PropTypes.string,
};

const mapStateToProps = state => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: value => dispatch(changeFilter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
