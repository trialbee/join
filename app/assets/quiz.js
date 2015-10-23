
export const frontend = [{
    id: 'name',
    type: 'text',
    question: 'Describe yourself briefly:',
    placeholder: 'fullname is better',
    // rules: [{
    //     type: 'notEmpty',
    //     // msg: 'Value can not be empty'
    // }],
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
