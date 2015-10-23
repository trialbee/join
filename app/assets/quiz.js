
var profileTokens = [
    '^passionate ',
    '((js|javascript|ror|ruby|php))+ ',
    '((senior|junior) )?',
    '(software )?(engineer|dev(eloper)?)'
];

export const frontend = [{
    id: 'job',
    type: 'text',
    question: 'you know',
    placeholder: 'fullname is better',
    helper: 'be truth with yourself',
    rules: [{
        type: 'matchProfile',
        msg: 'You don\'t match <b>Trialbee</b> profile!'
    }],
    hints: [{
        count: 1,
        msg: 'what <b>the</b> fuck???'
    }]
},{
    id: 'p1',
    type: 'info',
    question: 'now we do it for real',
    html: 'this <b>is just</b> for fun'
},{
    id: 'foo',
    type: 'multi',
    question: 'tabs or spaces?',
    helper: 'think it through',
    options: [{
        value: 'tabs',
        label: 'tabs'
    },{
        value: '2spaces',
        label: '2 spaces'
    },{
        value: '4spaces',
        label: '4 spaces'
    }],
    rules: [{
        type: 'notEmpty',
        msg: 'you must choose an option dumb ass!',
        stop: true
    },{
        type: 'oneOf',
        values: ['2spaces', '4spaces'],
        msg: 'do you really think tabs is the correct answer?'
    }]
},{
    id: 'name',
    type: 'text',
    question: 'Describe yourself briefly:',
    placeholder: 'fullname is better',
    helper: 'be truth with yourself',
    rules: [{
        type: 'notEmpty',
        msg: 'Value can not be empty'
    }],
    hints: [{
        count: 2,
        msg: 'Open Github and search...'
    },{
        count: 2,
        andup: true,
        msg: 'Stay hungry stay foolish...'
    },{
        count: 1,
        msg: 'you may want try another time man!'
    }]
},{
    id: 'currPos',
    type: 'text',
    question: 'What\'s your current position?'
},{
    id: 'likeIt',
    type: 'text',
    question: 'Did you like it?'
}];
