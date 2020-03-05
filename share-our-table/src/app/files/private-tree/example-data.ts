/** Example file/folder data. */
export const files = [
  {
    name: 'privatec-omponents',
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
              { name: 'private-package.json', type: 'file', date:'11/21/2020',kind: 'json', size: '2MB' },
              { name: 'private-BUILD.bazel', type: 'file', date: '11/21/2020', kind: 'bazel', size: '2MB' },
            ]
          },
          { name: 'private-material', type: 'folder', date: '11/21/2020', kind: 'folder', size: '--' }
        ]
      }
    ]
  },
  {
    name: 'private-angular',
    type: 'folder',
    date: '11/21/2020',
    kind: 'folder',
    size: '--',
    children: [
      {
        name: 'private-packages',
        type: 'folder',
        date: '11/21/2020',
        kind: 'folder',
        size: '--',
        children: [
          { name: 'private-travis.yml', type: 'file', date: '11/21/2020', kind: 'yml', size: '2MB' },
          { name: 'firebase.json', type: 'file', date: '11/21/2020', kind: 'json', size: '2MB' }
        ]
      },
      { name: 'private-package.json', type: 'file', date: '11/21/2020', kind: 'json', size: '--' }
    ]
  }
];