import { Component } from '@angular/core';
import { files } from 'src/app/files/trees/public-tree/example-data';
import { of } from 'rxjs';

@Component({
    selector: 'public-directory',
    template: `
    <div>
      Selected folder: {{selectedKeys.join(",")}}
    </div>
    <kendo-treeview
        [nodes]=file
        textField=name
        [hasChildren]="hasChildren"
        [children]="fetchChildren"
        kendoTreeViewExpandable
        [expandedKeys]="expandedKeys"
        kendoTreeViewSelectable
        [selectBy]="'name'"
        [(selectedKeys)]="selectedKeys"
        kendoTreeViewHierarchyBinding
        childrenField=children
    >
    </kendo-treeview>
  `
})

export class PublicDirectoryData {

  public expandedKeys: any[] = [''];
  public selectedKeys: any[] = [''];

  file = files

  public hasChildren = (item: any) => item.items && item.items.length > 0;
  public fetchChildren = (item: any) => of(item.items);
}