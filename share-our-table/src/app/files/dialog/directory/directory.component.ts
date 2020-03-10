import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
    selector: 'dirctory',
    template: `
    <div>
      Selected folder: {{selectedKeys.join(",")}}
    </div>
    <kendo-treeview
        [nodes]="exmpleData"
        textField="name"
        [hasChildren]="hasChildren"
        [children]="fetchChildren"
        kendoTreeViewExpandable
        [expandedKeys]="expandedKeys"
        kendoTreeViewSelectable
        [selectBy]="'name'"
        [(selectedKeys)]="selectedKeys"
        kendoTreeViewHierarchyBinding
        childrenField="children"
    >
    </kendo-treeview>
  `
})
export class DirectoryData {
  public expandedKeys: any[] = [''];
  public selectedKeys: any[] = [''];
    public exmpleData: any[] = [
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
      },
    ]
  },
  {
    name: 'angularjs',
    type: 'folder',
    date: '11/21/2020',
    kind: 'folder',
    size: '--',
  }
    ];
    public hasChildren = (item: any) => item.items && item.items.length > 0;
    public fetchChildren = (item: any) => of(item.items);
}