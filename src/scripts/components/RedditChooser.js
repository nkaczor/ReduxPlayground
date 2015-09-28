import React, { Component, PropTypes } from 'react';
import ListDialog from './ListDialog';

export default class RedditChooser extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: '',
      showList: false

    };
  }

  handleInputChange(e){
    this.setState({
      text: e.target.value
    });
  }
  handleInputSubmit(e) {
    if (e.which === 13) {
      this.handleInputSave();
    }
  }
  handleInputSave(){
    this.props.onSelect(this.state.text)
  }
  handleShowList(){
    this.setState({showList:true});
  }
  handleSelectFromList(reddit){
    this.props.onSelect(reddit)
    this.setState({showList:false});
  }
  render() {
    var {showList, text} = this.state;
    var list=(showList)?
    (<ListDialog onSelectFromList={this.handleSelectFromList.bind(this)}/>)
    :'';

    return (
      <div>
        {list}
        <input
         type="text"
         autoFocus="true"
         value={text}
         onChange={this.handleInputChange.bind(this)}
         onKeyDown={this.handleInputSubmit.bind(this)}
          />
          <a className="btn btn-large btn-positive" onClick={this.handleInputSave.bind(this)}>Search</a>
          <a className="btn btn-large btn-additional" onClick={this.handleShowList.bind(this)}>Select from list</a>
      </div>
    );
  }
}
