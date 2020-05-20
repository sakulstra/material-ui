import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export function SimpleMediaQuery() {
  const matches = useMediaQuery('(min-width:600px)');

  return <span>{`(min-width:600px) matches: ${matches}`}</span>;
}

export default {
  title: "Material-ui|use-media-query|SimpleMediaQuery"
};
