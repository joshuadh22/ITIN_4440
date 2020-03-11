/** Example file/folder data. */
export const files = [
  {
    name: 'components',
    type: 'folder',
    date: '11/21/2020',
    kind: 'folder',
    size: '--',
    children: [
      {
        name: 'src',
        type: 'folder',
        date: '11/21/2020',
        kind: 'folder',
        size: '--',
        children: [
          {
            name: 'cdk',
            type: 'folder',
            date: '11/21/2020',
            kind: 'folder',
            size: '--',
            children: [
              { name: 'package.json', type: 'file', date:'11/21/2020',kind: 'json', size: '2MB' },
              { name: 'BUILD.bazel', type: 'file', date: '11/21/2020', kind: 'bazel', size: '2MB' },
            ]
          },
          { name: 'material', type: 'folder', date: '11/21/2020', kind: 'folder', size: '--' }
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
  {
    name: 'angularjs',
    type: 'folder',
    date: '11/21/2020',
    kind: 'folder',
    size: '--',
    children: [
      { name: 'gulpfile.js', type: 'file', date: '11/21/2020', kind: 'js', size: '2MB' },
      { name: 'README.md', type: 'file', date: '11/21/2020', kind: 'md', size: '2MB' }
    ]
  }
];