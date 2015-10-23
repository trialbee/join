# TrialbeeHiring

- [GitHub Repository &raquo;](https://github.com/marcopeg/trialbee-hiring)
- [Play Online &raquo;](https://trialbee.firebaseapp.com)


## Development Setup

[`NodeJS`](http://nodejs.org) is a required dependency of this app.  
You should be running `NodeJS >= 0.12.7`.
	
	// start development setup
	npm install && npm start
	
When the installation ends open your browser at [`http://localhost:3000`](http://localhost:3000).

## Run Tests

	npm test

## Run Production

	// run from scratch the final app
	npm run app
	
## Deploy

	firebase deploy

## Type of Questions

Each question in the quiz must expose the following properties:

- id
- type
- question

and those optional properties

- helper (helper text)
- rules (see Validation Rules)
- hints (see Errors Hints)

### text

	{
		type: 'text',
		placeholder: 'helper text inside the form field'
	}

### multi

	{
		type: 'multi',
		options: [{
			value: 'foo',
			label: 'Foo'
		}]
	}

### info

This is not a question but it is an information card among the quiz.

	{
		type: 'info',
		question: 'foo',
		htm: 'this is <b>a text that</b> will appear'
	}
	
## Validation Rules

In general a validation rule has the properties:

- type
- msg
- stop

### notEmpty

### oneOf

Check if the given value is present in a control list.

	{
		type: 'oneOf',
		values: ['val1', 'val2']
	}
	
### regext

	{
		type: 'regexp',
		exp: '',
		flag: 'i'
	}

## Errors Hints

It is possible to give some suggestions based on the amount of done mistakes:

	hints: [{
		count: 2,
		msg: 'this is visible at the second mistake'
	},{
		count: 2,
		andup: true,
		msg: 'this is visible from the second mistake and for the followings'
	}]
	
