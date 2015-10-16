
// human (almost) readable version
var profileTokens = [
    '^passionate ',
    '((js|javascript|ror|ruby|php))+ ',
    '((senior|junior) )?',
    '(software )?(engineer|dev(eloper)?)'
];

// cached regexp so we save precious microseconds!
// (yeah, our users care about microseconds)
var profileExp = new RegExp(profileTokens.join(''), 'i');    

// public interface to match a candidate:
export function matchProfile(candidate = '') {
    if (!profileExp) {
        return false;
    }
    return profileExp.test(candidate.toLowerCase());
}
