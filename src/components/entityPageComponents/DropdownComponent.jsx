import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const DropdownComponent = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle color="primary" caret>
        Number of Persons
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>1</DropdownItem>
        <DropdownItem>2</DropdownItem>
        <DropdownItem>3</DropdownItem>
        <DropdownItem>4</DropdownItem>
        <DropdownItem>5</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default DropdownComponent;