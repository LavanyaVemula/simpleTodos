import './index.css'

const TodoItem = props => {
  const {eachItem, deleteItem} = props
  const {title, id} = eachItem
  const onDelete () => {
      deleteItem(id)
  }
  return(
      <li className="todo-item">
          <p className="name">{title}</p>
          <button type="button" className="delete-btn" onClick={this.onDelete}>Delete</button>
      </li>
  )
}

export default TodoItem