import React, { Component, PropTypes } from 'react';


export default class AddTodoInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: ''
    };
  }
  handleSubmit(e) {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
      this.setState({ text: '' });

    }
  }
  handleChange(e){
    this.setState({
      text: e.target.value
    });
  }
  render() {

    return (
      <input
       type="text"
       placeholder={this.props.placeholder}
       autoFocus="true"
       value={this.state.text}
       onChange={this.handleChange.bind(this)}
       onKeyDown={this.handleSubmit.bind(this)} />
    );
  }
}

AddTodoInput.propTypes = {
  onSave: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}
