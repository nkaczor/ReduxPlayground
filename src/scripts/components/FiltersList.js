import React, { Component, PropTypes } from 'react';
import Filter from './Filter';
import VisibilityFilters from '../constants/VisibilityFilters';
const {SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED} = VisibilityFilters;
export default class FiltersList extends Component {

  render() {

    return (
      <div className="filters">
        {[SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map(filter =>
          <Filter filter={filter}
          selectedFilter={this.props.selectedFilter}
          onChange={this.props.onChange} />
         )}
      </div>
    );
  }
}

FiltersList.propTypes = {
  onChange: PropTypes.func.isRequired,

}
