import { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { styles } from './styles';

import { TasksDTO } from '../../dtos/TasksDTO';

type Props = TouchableOpacityProps & {
    toDoTask: TasksDTO;
    onRemove: () => void;
    onDone: () => void;
}

export function TodoList({ toDoTask, onRemove, onDone, ...rest }: Props) {

    return (
        <View style={styles.container}>
            <TouchableOpacity {...rest} style={styles.icons} onPress={onDone}>
                {
                    toDoTask.done ?
                        <Ionicons name={"checkmark-circle-outline"} size={20} color="#8284FA" />
                        :
                        <FontAwesome name={"circle-o"} size={20} color="#1E6F9F" />
                }
            </TouchableOpacity>

            <Text style={toDoTask.done ? styles.checkedText : styles.text} >
                {toDoTask.title}
            </Text>

            <TouchableOpacity {...rest} style={styles.icons} onPress={onRemove}>
                <Ionicons name="trash-outline" size={16} color="#808080" />
            </TouchableOpacity>
        </View>
    );
}