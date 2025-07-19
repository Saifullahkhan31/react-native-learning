import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useReducer, useState } from 'react'
import { AntDesign } from '@expo/vector-icons'

interface Todo {
    id: string,
    text: string
}

interface State {
    todos: Todo[]
}

interface AddTodoAction {
    type: 'ADD_TODO'
    payload: string
}

interface RemoveTodoAction {
    type: 'REMOVE_TODO'
    payload: string
}

type Action = AddTodoAction | RemoveTodoAction

const initialState: State = { todos: [] }

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                todos: [
                    ...state.todos, { id: Date.now().toString(), text: action.payload }
                ]
            }
        case 'REMOVE_TODO':
            return {
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }

        default:
            return state
    }
}

const Todo = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const [inputValue, setInputValue] = useState('')

    const handleAddTodo = () => {
        if (inputValue.trim()) {
            dispatch({
                type: 'ADD_TODO', payload: inputValue
            })
            setInputValue('')
        }
    }

    const handleRemoveTodo = (id: string) => {
        dispatch({
            type: 'REMOVE_TODO', payload: id
        })
    }

    return (
        <View>

            <Text style={styles.titleText} >Todo App using useReducer</Text>

            <TextInput style={styles.textBox}
                placeholder='Enter todo'
                placeholderTextColor="#999"
                value={inputValue}
                onChangeText={setInputValue}
                onSubmitEditing={handleAddTodo}
                returnKeyType='done'
            />
            <View style={styles.addTodoButton} >
            <Button title='Add todo' onPress={handleAddTodo} />
            </View>

            <FlatList
                data={state.todos}
                keyExtractor={(item) => item.id}
                renderItem={
                    ({ item }) => (
                        <View style={styles.todoListStyle}>
                            <Text>{item.text}</Text>
                            <TouchableOpacity onPress={() => handleRemoveTodo(item.id)}>
                                <AntDesign name='delete' size={20} color="red" />
                            </TouchableOpacity>
                        </View>
                    )
                }
            />

        </View>
    )
}

const styles = StyleSheet.create({
    titleText: {
        alignSelf: 'center',
        fontSize: 20,
        padding: 20,
        fontWeight: 'bold'
    },
    textBox: {
        alignSelf: 'center',
        height: 15,
        padding: 20,
        width: '20%',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
    },
    todoListStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "center",
        paddingVertical: 10,
        width: 350,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    removeButton: {
        color: 'red'
    },
    addTodoButton: {
        alignSelf: 'center',
        padding: 5,
        paddingTop: 10

    }
})

export default Todo