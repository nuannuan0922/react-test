import PropTypes from 'prop-types';
import { connect } from 'dva';
// import ProductList from './models/products'

const ProductList = ({ dispatch, products }) => {
    function del(id) {
        dispatch({
            type: 'product/delete',
            payload: id
        })
    }

    const rows = products.map((item) => {
        return (
            <tr key={item.id}>
                <td>{item.name}</td>
                <td><button onClick={() => del(item.id)}>删除</button></td>
            </tr>
        );
    })

    return (
        <table>
            <thead>
                <tr>
                    <td>Name</td><td>Actions</td>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}

ProductList.propTypes = {
    products: PropTypes.array.isRequired
}

// export default ProductList;
export default connect(state => {return {
    products: state.product.list || []
}})(ProductList);