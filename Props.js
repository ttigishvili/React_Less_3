import React, { Component } from 'react'

export class Props extends Component {
  constructor(props) {
    super(props)
    this.state = { users: [] }
  }

  componentDidMount() {
    this.setState((state, props) => {
      return { users: (state.users = props.users) }
    })
  }

  deleteRandomUser = () => {
    let i = (Math.random() * this.state.users.length) | 0
    return this.setState(this.state.users.splice(i, 1)[0])
  }
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {this.state.users.map(user => (
            <div key={user.id}>
              <span>Name: {user.name} </span> ,<span>Age: {user.age} </span>
            </div>
          ))}
        </div>
        <button onClick={() => this.deleteRandomUser()}>წაშლა </button>
        <span>There are {this.state.users.length} users left</span>
      </div>
    )
  }
}
