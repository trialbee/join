
import Firebase from 'firebase';

var fb;

export function initFirebase() {
    return (dispatch, getState) => {
        fb = new Firebase('https://pushups-game.firebaseio.com/');
    }
}

export function saveProfile(data) {
    return (dispatch, getState) => {
        console.log('FIREBASE>>', data);
    }
}