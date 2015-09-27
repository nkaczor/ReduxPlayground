import React, { Component, PropTypes } from 'react';
import VisibilityFilters from '../constants/VisibilityFilters';
const {SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} = VisibilityFilters;
export default class Filter extends Component {


  handleClick(e){
    this.props.onChange(this.props.filter)
  }
  render() {

    const filters = {
      [SHOW_ALL]: 'All',
      [SHOW_COMPLETED]: 'Complete',
      [SHOW_ACTIVE]: 'Active'
    }
    const { filter } = this.props;
    return (
      <div>
          <a href="#" onClick={this.handleClick.bind(this)}>{filters[filter]}</a>
      </div>

    );
  }
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string
}
