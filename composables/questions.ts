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

const questionsNumber = questions.length

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

const progress = ref(0)

const hit = ref(0)

let indexQuestion = 0

let currentQuestion = ref(questions[indexQuestion])

const isFinished = ref(false)

function nextStep(isCorrect: boolean) {
	checkHit(isCorrect)

	progress.value++

	if (isFinishedQuestions()) {
		showResult()
		isFinished.value = true
	} else {
		getNextAnswer()
	}

	function checkHit(isCorrect: boolean) {
		if (isCorrect) {
			hit.value++
		}
	}

	function isFinishedQuestions() {
		return indexQuestion === questionsNumber - 1
	}

	function getNextAnswer() {
		indexQuestion++
		currentQuestion.value = questions[indexQuestion]
	}
}

const result = ref({
	hit: 0,
	title: 'Title',
	description: 'Description',
})

function showResult() {
	results.forEach((result2) => {
		switch (true) {
			case isApproved():
				getResult()
				break

			case isDisapproved():
				getResult()
			default:
				break
		}

		function getResult() {
			result.value.hit = hit.value
			result.value.title = result2.title
			result.value.description = result2.desc
		}

		function isDisapproved() {
			return hit.value >= result2.min && hit.value <= result2.max
		}

		function isApproved() {
			return hit.value >= result2.min && hit.value <= result2.max
		}
	})
}

function reset() {
	progress.value = 0
	hit.value = 0
	indexQuestion = 0
	currentQuestion.value = questions[indexQuestion]
	result.value.hit = 0
	result.value.title = ''
	result.value.description = ''

	isFinished.value = false
}

export const useQuestions = () => {
	return {
		progress,
		questionsNumber,
		currentQuestion,
		hit,
		result,
		nextStep,
		isFinished,
		reset,
	}
}
