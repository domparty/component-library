import React from 'react';

const seperator = '|';

export default function ImportPath({ data }) {
  if (typeof data.kind === 'undefined') return null;

  const exploded = data.kind.split(seperator);
  return `${exploded[0]}/fe/${exploded[1].toLowerCase()}/${data.name}`;
}
