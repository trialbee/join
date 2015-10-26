

export const frontend = [



// LANGUAGES
{
    id: 'Languages',
    type: 'info',
    question: 'Languages',
    html: [
        '<p>The following questions are about programming languages.</p>',
        '<p>Please answer "yes" to languages that you feel comfortable working with.</p>'
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
        '<p><a href="https://github.com/jeorgun/Vivaldi" target="_blank">Did you know it?</a><br>',
        '<a href="https://github.com/jeorgun/Vivaldi/issues/1" target="_blank">We are active contributors!</a></p>'
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
        '<p>Pick your choice in the <b>shortest amount</b> of time, we track it!'</p>'
    ].join('')
},
{
    id: 'coding-style',
    type: 'multi',
    question: 'Pick your choice:',
    options: [
        {value:'object-oriented',           label: 'Object Oriented'},
        {value:'functional-programming',    label: 'Functional Programming'},
        {value:'fouxo',                     label: 'FouxO' }
    ]
},
{
    id: 'variables',
    type: 'multi',
    question: 'Pick your choice:',
    options: [
        {value:'by-reference',              label: 'by reference'},
        {value:'by-value',                  label: 'by value'},
    ]
},
{
    id: 'indentation',
    type: 'multi',
    question: 'tabs or spaces?',
    helper: 'think it through',
    options: [{
        value: 'tabs',
        label: 'tabs',
        style: 'primary'
    },{
        value: '2spaces',
        label: '2 spaces'
    },{
        value: '4spaces',
        label: '4 spaces'
    }],
    rules: [{
        type: 'notEmpty',
        msg: 'you must choose an option!',
        stop: true
    },{
        type: 'oneOf',
        values: ['2spaces', '4spaces'],
        msg: 'do you <b>really</b> think tabs is the correct answer???''
    }]
},



{
    id: 'personal',
    type: 'info',
    question: 'Personal',
    html: '<p>Now we get to know more about you</p>'
},
{
    id: 'drinks',
    type: 'multi',
    question: 'Pick your choice:',
    options: [
        {value:'coffee',            label: 'Coffee'},
        {value:'tea',               label: 'Tea'},
        {value:'water',             label: 'Water'}
    ]
},
{
    id: 'games',
    type: 'multi',
    question: 'Pick your choice:',
    options: [
        {value:'fussball',            label: 'Fussball'},
        {value:'table-tennis',        label: 'Table Tennis'},
        {value:'darts',               label: 'Darts'},
        {value:'lightsaber-fight',    label: 'Lightsaber Fight'}
    ]
},
{
    id: 'computer',
    type: 'multi',
    question: 'Pick your choice:',
    options: [
        {value:'pc',                  label: 'Windows'},
        {value:'linux',               label: 'Linux'},
        {value:'mac',                 label: 'Mac'}
    ]
},






{
    id: 'tests',
    type: 'info',
    question: 'Now what?',
    html: [
        '<p>Now we go to the real stuff!'</p>',
        '<p>In order to answer the following questions you may need to read or even run some code!</p>'
    ].join('')
},
{
    id: 'node-version',
    type: 'text',
    question: 'Which version of NodeJS do we use in this app?'',
    rules: [{
        type: 'oneOf', values: ['0.12.7','12.7']
    }],
    hints: [{
        count: 1,
        andup: true,
        msg: 'you may want to <a href="https://github.com/marcopeg/trialbee-hiring" target="_blank">take a look at our codebase</a> to find the answer'
    },{
        count: 2,
        andup: true,
        msg: 'you may find this information around the <b>readme</b> file...'
    }]    
},
{
    id: 'building-tool',
    type: 'multi',
    question: 'Which building tool does this app use?',
    options: [
        { value: 'browserify', label:'Browserify' },
        { value: 'grunt', label:'Grunt' },
        { value: 'gulp', label:'Gulp' },
        { value: 'webpack', label:'Webpack' },
        { value: 'make', label:'Make' }
    ],
    rules: [{
        type: 'oneOf', values: ['webpack']
    }],
    hints: [{
        count: 1,
        andup: true,
        msg: 'you may want to <a href="https://github.com/marcopeg/trialbee-hiring" target="_blank">take a look at our codebase</a> to seek for an answert'
    }]
},
{
    id: 'profile',
    type: 'text',
    question: 'How many components does this app have?',
    rules: [{
        type: 'oneOf',
        values: ['13']
    }],
    hints: [{
        count: 1,
        andup: true,
        msg: 'you may want to <a href="https://github.com/marcopeg/trialbee-hiring" target="_blank">take a look at our codebase</a> to seek for an answert'
    },{
        count: 2,
        andup: true,
        msg: 'try to dig deeper into the codebase, <b>we like to use explicit folder names!</b>'
    }]
},
{
    id: 'profile',
    type: 'text',
    question: 'Who are you?',
    rules: [{
        type: 'matchProfile'
    }],
    hints: [{
        count: 1,
        andup: true,
        msg: 'you may want to <a href="https://github.com/marcopeg/trialbee-hiring" target="_blank">take a look at our codebase</a> to seek for an answert'
    },{
        count: 2,
        andup: true,
        msg: 'probably there is some kind of <b>static validation rule</b> that you are missing'
    },{
        count: 5,
        andup: true,
        msg: 'the best place to seek for help may be the <b>tests source files</b>!'
    }]
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
