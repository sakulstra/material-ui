import React from 'react';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

export function InteractiveTooltips() {
  return (
    <Tooltip title="Add" interactive>
      <Button>Interactive</Button>
    </Tooltip>
  );
}

export default {
  title: "Material-ui|tooltips|InteractiveTooltips.stories"
};
