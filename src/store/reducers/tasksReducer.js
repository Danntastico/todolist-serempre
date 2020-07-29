import { types } from '../../types/types';

/**
 * todos: []
 *
 */
const initialState = {
  todos: [],
  currentTodo: {
    description: '',
    dueDate: '',
    status: '',
    title: '',
    id: '',
  },
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.todosLoad:
      return {
        ...state,
        todos: [...action.payload],
      };
    case types.todosAddNew:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };

    case types.todosDelete:
      return {
        ...state,
        todos: state.todos.filter((i) => i.id !== action.payload),
      };

    case types.todosSetStatus: {
      return {
        ...state,
        todos: state.todos.map((i) =>
          i.id === action.payload.id
            ? {
                ...i,
                d: 'donde putas tienes el resto',
                status: action.payload.status,
              }
            : i
        ),
      };
    }
    case types.todosGetSingle: {
      return {
        ...state,
        currentTodo: action.payload,
      };
    }
    default:
      return state;
  }
};
