
export const validators = {
    notEmpty: notEmpty,
    oneOf: oneOf
};

export function validate(value, rules = []) {
    var result = {
        isValid: true,
        errors: []
    };

    var isStopped = false;

    rules.forEach(rule => {
        if (isStopped) {
            return;
        }

        // validate and affect global validation
        var isValid = validators[rule.type].call(null, value, rule);
        result.isValid = result.isValid && isValid;

        // add rule's error message
        if (!isValid && rule.msg) {
            result.errors.push(rule.msg);
        }

        // implement blocking rule
        if (rule.stop) {
            isStopped = true;
        }
    });
    
    return result;
}

function notEmpty(value) {
    return !!(value && value.length);
}

function oneOf(value, rule) {
    return rule.values.indexOf(value) !== -1;
}
