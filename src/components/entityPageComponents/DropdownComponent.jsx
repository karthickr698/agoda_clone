import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import { setNumberOfPeople } from '../../redux/listingPage/actions'

export const DropdownComponent = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle color="primary" caret>
        Number of Persons
        </DropdownToggle>
      <DropdownMenu>
        {[1,2,3,4,5].map(number => <DropdownItem onClick={() => props.setNumberOfPeople(number)}>{number}</DropdownItem>)}
      </DropdownMenu>
    </Dropdown>
  );
}

const mapDispatchToProps = dispatch => ({
  setNumberOfPeople: payload => dispatch(setNumberOfPeople(payload))
})

export default connect(null, mapDispatchToProps)(DropdownComponent)
