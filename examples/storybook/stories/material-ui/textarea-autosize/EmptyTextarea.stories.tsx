import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

export function EmptyTextarea() {
  return <TextareaAutosize aria-label="empty textarea" placeholder="Empty" />;
}

export default {
  title: "Material-ui|textarea-autosize|EmptyTextarea.stories"
};
