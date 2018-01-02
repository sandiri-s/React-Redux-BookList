import React, {Component} from 'react'
import {connect} from 'react-redux'


 class BookList extends Component{

renderlist(){

  return this.props.books.map((book) => {

      return (<li className="list-group-item"> {book.title} </li>);
  } );
}

render()
{
return (
<ul className = "list-group col-sm-4">
{this.renderlist()}
</ul>

)
}

}

function mapStateToProps(state){

return ({
books: state.books
});

}

export default connect(mapStateToProps)(BookList);
