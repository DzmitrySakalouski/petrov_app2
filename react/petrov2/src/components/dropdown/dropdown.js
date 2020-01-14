import React from 'react';
import "./dropdown.scss";

export const Dropdown = props => {
    const {dropdownItems, className, onTypeChange} = props;
    console.log('IN DROPc =>', dropdownItems)
    return (
        <select required onChange={onTypeChange} className={className}>
            {
                dropdownItems.map((dropdownItem, index) => {
                    const { value, label, selected } = dropdownItem;
                    console.log(selected)

                    return (
                        <option selected={selected} value={value}>{label}</option>
                    )
                })
            }
        </select>
    );
}