import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchBook, fetchBookSearch } from '../services/fetchApi';
import { requiretName, newName } from '../actions/action';

const message = 'Carregando ...';
class initialPage extends Component {
  state = {
    msg: false,
    liga: '',
  }

  async componentDidMount(){
    const result = await fetchBook();
    if (result.length < 1){
      this.setState({ msg: false })
    } else {
      const { dispatch } = this.props;
      dispatch(requiretName(result));
      this.setState({ msg: true })
    }
  }

  handClick = async (name) => {
    const { dispatch, history, book } = this.props;
    const result = book.filter((item) => item.name.includes(name));
    dispatch(newName(result));
    history.push('/pok');
  }
  onChench = ({target}) => {
    const { value } = target;
    this.setState({ liga: value})
  }

  clickMe = async () => {
    const { liga } = this.state;
    const { dispatch } = this.props;
    if (liga.length > 0) {
      const result = await fetchBookSearch(liga);
      dispatch(requiretName(result));
    } else {
      alert('ID inválido');
    }
  }
  render() {
    const { book } = this.props;
    /* console.log(book[0].country.name); */
    const { msg } = this.state;
    const list = book.map((item, index) => (
      <div key={ index } className= 'div-li'>
        <li>{ item.name }</li>
        <li>{ item.short_code }</li>
        <li>{ item.country.name }</li>
        <button type='button' 
          className= 'div-li'
          onClick={ () => this.handClick(item.name) }
          >
          <img src={ item.logo } alt={ item.name } />
        </button>
      </div>
    ));
    return (
       <div className='div-principal'>
       <h1>Escolha uma liga pelo ID</h1>
       <input 
          type="text" 
          id="name" 
          name="name" 
          onChange={ this.onChench}
          className='input'
       />
       <button type='button' onClick={ this.clickMe } className='but'>BUSCAR</button>
       { !msg ? <h1 className='msg'>{ message }</h1> : <ol className="App-header"> { list }</ol> }
       </div>
    )
  }
};

const mapStateToProps = (state) => ({
  book: state.reducerFetch.books,
});

export default connect(mapStateToProps)(initialPage);
