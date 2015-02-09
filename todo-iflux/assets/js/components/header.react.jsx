var React = require('react');
var msg = require('iflux/msg');
var PureMixin = require('iflux/mixins/pure-mixin');



/**
 * 封装header
 */
var Header = module.exports = React.createClass({

  mixins: [PureMixin],


  /**
   * 输入框change
   */
  onChange(e) {
    msg.emit('inputChange', e.target.value);
  },

  /**
   * ENTER保存
   */
  onKeyDown(e) {
    var keyCode = e.keyCode;
    var value = this.props.data;

    if (keyCode == 13 && value) {
      msg.emit('saveTodo', value);
    }
  },

  render() {
    console.log('header reader....');

    return (
      <header id="header">
        <h1>todos</h1>
        <input
          id="new-todo"
          placeholder="What needs to be done?"
          autofocus
          value={this.props.data}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}/>
        </header>
      );
    }
  });