import React from 'react';
import Button from '@material-ui/core/Button';

export function DisableElevation() {
  return (
    <Button variant="contained" color="primary" disableElevation>
      Disable elevation
    </Button>
  );
}

export default {
  title: "Material-ui|buttons|DisableElevation"
};
