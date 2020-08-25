import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import { setNumberOfPeople } from '../../redux/listingPage/actions'

export const DropdownComponent = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  const { setNumberOfPeople, numberOfPeople } = props
  

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle color="primary" caret>
        {numberOfPeople ? numberOfPeople + ' People' : 'Number of Persons'}
        </DropdownToggle>
      <DropdownMenu>
        {[1,2,3,4,5].map(number => <DropdownItem onClick={() => setNumberOfPeople(number)}>{number}</DropdownItem>)}
      </DropdownMenu>
    </Dropdown>
  );
}

const mapStateToProps = state => ({
  numberOfPeople: state.listingPageReducer.numberOfPeople
})

const mapDispatchToProps = dispatch => ({
  setNumberOfPeople: payload => dispatch(setNumberOfPeople(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(DropdownComponent)
