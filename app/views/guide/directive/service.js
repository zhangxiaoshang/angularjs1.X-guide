export default class RandomCode {
	constructor () {
	}

	initCode () {
		return Math.floor(Math.random() * 9e5 + 1e5)
	}
}
