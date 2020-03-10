/** Example file/folder data. */
export const files = [
  {
    name: 'private-components',
    type: 'folder',
    date: '11/21/2020',
    kind: 'folder',
    size: '--',
    children: [
      {
        name: 'private-src',
        type: 'folder',
        date: '11/21/2020',
        kind: 'folder',
        size: '--',
        children: [
          {
            name: 'private-cdk',
            type: 'folder',
            date: '11/21/2020',
            kind: 'folder',
            size: '--',
            children: [
              { name: 'private.json', type: 'file', date:'11/21/2020',kind: 'json', size: '2MB' },
            ]
          },
          { name: 'private-material', type: 'folder', date: '11/21/2020', kind: 'folder', size: '--' }
        ]
      }
    ]
  },
  {
    name: 'angular',
    type: 'folder',
    date: '11/21/2020',
    kind: 'folder',
    size: '--',
    children: [
      {
        name: 'packages',
        type: 'folder',
        date: '11/21/2020',
        kind: 'folder',
        size: '--',
        children: [
          { name: '.travis.yml', type: 'file', date: '11/21/2020', kind: 'yml', size: '2MB' },
          { name: 'firebase.json', type: 'file', date: '11/21/2020', kind: 'json', size: '2MB' }
        ]
      },
      { name: 'package.json', type: 'file', date: '11/21/2020', kind: 'json', size: '--' }
    ]
  },
];