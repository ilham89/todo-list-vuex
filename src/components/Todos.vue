<template>
    <div class="hello">
        <ul class="list-group mt-3">
            <li
                class="list-group-item"
                v-for="(todo, index) in $store.state.todos"
                :key="index"
            >
                <div class="row justify-content-between align-items-center">
                    <div class="col-6">
                        <div v-if="isEditing === index">
                            <input v-model="todo.name" />
                        </div>
                        <div v-else>
                            <s v-if="todo.isDone">
                                {{ todo.name }}
                            </s>
                            <div v-else>
                                {{ todo.name }}
                            </div>
                        </div>
                    </div>
                    <div class="col-3 d-flex justify-content-between">
                        <input
                            type="checkbox"
                            v-model="todo.isDone"
                            class="mt-3"
                        />
                        <button
                            class="btn btn-warning btn-small ms-2"
                            @click="
                                updateTodo(todo);
                                handleUpdate(index);
                            "
                        >
                            {{ isEditing === index ? "Simpan" : "Edit" }}
                        </button>
                        <button
                            class="btn btn-danger btn-small ms-2"
                            @click="removeTodo(index)"
                        >
                            hapus
                        </button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Todos",
    data() {
        return {
            isEditing: null,
        };
    },
    methods: {
        removeTodo(index) {
            this.$store.dispatch("removeTodo", index);
        },
        updateTodo(todo) {
            this.$store.dispatch("updateTodo", todo);
        },
        handleUpdate(index) {
            if (this.isEditing === index) {
                this.isEditing = null;
                return;
            }
            this.isEditing = index;
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
