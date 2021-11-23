import {configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth'



 

const store = configureStore({
    reducer: {counter:counterReducer,auth:authReducer}
})
//its a config object, where we set a reducer property


export default store;

//And then create slice once an object as an argument.
// Now, here we are allowed to mutate the state.So here we can set state.counter++ for example,for incrementing it. Now this was forbidden before
// and I emphasized that it is forbidden. I also did emphasize it because here it seems to be allowed. But the important part is the word seems.
// We still must not manipulate the existing state but the good thing is when using Redux toolkit and its functions like create slice,
// we can't accidentally manipulate the existing state. Because Redux toolkit internally uses another package, called imgur, which will detect code like this
// and which will automatically clone the existing state, create a new state object, keep all the state which we're not editing, and override the state
// which we are editing in an immutable way. So we still have immutable code here even though it doesn't look like it because of this internally used package
// and therefore we as a developer have a much easier time working with Redux because we don't have to create a copy manually and keep all the code we're not changing,
// instead, we just change the code we wanna change and internally it's translated into immutable code.


// Now for dispatching actions,createSlice has got us covered. It automatically creates unique action identifiers for our different reducers.
// To get hold of these action identifiers, we can use our counterSlice and access dot actions. That is then an object full of keys,
// where the the key names, increment, decrement, and so on. Match the method names we have in our createSlice function in the reducers area.



// Now, very important, when you work with multiple slices, you still only have one Redux store, so you still only call configureStore once.
// This does not change. And this store only has one root reducer here but as I briefly explained earlier, this reducer actually does not just take
// a reducer function as an argument but also an object which acts as a map of reducers where you can then have any key names of your choice,
// for example, counter and then point at your different reducers. Here, for example, add counterSlice.reduce. And then we also add auth let's say as a key
// and then here we add authSlice.reducer. And these individual reducers here will then automatically be merged together into one main reducer,
// which is exposed to this store. That's how we can combine multiple slices and their reducers.