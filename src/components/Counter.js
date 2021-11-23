import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter';

const Counter = () => {

  const counter = useSelector(state => state.counter.counter);
  const dispatch = useDispatch();
  const show = useSelector(state => state.counter.showCounter)
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  const incrementBy5Handler = () => {
    dispatch(counterActions.incrementBy5(5))
  }

  const decrementBy5Handler = () => {
    dispatch(counterActions.decrementBy5(5))
  }

  const resetHandler = () => {
    dispatch(counterActions.reset())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div>
        <div className={classes.value}>{counter}</div>
        <button onClick={incrementHandler}>+</button>
        <button onClick={incrementBy5Handler}>+5</button>
        <button onClick={decrementBy5Handler}>-5</button>
        <button onClick={decrementHandler}>-</button>
        <button onClick={resetHandler}>reset counter</button>

      </div>
      }<button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;


// So from React Redux we again wanna import something
// and the something which we are importing is a React Hook.
// A custom hook made by the React Redux team.
// The use selector hook.
// There also is use store hook, which we could use as well which gives us direct access to the store
// but you as selector is a bit more convenient to use because that allows us to then automatically select a part of our state managed by the store.
// Now if we would be using a class-based component and not a functional component as we are here,  then there also is a connect function which we could use instead.
//  This function can be used as a wrapper around our class component to connect that class component to the store.
// So here in this functional component we can now get access to the data managed in our store by using use selector.
//  We call this and now we need to pass a function to use selector. A function which will be executed by a React Redux of function 
//  which then basically determines which piece of data we wanna extract from our store.
// Of course at the moment we have a very simple state.  Just an object with a counter property.
// But in bigger applications, you will have more complex states with tons of different properties maybe nested objects
//  and arrays and therefore being able to just get a slice just a tiny part of that overall state object in a easy way is worth a lot.
//   And that's what use selector allows us to do. For this we should pass a function to it, a function of which we'll receive the state managed by Redux 
//   and then we return the part of the state which you wanna extract. So here for example, state stock.counter.
//    Again this function will be executed for us by React Redux. It will then pass the Redux state so the manage the data into this function when it executes it
//     and then basically executes this code to retrieve the part of the state which you need in this component. And then use select or therefore overall gives us
//      that returned value. So we get a counter constant which is the counter managed by Redux. Now the great thing is that when you use use selector,
//       React Redux will automatically set up a subscription to the Redux store for this component. So your component will be updated and will receive the latest counter
//        automatically whenever that data changes in the Redux store. So it's an automatically reactive and changes to the Redux store will cause this component function
//         to be re executed. So you always have the latest counter. That's why use selector is a very useful hook and why it is the hook we use
//          for getting data out of the store. If you ever would unmount this component if it would be removed from the DOM for whatever reason, 
//          React Redux would also automatically clear the subscription for you. So it manages that subscription for you behind the scenes.
//           Now that we got this counter, we can use it down there, to output the counter value like this. And if we now save this, we therefore now see zero here.



// we want to use this dispatch function and execute it to dispatch a new action and then do what we learned. An action is an object with a type property.
// So let's add such an object here as an argument to the dispatch function call so that we dispatch this specific object. And then the value for type should be one
// of the identifiers we use in our Redux store reducer. So here in the reducer function, we handle the action type increment and the action type detriment.
// So we should dispatch one of these two identifiers. Of course, exactly these identifiers, without any typos or changes. So back in counter here, I'll dispatch increment
// and then here in the detriment handler I'll dispatch an object with a type property with a value of decrement.


// the action which we dispatch and which reaches the Reducer often needs to carry extra data. It works just like that because now the Reducer is dynamic. 
// It extracts an action payload. And action payloads are very common, often needed, and as you see, it's super easy to add them. 
// It's just an extra property which you add to your action objects.


//GLobal states are states that are also states which other components are interested in.

// I mentioned in the last lecture that we always return a brand new snapshot, a brand new state object which Redux will use to replace its existing state with.
// So the objects which we return in the reducer will not, and that's super important will not be merged with the existing state. They will overwrite the existing state.
// You should never super important never mutate the state, the existing state. You should never change the existing state. Instead, always override it
// by returning a brand new state object.
//mutating the state could lead to unexpected behaviours, bugs and its hard to test