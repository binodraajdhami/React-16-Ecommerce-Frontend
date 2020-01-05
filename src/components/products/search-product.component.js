import React from 'react';
import http from './../../utils/httpClient';
import notify from './../../utils/notify';

export const DefaultForm = {
    name: null,
    category: null,
    description: null,
    brand: null,
    price: null,
    image: null,
    color: null,
    batchNo: null,
    manuDate: null,
    expiryDate: null,
    origin: null,
    discountedItem: null,
    discountType: null,
    discountValue: null,
    weight: null,
    tags: null,
}

export class SearchProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                ...DefaultForm
            },
            error: {
                ...DefaultForm
            },
            validForm: false,
            isSubmitting: false,
            isLoading: false,
            categories: [],
            showName: false,
            allProducts: []
        }
    }

    componentDidMount() {
        http.get('/product/search', { body: {} }, true)
            .then((data) => {
                let categories = [];
                data.forEach((item, i) => {
                    if (categories.indexOf(item.category) === -1) {
                        categories.push(item.category);
                    }
                });
                this.setState({
                    categories,
                    allProducts: data,
                });
            })
    }

    handleChange = (e) => {
        const { type, checked, name } = e.target;
        let { value } = e.target;
        if (type === 'checkbox') {
            value = checked;
        }
        console.log('name >>', name);
        if (name === 'category') {
            this.setState({
                showName: true
            })
        }
        this.setState((previousState) => ({
            data: {
                ...previousState.data,
                [name]: value
            }
        }), () => {
            this.validateErrors(name);
        })
    }
    validateErrors(fieldName) {
        let error;

        // prepare logic
        switch (fieldName) {
            case 'name':
                error = this.state.data[fieldName].length ? '' : 'Name is required'
                break;
            case 'category':
                error = this.state.data[fieldName].length ? '' : 'Category is required'
                break;
            default:
                break;
        }

        this.setState((previousState) => ({
            error: {
                ...previousState.error,
                [fieldName]: error
            }
        }), () => {
            this.validateForm();
        });
    }

    validateForm() {
        var errors = Object
            .values(this.state.error)
            .filter(err => err);

        this.setState({
            validForm: errors.length === 0,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // this.setState({
        //     isSubmitting: true
        // })
        http.post('/product/search', { body: this.state.data }, true)
            .then((data) => {
                if (!data.length) {

                    notify.showSuccess("no any product matched your search query");
                }
                // this.props.history.push('/product/view');
            })
            .catch(err => {
                this.setState({ isSubmitting: false });
                notify.handleError(err)
            });
    }


    // mandatory method for stateful components
    render() {
        let selectOptions = this.state.categories.map((item, i) => (
            <option key={i} value={item}>{item}</option>
        ))
        let selectOptionsForName = this.state.allProducts
            .filter(item => item.category === this.state.data.category)
            .map((item, i) => (
                <option key={i} value={item.name}>{item.name}</option>
            ))


        // .map(item => {
        //     <option value={item}>{item}</option>
        // })
        // sake samma application ko logic render vitra
        let button = this.state.isSubmitting
            ? <button type="submit" disabled className="btn btn-info">submitting...</button>
            : <button disabled={!this.state.validForm} type="submit" className="btn btn-primary">Submit</button>

        let nameContent = <div>
            <label htmlFor="name">name</label>
            <select name="name" className="form-control" onChange={this.handleChange}>
                {selectOptionsForName}
            </select>
            <p>{this.state.error.name}</p>
        </div>


        let name = this.state.showName
            ? nameContent
            : '';



        return (
            <div>
                <h2>Search Product</h2>
                <form className="form-group" onSubmit={this.handleSubmit} noValidate>
                    <label htmlFor="category">category</label>
                    <select name="category" className="form-control" onChange={this.handleChange}>
                        {selectOptions}
                    </select>
                    <p>{this.state.error.category}</p>
                    {name}
                    <label htmlFor="brand">brand</label>
                    <input className="form-control" id="brand" type="text" placeholder="brand" name="brand" onChange={this.handleChange} />
                    <label htmlFor="price">price</label>
                    <input className="form-control" id="price" type="text" placeholder="price" name="price" onChange={this.handleChange} />
                    <label htmlFor="color">color</label>
                    <input className="form-control" id="color" type="text" placeholder="color" name="color" onChange={this.handleChange} />
                    <label htmlFor="weight">weight</label>
                    <input className="form-control" id="weight" type="text" placeholder="weight" name="weight" onChange={this.handleChange} />
                    <label htmlFor="tags">tags</label>
                    <input className="form-control" id="tags" type="text" placeholder="tags" name="tags" onChange={this.handleChange} />
                    <label htmlFor="manuDate">manuDate</label>
                    <input className="form-control" id="manuDate" type="text" placeholder="manuDate" name="manuDate" onChange={this.handleChange} />
                    <label htmlFor="expiryDate">expiryDate</label>
                    <input className="form-control" id="expiryDate" type="text" placeholder="expiryDate" name="expiryDate" onChange={this.handleChange} />

                    <br />
                    {button}
                </form>
            </div>
        )
    }
}