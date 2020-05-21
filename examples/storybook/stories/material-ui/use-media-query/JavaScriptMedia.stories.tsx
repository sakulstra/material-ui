import React from 'react';
import json2mq from 'json2mq';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export function JavaScriptMedia() {
  const matches = useMediaQuery(
    json2mq({
      minWidth: 600,
    }),
  );

  return <span>{`{ minWidth: 600 } matches: ${matches}`}</span>;
}

export default {
  title: "Material-ui|use-media-query|JavaScriptMedia.stories"
};
