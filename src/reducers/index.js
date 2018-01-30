export default (state = 0, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		case 'REFRESH':
			return 0;
		default:
			return state;
	}
}