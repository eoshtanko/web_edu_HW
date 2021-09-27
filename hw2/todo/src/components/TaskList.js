import Task from "./Task";

export default function TaskList(props) {
    const taskList = props.tasks
        .map(task => (
            <Task
                id={task.id}
                name={task.name}
                description={task.description}
                completed={task.completed}
                key={task.id}
                toggleTaskCompleted={props.toggleTaskCompleted}
                deleteTask={props.deleteTask}
            />
        ));

    const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
    const headingText = `You have ${taskList.length} ${tasksNoun}`;

    return (
        <div>
            <h2 id="list-heading">
                {headingText}
            </h2>
            <ul
                role="list"
                className="todo-list stack-large stack-exception"
                aria-labelledby="list-heading"
            >
                {taskList}
            </ul>
        </div>
    );
}