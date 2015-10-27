
import Firebase from 'firebase';

var fb;

export function initFirebase() {
    return (dispatch, getState) => {
        fb = new Firebase('https://jointrialbee.firebaseio.com/');
    }
}

export function saveProfile(data) {
    return (dispatch, getState) => {
        console.log('FIREBASE>>', data);
        fb.child('applications').push(data);
    }
}