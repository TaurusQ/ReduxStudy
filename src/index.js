import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Counter from './components/Counter'
import counter from './reducers'
import {
	createStore
} from 'redux'

const store = createStore(counter)


const render = () => ReactDOM.render(
	<Counter 
	value={store.getState()}
	onIncrement={()=>store.dispatch({type: 'INCREMENT'})}
	onDecrement={()=>store.dispatch({type: 'DECREMENT'})}
	onRefresh = {()=>store.dispatch({type: 'REFRESH'})}
	/>,
	document.getElementById('app')
);
render();
//Store使用store.subscribe方法设置监听函数，
//一旦State发生变化，就自动执行这个函数
store.subscribe(render);

/**
ReactDOM.render(
	<Counter value={store.getState()}
	onIncrement={()=>store.dispatch({type:'INCREMENT'})}
	onDecrement={()=>store.dispatch({type:'DECREMENT'})} />,
	document.getElementById('app')
);
**/