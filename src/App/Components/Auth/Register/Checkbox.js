import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

function Checkboxes() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <div>
      <Checkbox checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" /> 
    
    </div>
  );
}

export default Checkboxes;