import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';



export default function RadioButtonsGroup() {
  return (
    <FormControl> 
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel color='secondary'  value="female" control={<Radio />} label="Check payments" />
        <FormControlLabel  value="male" control={<Radio />} label="Cash on delivery " />
        <FormControlLabel  value="other" control={<Radio />} label="PayPal"/>
        
      </RadioGroup>
    </FormControl>
  );
}
