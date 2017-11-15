import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import App from 'app/components/App';

class AppContainer extends React.Component {
    static propTypes = {};

    render() {
        return (
            <App />
        );
    }
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(AppContainer);
