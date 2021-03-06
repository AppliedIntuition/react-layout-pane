import React, { Component } from 'react';
import assign from 'object-assign';
import PropTypes from 'prop-types';

export default class Layout extends Component {

    render() {
        let classes = ['Layout'];
        if (this.props.className) {
            classes.push(this.props.className);
        }
        classes.push(this.props.type);

        let style = {
            display: 'flex',
            flex: 1,
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        };

        style.flexDirection = (this.props.type === 'column') ? 'column' : 'row';

        if (this.props.style) {
            assign(style, this.props.style);
        }

        return <div className={classes.join(' ')} style={style}>{this.props.children}</div>;
    }
}


Layout.propTypes = {
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    style: PropTypes.object
};

Layout.defaultProps = {
    type: 'row'
};

