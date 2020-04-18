const seperator = '|';

export default function ImportPath({ data }) {
  if (typeof data.kind === 'undefined') return null;

  const exploded = data.kind.split(seperator);
  return `import { ${data.name} } from '${exploded[0]}/fe/${exploded[1].toLowerCase()}';`;
}
