var MainSection = require('./MainSection.react');
var React = require('react');
var TodoStore = require('../stores/TodoStore');

function getTodoState() {
  return {
    allTodos: TodoStore.getAll()
  };
}

var TodoApp = React.createClass({
  getInitialState: function() {
    return getTodoState();
  },
  componentDidMount: function() {
    TodoStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    TodoStore.removeChangeListener(this._onChange);
  },
  render: function() {
    return ( 
      <div>
        <MainSection 
          allTodos = {this.state.allTodos}
          areAllComplete = {this.state.areAllComplete}
        />
      </div>
    );
  },
  _onChange: function() {
    this.setState(getTodoState());
  }
});

module.exports = TodoApp;
