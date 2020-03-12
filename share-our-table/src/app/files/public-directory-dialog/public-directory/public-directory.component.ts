// import { Component } from '@angular/core';
// import { files } from 'src/app/files/trees/public-tree/example-data';
// import { of } from 'rxjs';

// @Component({
//     selector: 'public-directory',
//     template: `
//     <div>
//       Selected folder: {{selectedKeys.join(",")}}
//     </div>
//     <kendo-treeview
//         [nodes]=file
//         textField=name
//         [hasChildren]="hasChildren"
//         [children]="fetchChildren"
//         kendoTreeViewExpandable
//         [expandedKeys]="expandedKeys"
//         kendoTreeViewSelectable
//         [selectBy]="'name'"
//         [(selectedKeys)]="selectedKeys"
//         kendoTreeViewHierarchyBinding
//         childrenField=children
//     >
//     </kendo-treeview>
//   `
// })

// export class PublicDirectoryData {

//   public expandedKeys: any[] = [''];
//   public selectedKeys: any[] = [''];

//   file = files

//   public hasChildren = (item: any) => item.items && item.items.length > 0;
//   public fetchChildren = (item: any) => of(item.items);
// }


import { Component } from '@angular/core';
import { PrivateTreeComponent } from 'src/app/files/trees/private-tree/tree.component';
import { FileNode } from 'src/app/files/trees/private-tree/tree.component';
import { FlatTreeNode } from 'src/app/files/trees/private-tree/tree.component';

import { files } from 'src/app/files/trees/private-tree/private-example-data';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';

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

  private fileCollection: AngularFirestoreCollection<FileNode>;
  privateFiles: Observable<FileNode[]>;

  constructor(private afs: AngularFirestore) {
    this.fileCollection = afs.collection<FileNode>('publicFiles');
    this.privateFiles = this.fileCollection.valueChanges();
  }

  file = files

  public expandedKeys: any[] = [''];
  public selectedKeys: any[] = [''];


  public hasChildren = (item: any) => item.items && item.items.length > 0;
  public fetchChildren = (item: any) => of(item.items);

}
