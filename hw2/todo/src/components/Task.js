export default function Task(props) {
  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-label1" htmlFor={props.id}>
          {props.name}
        </label>
      </div>
      <label className="todo-label2" htmlFor={props.id}>
        {props.description}
      </label>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );

  return <li className="todo">{viewTemplate}</li>;
}
