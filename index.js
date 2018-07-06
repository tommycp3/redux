// initial state

const initialState = {
    todos: [
        {
            text: 'Eat Food'
        },
        {
            text: 'Exercise'
        }
    ]
}


// action types
// there are 2 types of actions, Action Types and Action Creators

// create a simple action type
const ADD_TODO = 'ADD_TODO';

// create action creators
function addTodo(text) {
    return {
        type: ADD_TODO,
        payload: text
    }
}

// reducers
function todoReducer(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state.todos, { text: action.payload }];
        default:
            return state;

    }

}

// console.log (message, object)
console.log('Initial State: ', initialState);

// make changes to initial state
const action = addTodo('Make it work');
const newSate = todoReducer(initialState, action);

console.log(newSate);
