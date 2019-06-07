import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

class ApplicationViews extends Component {
    render() {
        return (
            <div>
                <h3>Hello World</h3>
            </div>
        );
    }
}

export default withRouter(ApplicationViews);

