import React from 'react';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        id: '',
        compeleted: false
      }
    }


  }
  handleInput = e => {
    this.setState({
      currentItem: {
        text: e.target.value,
        id: Date.now(),
        compeleted: false
      }
    })
  }
  addItem = e => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      this.setState({
        items: [...this.state.items, newItem], //concatination
        currentItem: {
          text: '',
          id: '',
          completed: false,
        }
      })
    }
  }
  deleteTodo = id => {
    this.setState({
      items: this.state.items.filter(el => el.id !== id)
    })
  }
  completeTodo = todo => {
    this.setState({
      items: this.state.items.map(el => el.text === todo.text ? { ...todo, completed: !todo.completed } : el)
    })
  }

  render() {
    return (
      <div>
        <div className="App">
          <header>
            <div className="navmenu">
              <div className="navtext" >
                <h1>To-Do App!</h1>
                <p>Add New To-Do</p>
              </div>
              <form id="to-do" onSubmit={this.addItem}>
                <input type="text" placeholder="Enter new task"
                  value={this.state.currentItem.text}
                  onChange={this.handleInput} />
                <button type="submit">Add</button>
              </form>
            </div>
          </header>
          <h2>Let's get some work done!</h2>
          { this.state.items.map((el, index) => (
            
              <div className="buttoms" key={index}>
                <button onClick={() => this.completeTodo(el)}>{el.completed ? 'undo' : 'complete'} </button>
                <button onClick={() => this.deleteTodo(el.id)}>Delete</button>
                <h3 className={el.completed ? 'crossed' : undefined}>{el.text}</h3>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
export default App;
