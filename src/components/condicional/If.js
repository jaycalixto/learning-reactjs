import PropTypes from 'prop-types';

function MyIf ({ children, test}) {
    return test? children : false;
}

MyIf.propTypes = {
    test: PropTypes.bool,
    children: PropTypes.any
};

export default MyIf;