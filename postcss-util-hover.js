const postcss = require('postcss');

module.exports = postcss.plugin('postcss-util-hover', () => {
  return root => {
    root.walkAtRules('hover', atRule => {
      // Clone and extract nodes from the original @hover rule
      const clonedNodes = atRule.nodes.map(node => node.clone());

      // Create &:focus-visible rule
      const focusVisibleRule = postcss
        .rule({
          selector: '&:focus-visible',
        })
        .append(clonedNodes.map(node => node.clone())); // Use cloned nodes

      // Create &:hover rule
      const hoverRule = postcss
        .rule({
          selector: '&:hover',
        })
        .append(clonedNodes.map(node => node.clone())); // Use cloned nodes again

      // Create @media rule and append hover rule to it
      const mediaRule = postcss
        .atRule({
          name: 'media',
          params: '(hover: hover)',
        })
        .append(hoverRule);

      // Insert new rules into the CSS tree
      atRule.before(focusVisibleRule);
      atRule.before(mediaRule);

      // Remove the original @hover rule
      atRule.remove();
    });
  };
});
