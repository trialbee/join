
export const frontend = [{
    id: 'foo',
    type: 'multi',
    question: 'tabs or spaces?',
    helper: 'think it through',
    options: [{
        value: 'tabs',
        label: 'tabs'
    },{
        value: 'spaces',
        label: 'spaces'
    }],
    rules: [{
        type: 'notEmpty',
        msg: 'you must choose an option dumb ass!',
        stop: true
    },{
        type: 'oneOf',
        values: ['tabs', 'spaces'],
        msg: 'choose among the given options!'
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
