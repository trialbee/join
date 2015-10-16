
import { matchProfile } from 'utils/trialbee';

var wrongCandidates = [
    'delivery boy',
    'lazy developer',
    'passionate singer',
    'RoR junior software engineer',
    'php senior developer',
    'unpassionate ruby developer'
];

var goodCandidates = [
    'passionate javascript developer',
    'passionate javascript engineer',
    'passionate RoR junior software engineer',
    'passionate php senior developer'
];


describe('Job Offer at TrialBee', function() {
    it('should BE the right guy', function() {
        goodCandidates.forEach(candidate => expect(matchProfile(candidate)).to.be.true);
    });

    it('should NOT BE the right guy', function() {
        wrongCandidates.forEach(candidate => expect(matchProfile(candidate)).to.be.false);
    });
});
