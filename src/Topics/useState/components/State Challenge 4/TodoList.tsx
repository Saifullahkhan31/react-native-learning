import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

interface Todo {
    id: string,
    text: string
}

interface TodoItemProp {
    item: Todo
}

const TodoList = () => {

    const [text, setText] = useState('')
    const [todos, setTodos] = useState<Todo[]>([])

    const addTodo = () => {
    if (text.trim()) {
        setTodos([...todos, { id: Date.now().toString(), text }])
        setText('') // Clear the input field after adding a todo
    }
}

    const removeTodo = (id: string) => {
        setTodos(todos.filter( (todo) => todo.id !== id ))
    }

    const renderTodo = ({item}:TodoItemProp) => (

        <TouchableOpacity onPress={() => removeTodo(item.id)}>
        <View style={styles.taskContainer} >
        <Text style={styles.taskText } >{item.text}</Text>
        </View>

        </TouchableOpacity>

    )

    const handleSubmit = () => {
        addTodo()
    }

  return (
    <View>

      <Text style={{fontSize: 16, fontWeight: 'bold', alignSelf: 'center', marginTop: 20 }} >Todo List</Text>

    <TextInput style={{width: '20%', padding: 10, marginTop: 20, borderWidth: 1, borderColor: 'gray', borderRadius: 5, alignSelf: 'center' }}
    placeholder='Add a new task'
    value={text}
    onChangeText={setText}
    onSubmitEditing={handleSubmit}
    returnKeyType='done'
    />

    <View style={styles.buttonStyle}>
        <Button title='Add Task' onPress={addTodo} />
    </View>

    <FlatList
    data={todos}
    renderItem={renderTodo}
    keyExtractor={(item) => item.id}
    />

    </View>
  )
}

const styles = StyleSheet.create({
    buttonStyle: {
        width: '20%',
        alignSelf: 'center',
        marginTop: 10,
    },
    taskContainer: {
        width: '30%',           // Fixed width
        alignSelf: 'center',    // Centers the container
        marginTop: 20,
        padding: 10,            // Add some padding
        marginVertical: -10,      // Space between tasks
        backgroundColor: '#f9f9f9', // Optional: background to see the container
        borderRadius: 5,        // Optional: rounded corners
    },
    taskText: {
        textAlign: 'left',      // Left-align text inside container
        fontSize: 16,
    }
})

export default TodoList