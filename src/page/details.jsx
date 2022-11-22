import React, { Component } from 'react'
import { connect } from 'react-redux';

class digimon extends Component {
  handClick = () => {
    const { history } = this.props;
    history.push('/');
  }
  render() {
    const { time } = this.props;
    return (
      <div className='digimon'><h1> Liga { time[0].country.name }
        <button type='button' onClick={ this.handClick } className='back'>
           <h2>{ time[0].name }</h2>
        </button></h1>
        <div className='digimon-detail'>
          <h2>{ time[0].short_code }</h2>
          <img src={ time[0].logo } alt={ time[0].name } className='detail-img'/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  time: state.reducerFetch.newPok,
});

export default connect(mapStateToProps)(digimon);
