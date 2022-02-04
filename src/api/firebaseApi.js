import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD8HRfVAqn_VQkXjje1BroBiUcJSUxqURo",
  authDomain: "life-line-xtmp.firebaseapp.com",
  databaseURL: "https://life-line-xtmp-default-rtdb.firebaseio.com",
  projectId: "life-line-xtmp",
  storageBucket: "life-line-xtmp.appspot.com",
  messagingSenderId: "891544971904",
  appId: "1:891544971904:web:af7ea46ed66e855ed6d465"
};

const app = initializeApp(firebaseConfig);

export default app