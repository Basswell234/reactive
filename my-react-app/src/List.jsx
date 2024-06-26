import PropTypes from 'prop-types';

function List(props){

    const itemList = props.items;
    const category = props.category;

    // fruits.sort((a,b) => a.name.localeCompare(b.name)) // Sorted in alphabetical order
    // fruits.sort((a,b) => b.name.localeCompare(a.name)) // Sorted in reverse alphabetical order
    const listItems = itemList.map(item => <li key={item.id}>
                                           {item.name}: &nbsp;
                                           <b>{item.calories}</b></li>);

    return(  <>
                <h1 className="list-category">{category}</h1>
                <ol className="list-items">{listItems}</ol>
             </>
           );
}

List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,name:PropTypes.string,calories:PropTypes.number}))

}

List.defaultProp = {         
  category: "category",
  items : []
}

export default List