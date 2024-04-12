import PropTypes from 'prop-types';

export const RowItemView = ({ id, product, price, quantity, handlerDeletedItem}) => {

    return (
        <>
            <tr>
                <td>{product}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <th><button className= "btn btn-danger" 
                onClick={() => handlerDeletedItem(id)}>Eliminar</button></th>
            </tr>
        </>
    )
}

RowItemView.propTypes = {
    product: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
}