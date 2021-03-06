const initialState = 0;

const counter = (state = initialState, action) => {
  switch(action.type){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const { createStore } = Redux;

const store = createStore(counter);

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({type: 'INCREMENT'}) }
      onDecrement={() => store.dispatch({type: 'DECREMENT'}) }
    />,
    document.getElementById('root')
  );
}

const Counter = ({value, onIncrement, onDecrement}) => {
  return (
    <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
    </div>
  );
}

store.subscribe(render);
render();
