import React from 'react';
import { connect } from 'react-redux';
import { fetch_product, set_page_number } from './../../actions/products/product_actions';
import LoaderComponent from '../loader/loader.component';
class ListProductComponent extends React.Component {

    componentDidMount() {
        this.props.fetch_product(this.props.pageNumber, this.props.pageSize);
    }
    componentWillReceiveProps() {
        // TODO investigate either  component will receive props
    }

    previous = (e) => {
        var currentPage = this.props.pageNumber - 1;
        this.props.set_page_number(currentPage);
        this.props.fetch_product(this.props.pageNumber, this.props.pageSize);

    }

    next = (e) => {
        var currentPage = this.props.pageNumber + 1;
        this.props.set_page_number(currentPage);
        this.props.fetch_product(this.props.pageNumber, this.props.pageSize);

    }


    render() {
        console.log('this.props >>', this.props);
        let imgUrl = process.env.REACT_APP_IMG_URL;

        let data = this.props.isLoading
            ? <LoaderComponent></LoaderComponent>
            : (this.props.products || []).map((product, i) => {
                let img_url = ` ${imgUrl}${product.image}`
                return (
                    <tr key={product._id}>
                        <td>{i + 1}</td>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td>{product.price}</td>
                        <td>{product.color ? product.color : 'N/A'}</td>
                        <td>
                            <img src={img_url} alt="product_img.png" width="200px"></img>
                        </td>
                    </tr >
                )
            })
        return (
            <div>
                <h2>View Products</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>S.N</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Color</th>
                            <th>Images</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data}
                    </tbody>
                </table>
                <button onClick={this.previous} className="btn btn-success">Previous</button>
                <button onClick={this.next} className="btn btn-success">Next</button>
            </div >
        )
    }
}
// what components take in
const mapStateToProps = (state) => {
    return {
        products: state.product.data,
        isLoading: state.product.isLoading,
        pageSize: state.product.pageSize,
        pageNumber: state.product.pageNumber

    }
};
// what components gives out
const mapDispatchToProps = (dispatch) => ({
    fetch_product: (pageNumber, pageSize) => { dispatch(fetch_product(pageNumber, pageSize)) },
    set_page_number: (pageNumber) => { dispatch(set_page_number(pageNumber)) }
});

export const ListProduct = connect(mapStateToProps, mapDispatchToProps)(ListProductComponent)