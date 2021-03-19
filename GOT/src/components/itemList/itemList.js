import React, {useState, useEffect} from 'react';
import './itemList.css';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';

function ItemList({getData, onItemSelected, renderItem}) {

    const [itemList, updateList] = useState([]);

    useEffect(() => {
        getData()
            .then( (data) => {
                updateList(data)
            })
            .catch( () => {this.onError()} )
    }, [])



    function renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;
            const label = renderItem(item)
            return (
                <li 
                    key={id}
                    className="list-group-item"
                    onClick={ () => onItemSelected(id) }>
                    {label}
                </li>
            )
        })
    }



    if (!itemList) {
        return (
            <div className="char-details rounded">
                <Spinner/>
            </div>
        )
    }        

    const items = renderItems(itemList);
    
    return(
        <ul className="item-list list-group">
            {items}
        </ul>
    );
    
}

export default ItemList;