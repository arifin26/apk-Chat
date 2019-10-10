import * as firebase from "firebase";
export const initialize = () => firebase.initializeApp({
    apiKey: "AIzaSyDyaOOlSYt1dYsmHnZjeKIfco4GvDJu0ew",
    authDomain: "rifin-project.firebaseapp.com",
    databaseURL: "https://rifin-project.firebaseio.com",
    projectId: "rifin-project",
    storageBucket: "rifin-project.appspot.com",
    messagingSenderId: "33001765174",
 
});
export const setListener = (endpoint, updaterFn) => {
    firebase.database().ref(endpoint).on('value', updaterFn);
    return () => firebase.database().ref(endpoint).off();
}
export const pushData = (endpoint, data) => {
    return firebase.database().ref(endpoint).push(data);
}