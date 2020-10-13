export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f85ae4a19d328160adc82ad',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-gvw7a6rq',
                  apiId: '6d2a29f8-ba57-4d8b-99aa-4105586fad1a'
                },
                {
                  buildHookId: '5f85ae4a19d3281d88dc7670',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-qs9qwerr',
                  apiId: '76db2f9c-4f6a-4ab0-bb93-1caa6878206b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/VinodSoftcripts/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-qs9qwerr.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
