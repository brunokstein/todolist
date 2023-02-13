import { useState } from 'react';
import { Text, View, StatusBar, Image, TextInput, TouchableOpacity, FlatList, Alert, Keyboard } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles';

import { TodoList } from '../../components/TodoList';

import { TasksDTO } from '../../dtos/TasksDTO';

export function Home() {

    const [task, setTask] = useState('');

    const [taskList, setTaskList] = useState<TasksDTO[]>([]);

    function handleAddTask(task: string) {
        if (!task && task === '')
            return;

        const newTask = {
            id: new Date().getTime(),
            title: task,
            done: false
        }

        if (taskList.includes(newTask)) {
            return Alert.alert("Tarefa repetida", "Já existe essa tarefa!")
        }

        setTaskList(prevState => [...prevState, newTask]);
        setTask('');
        Keyboard.dismiss();
    }

    function handleTaksDone(taskId: number) {
        const updatedTask = taskList.map(task => ({...task}));

        const foundItem = updatedTask.find(item => item.id === taskId);

        if (!foundItem)
            return;
            
        foundItem.done = !foundItem.done;    
        setTaskList(updatedTask);
    }

    function handleRemoveTask(taskRemove: TasksDTO) {
        
        return Alert.alert("Remover", `Tem certeza de que deseja remover esta tarefa: ${taskRemove.title} ?`, [
            {
                text: "Sim",
                onPress: () => setTaskList(prevState => prevState.filter(item => item.id !== taskRemove.id))
            },
            {
                text: "Não",
                style: "cancel"
            }
        ]); 
    }

    const createdTasks = taskList.filter(item => item.done === false);
    const doneTasks = taskList.filter(item => item.done === true);

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            <View style={styles.header}>
                <Image
                    source={require("../../assets/Logo.png")}
                    style={styles.image}
                />
            </View>

            <View style={styles.body}>
                <View style={styles.scoreView}>

                    <View style={styles.creatAndConcludedViews}>
                        <Text style={styles.textCreated}>Criadas</Text>
                        <Text style={styles.counterText}>{createdTasks.length}</Text>
                    </View>

                    <View style={styles.creatAndConcludedViews}>
                        <Text style={styles.textConcluded}>Concluidas</Text>
                        <Text style={styles.counterText}>{doneTasks.length}</Text>
                    </View>
                </View>

                <FlatList
                    style={styles.form}
                    data={taskList}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) => (
                        <TodoList
                            toDoTask={item}
                            onRemove={() => handleRemoveTask(item)}
                            onDone={() => handleTaksDone(item.id)}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <View style={styles.listEmptyView}>
                            <MaterialCommunityIcons name="clipboard-text-outline" size={56} color="#808080" />
                            <Text style={styles.listEmptyTitle}>
                                Você ainda não tem tarefas cadastradas
                            </Text>
                            <Text style={styles.listEmptySubtitle}>
                                Crie tarefas e organize seus itens a fazer
                            </Text>
                        </View>
                    )}
                />
            </View>

            <View style={styles.addToListView}>
                <TextInput
                    multiline
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#808080"
                    keyboardType="default"
                    onChangeText={setTask}
                    value={task}
                    onSubmitEditing={() => handleAddTask(task)}
                    returnKeyType="done"
                />
                <TouchableOpacity style={styles.buttonAdd} onPress={() => handleAddTask(task)}>
                    <Ionicons name="add-circle-outline" size={24} color="#FFF" />
                </TouchableOpacity>
            </View>

        </View>
    )
}