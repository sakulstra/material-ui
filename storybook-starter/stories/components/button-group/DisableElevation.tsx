import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

export function DisableElevation() {
  return (
    <ButtonGroup disableElevation variant="contained" color="primary">
      <Button>One</Button>
      <Button>Two</Button>
    </ButtonGroup>
  );
}

export default {
  title: "Material-ui|button-group|DisableElevation"
};
