import { TodoDocument } from 'src/todos/documents/todos.document';

export const FirestoreDatabaseProvider = 'firestoredb';
export const FirestoreOptionsProvider = 'firestoreOptions';
export const FirestoreCollectionProviders: string[] = [
  TodoDocument.collectionName,
];
