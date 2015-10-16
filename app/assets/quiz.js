
export const frontend = [{
    id: 'name',
    type: 'text',
    question: 'What\'s your name?',
    rule: [{
        type: 'notEmpty',
        msg: 'Value can not be empty'
    }]
},{
    id: 'currPos',
    type: 'text',
    question: 'What\'s your current position?'
}];
