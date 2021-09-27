import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const TASKS = [
  { id: "todo-0", name: "Learn how to write websites", description: "(-_-)", completed: true },
  { id: "todo-1", name: "Get a grade on the course", description: "I wish it would be 10!", completed: false },
  { id: "todo-2", name: "Forget how to write websites", description: ":)", completed: true },
  { id: "todo-3", name: "Learn how to write iOS-apps", description: "As fast as possible", completed: false },
  { id: "todo-4", name: "Become an iOS-developer", description: "Чрезвычайно поучительно видеть, как с подъемом настроения снижаются претензии на остроумие. Именно настроение заменяет остроумие, равно как и остроумию надобно стремиться заменить настроение, при котором дают о себе знать в противном случае заторможенные возможности наслаждения, в том числе удовольствие от бессмыслицы.", completed: false }
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={TASKS} />
  </React.StrictMode>,
  document.getElementById('root')
);
