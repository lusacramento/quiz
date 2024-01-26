const questions = [
	{
		number: 1,
		q: 'What is 2 + 2?',
		answers: [
			{
				option: 'a',
				text: '4',
				isCorrect: true,
			},
			{
				option: 'b',
				text: '3',
				isCorrect: false,
			},
			{
				option: 'c',
				text: 'Fish',
				isCorrect: false,
			},
			{
				option: 'd',
				text: '5',
				isCorrect: false,
			},
		],
	},
	{
		number: 2,
		q: 'How many letters are in the word "Banana"?',
		answers: [
			{
				option: 'a',
				text: '5',
				isCorrect: false,
			},
			{
				option: 'b',
				text: '7',
				isCorrect: false,
			},
			{
				option: 'c',
				text: '6',
				isCorrect: true,
			},
			{
				option: 'd',
				text: '12',
				isCorrect: false,
			},
		],
	},
	{
		number: 3,
		q: 'Find the missing letter: C_ke',
		answers: [
			{
				option: 'a',
				text: 'e',
				isCorrect: false,
			},
			{
				option: 'b',
				text: 'a',
				isCorrect: true,
			},
			{
				option: 'c',
				text: 'i',
				isCorrect: false,
			},
		],
	},
]

const results = [
	{
		min: 0,
		max: 2,
		title: 'Try again!',
		desc: 'Do a little more studying and you may succeed!',
	},
	{
		min: 3,
		max: 3,
		title: "Wow, you're a genius!",
		desc: 'Studying has definitely paid off for you!',
	},
]

const counter = {
	value: 0,
	increment: () => counter.value++,
}

export const useQuestions = () => {
	return { questions, results, counter }
}
