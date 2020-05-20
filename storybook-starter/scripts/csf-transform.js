// play around with ast https://astexplorer.net
// https://github.com/benjamn/ast-types/

module.exports = (fileInfo, api) => {
  const j = api.jscodeshift;

  const root = j(fileInfo.source);
  const partials = fileInfo.path.replace('.tsx', '').split('/');
  const component = partials[partials.length - 2];
  const test = partials[partials.length - 1];

  // make export a names export
  root.find(j.ExportDefaultDeclaration).replaceWith((p) => {
    return j.exportDeclaration(false, p.node.declaration);
  });

  // add default export
  root
    .get()
    .node.program.body.push(
      j.exportDefaultDeclaration(
        j.objectExpression([
          j.property(
            'init',
            j.identifier('title'),
            j.literal(`Material-ui|${component}|${test}`)
          ),
        ])
      )
    );

  return root.toSource();
};
