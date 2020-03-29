import { Component } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';

import { files } from './private-example-data';
import { File } from '../../../file';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';

/** File node data with possible child nodes. */
export interface FileNode {
  description: string,
  downloadURL: string,
  title: string
  children?: FileNode[];
}

/**
 * Flattened tree node that has been created from a FileNode through the flattener. Flattened
 * nodes include level index and whether they can be expanded or not.
 */
export interface FlatTreeNode {
  description: string,
  downloadURL: string,
  title: string
  expandable: boolean;
}

@Component({
  selector: 'private-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})

export class PrivateTreeComponent {

  name: string;
  description: string;
  link: string;
  image: string;
  private fileCollection: AngularFirestoreCollection<FileNode>;
  files: FileNode[];

  /** The TreeControl controls the expand/collapse state of tree nodes.  */
  treeControl: FlatTreeControl<FlatTreeNode>;

  /** The TreeFlattener is used to generate the flat list of items from hierarchical data. */
  treeFlattener: MatTreeFlattener<FileNode, FlatTreeNode>;

  /** The MatTreeFlatDataSource connects the control and flattener to provide data. */
  dataSource: MatTreeFlatDataSource<FileNode, FlatTreeNode>;

  constructor(private afs: AngularFirestore) {
    this.fileCollection = afs.collection<FileNode>('privateFiles');
    // this.files = this.fileCollection.valueChanges();

    this.treeFlattener = new MatTreeFlattener(
      this.transformer,
      this.getLevel,
      this.isExpandable,
      this.getChildren);

    this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

   this.dataSource.data = this.files;
  
  }

  /** Transform the data to something the tree can read. */
  transformer(node: FileNode, level: number) {
    return {
      description: node.description,
      downloadURL: node.downloadURL,
      title: node.title,
      expandable: !!node.children
    };
  }

  /** Get the level of the node */
  getLevel(node: FlatTreeNode) {
    return 1;
  }

  /** Get whether the node is expanded or not. */
  isExpandable(node: FlatTreeNode) {
    return false;
  }

  /** Get whether the node has children or not. */
  hasChild(index: number, node: FlatTreeNode) {
    return false;
  }

  /** Get the children for the node. */
  getChildren(node: FileNode): FileNode[] | null | undefined {
    this.afs.doc<FileNode>('privateFiles/');
    return node.children;
  }
}