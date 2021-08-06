import React from 'react';
import MuiTypography from '@material-ui/core/Typography';

const Typography = (props) => {
    const {
      text, // text goes here
      ...other
    } = props;
  

    return (
      <MuiTypography {...other}>
        {text}
      </MuiTypography>
    );
  };

  export default Typography