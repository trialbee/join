

export const frontend = [



// LANGUAGES
{
    id: 'Languages',
    type: 'info',
    question: 'Languages',
    html: [
        '<p>The following questions are about programming languages.</p>',
        '<p>Please answer "yes" to languages that you feel comfortable to work with.</p>'
    ].join('')
},{
    id: 'php',
    type: 'bool',
    question: 'Do you know PHP?'
},{
    id: 'ruby',
    type: 'bool',
    question: 'Do you know Ruby?'
},{
    id: 'vivaldi',
    type: 'bool',
    question: 'Do you know Vivaldi?',
    helper: [
        '<p><a href="https://github.com/jeorgun/Vivaldi" target="_blank">did you know it?</a><br>',
        '<a href="https://github.com/jeorgun/Vivaldi/issues/1" target="_blank">we are active contributors!</a></p>'
    ].join('')
},{
    id: 'rails',
    type: 'bool',
    question: 'Do you know Rails?'
},{
    id: 'js',
    type: 'bool',
    question: 'Do you know JavaScript?'
},{
    id: 'java',
    type: 'bool',
    question: 'Do you know Java?'
},




// CODING
{
    id: 'Coding',
    type: 'info',
    question: 'Techniques',
    html: [
        '<p>Now I will present you with some <b>multiple choices</b> cards.</p>',
        '<p>Pick your choice in the <b>shortest amount of time</b>, we track it!</p>'
    ].join('')
},{
    id: 'coding-style',
    type: 'multi',
    question: 'Pick your choice:',
    options: [
        {value:'object-oriented',           label: 'Object Oriented'},
        {value:'functional-programming',    label: 'Functional Programming'},
    ]
},{
    id: 'variables',
    type: 'multi',
    question: 'Pick your choice:',
    options: [
        {value:'by-reference',              label: 'by reference'},
        {value:'by-value',                  label: 'by value'},
    ]
}



];



/*
export const frontend = [{
    id: 'php',
    type: 'bool',
    question: 'do you know PHP?'
},{
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
*/