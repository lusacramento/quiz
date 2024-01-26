const questions = [
	{
		q: 'What is 2 + 2?',
		answers: [
			{
				text: '4',
				isCorrect: true,
			},
			{
				text: '3',
				isCorrect: false,
			},
			{
				text: 'Fish',
				isCorrect: false,
			},
			{
				text: '5',
				isCorrect: false,
			},
		],
	},
	{
		q: 'How many letters are in the word "Banana"?',
		answers: [
			{
				text: '5',
				isCorrect: false,
			},
			{
				text: '7',
				isCorrect: false,
			},
			{
				text: '6',
				isCorrect: true,
			},
			{
				text: '12',
				isCorrect: false,
			},
		],
	},
	{
		q: 'Find the missing letter: C_ke',
		answers: [
			{
				text: 'e',
				isCorrect: false,
			},
			{
				text: 'a',
				isCorrect: true,
			},
			{
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
