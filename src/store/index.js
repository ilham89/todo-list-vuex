import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 1000,
        todos: [
            {
                id: 1,
                name: "Membaca",
                isDone: false,
            },
        ],
    },
    getters: {
        doneTodos: (state) => {
            return state.todos.filter((todo) => todo.isDone).length;
        },
    },
    mutations: {
        ADD_TODO(state, input) {
            state.todos.push({
                id: state.todos.length + 1,
                name: input,
                isDone: false,
            });
        },
        REMOVE_TODO(state, index) {
            state.todos.splice(index, 1);
        },
        UPDATE_TODO(state, todo) {
            const index = state.todos.findIndex((t) => t.id === todo.id);

            state.todos[index] = {
                ...state.todos[index],
                name: todo.name,
            };
        },
    },
    actions: {
        addTodo({ commit }, input) {
            commit("ADD_TODO", input);
        },
        removeTodo({ commit }, index) {
            commit("REMOVE_TODO", index);
        },
        updateTodo({ commit }, todo) {
            commit("UPDATE_TODO", todo);
        },
    },
});

export default store;
