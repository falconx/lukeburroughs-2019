const path = require('path');
const { createFilePath, createFileNode } = require('gatsby-source-filesystem');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  // "Ignore" hack added as a workaround to https://github.com/gatsbyjs/gatsby/issues/15707
  const query = `
    {
      allWordpressPage(filter: { title: { regex: "/^(?!Ignore)/" } }, sort: { fields: date, order: DESC }) {
        edges {
          node {
            id
            slug
            acf {
              page_type
            }
          }
        }
      }
    }
  `;

  return graphql(query).then(result => {
    if (result.errors) {
      console.error(results.errors);
      reject(result.error);
    }

    const edges = result.data.allWordpressPage.edges;
    const template = path.resolve('./src/templates/page.js');

    edges.forEach(edge => {
      const isHomePage = edge.node.acf.page_type === 'Home';

      let path = '/';
      if (!isHomePage) {
        path += edge.node.slug;
      }

      console.log('create page', path);

      createPage({
        path,
        component: template,
        context: {
          id: edge.node.id,
        },
      });
    });
  });
};