import React from 'react'

const MySelect = ({options, defVal, value, onChange}) => {
  return (
    <select
      value={value}
      onChange={ e => onChange(e.target.value)}
      >
      <option disabled value="">{defVal}</option>
      {options.map(opt => 
        <option key={opt.value} value={opt.value}>{opt.name}</option>
        )}
    </select>
    )
}

export default MySelect