<template>
    <div id="app" class="container">
        <h1>Halo ini state dari global : {{ $store.state.count }}</h1>
        <div>My Activity</div>
        <div>Done todo: {{ $store.getters.doneTodos }}</div>
        <div class="row">
            <div class="col-6">
                <input v-model="input" class="form-control" />
            </div>
            <div class="col-2">
                <button
                    class="btn btn-primary btn-small"
                    @click="addTodo(input)"
                >
                    tambah
                </button>
            </div>
        </div>

        <Todos />
    </div>
</template>

<script>
import Todos from "./components/Todos.vue";

export default {
    name: "App",
    components: {
        Todos,
    },
    data() {
        return {
            input: "",
        };
    },
    methods: {
        addTodo(input) {
            this.$store.dispatch("addTodo", input);
        },
    },
    // computed: {
    //     doneTodos() {
    //         return this.$store.state.todos.filter((todo) => todo.isDone).length;
    //     },
    // },
};
</script>

<style>
#app {
    width: 700px;
}
</style>
