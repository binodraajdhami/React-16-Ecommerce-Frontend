
import React from 'react';
import http from './../../utils/httpClient';
import notify from './../../utils/notify';

export class EditProduct extends React.Component {

    constructor() {
        super();
        this.state = {
            isLoading: false,
            product: null,
            isSubmitting: false,
        }
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        })
        console.log('props >>', this.props);
        const { id } = this.props.match.params;
        console.log('check id >>', id);
        http.get(`/product/${id}`, {}, true)
            .then((data) => {

                this.setState({
                    isLoading: false,
                    product: data
                })
            })
            .catch(err => notify.handleError(err));
    }

    render() {

        let content = this.state.isLoading
            ? <p>Show some beautiful loader</p>
            : <form>
                <label>Name</label>
                <input type="text" name="name" value="kishor"></input>
            </form>
        return (
            <>
                <p>from edit</p>
                {content}
            </>
        )
    }
}