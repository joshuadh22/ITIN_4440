import { Component } from '@angular/core';
import { PrivateTreeComponent } from 'src/app/files/trees/private-tree/tree.component';
import { FileNode } from 'src/app/files/trees/private-tree/tree.component';
import { FlatTreeNode } from 'src/app/files/trees/private-tree/tree.component';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';

import { of } from 'rxjs';

@Component({
    selector: 'private-directory',
    template: `
    <div>
      Selected folder: {{selectedKeys.join(",")}}
    </div>
    <kendo-treeview
        [nodes]=privateFiles
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

export class PrivateDirectoryData {

  private fileCollection: AngularFirestoreCollection<FileNode>;
  privateFiles: Observable<FileNode[]>;

  constructor(private afs: AngularFirestore) {
    this.fileCollection = afs.collection<FileNode>('privateFiles');
    this.privateFiles = this.fileCollection.valueChanges();
  }

  public expandedKeys: any[] = [''];
  public selectedKeys: any[] = [''];


  public hasChildren = (item: any) => item.items && item.items.length > 0;
  public fetchChildren = (item: any) => of(item.items);

}
