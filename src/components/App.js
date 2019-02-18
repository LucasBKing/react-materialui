import React, { Component } from 'react';
import { Header, Footer } from './Layouts/index'
import Exercises from './Exercises';
import { muscles, exercises } from '../store';

class App extends Component {
    state = {
        exercises
    }

    getExercisesByMuscles() {
        return Object.entries( 
            this.state.exercises.reduce((exercises, exercise) => {
                const { muscles } = exercise;
                
                exercises[muscles] = exercises[muscles]
                    ? [...exercises[muscles], exercise]
                    : [exercise];
                
                return exercises;
            }, {})
        )
    }
    render() {
        const exercises = this.getExercisesByMuscles();
        return (
            <div>
                <Header />
                <Exercises exercises={exercises}/>
                <Footer  muscles={muscles}/>
            </div>
        );
    }
};

export default App;