import React from 'react'
import './App.css'

export default class Todo extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isHover: false,
    }
  }

  render() {
    const { done, name } = this.props
    //console.log(`todo ${name} randers`)
    return (
      <div
        className={done ? 'done' : 'todo'}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <input
          type="checkbox"
          checked={done}
          onChange={this.handleCheck}
        />
        <span>{name}</span>
        {this.state.isHover && (
          <button
            className="delete"
            onClick={this.handleDelete}
          >
            delete
          </button>
        )}
      </div>
    )
  }

  handleCheck = (e) =>
    this.props.onDone(e.target.checked, this.props.id)

  handleDelete = () => {
    this.props.onDelete(this.props.name)
  }

  handleMouseEnter = () => this.setState({ isHover: true })
  handleMouseLeave = () => this.setState({ isHover: false })
}
