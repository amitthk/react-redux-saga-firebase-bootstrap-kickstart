* react kickstarter todo list app with redux, sagas, firebase backend, and bootstrap

The form will persist the data to firebase. In order to get the persistence working please create an app in firebase:

https://firebase.google.com/

Create an app in firebase and generate the config and save the file into **src/apis/firebase/firebase-config.ts**

```
const firebaseConfig = {
  apiKey: "your_api_key",
  authDomain: "your_project_auth_domain",
  projectId: "your_project_id",
  storageBucket: "your_project_storage_bucket",
  messagingSenderId: "your_messaging_sender_id",
  appId: "your_app_id",
  measurementId: "your_measurement_id"
};

export default firebaseConfig;

```

If there is permission error then grant the permission to read write to respective documents.

In https://console.firebase.google.com/,  select your project, go to:

Firestore Database > Data > Rules

Grant following permission to your collection:

```
  rules_version = '2';
    service cloud.firestore {
    match /databases/{database}/documents {
    match /{document=**} {
    allow read, write, delete: if true;
   }
  }
}
```

Remember to revert back the permissions to authenticated users only once you have added authentication to firebase backend.

```
  rules_version = '2';
    service cloud.firestore {
    match /databases/{database}/documents {
    match /{document=**} {
    allow read, write, delete: if request.auth != null;
   }
  }
}

```