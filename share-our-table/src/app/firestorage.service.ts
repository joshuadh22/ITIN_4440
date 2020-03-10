import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

import 'firebase/storage';
import 'firebase';

//documentation that I am using https://firebase.google.com/docs/storage/web/create-reference
@Component({
    
  })
  
  export class FileQuery implements OnInit
  {

    constructor(private afstorage: AngularFireStorage,)
    {
        var storage = afstorage;

        //creates a reference to the test library
        var storageRef = storage.ref('test');

        //creates a reference to the file
        var file = storageRef.child('test/1583478502414_wot2.csv');

        //i think we need to do a storageRef.listAll() to list everything in the test folder
    }

    ngOnInit(): void {
    }
  }
