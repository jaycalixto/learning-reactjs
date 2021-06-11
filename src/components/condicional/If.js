import PropTypes from 'prop-types';

function MyIf ({ children, test}) {
    const elseChild = children.filter(child => child.type && child.type.name === 'MyElse')[0];

    const ifChildren = children.filter(child => child !== elseChild);

    if (test) {
        return ifChildren;
    } else if (elseChild) {
        return elseChild;
    }
    return false;
}

export function MyElse ({ children }) {
    return children;
}

MyIf.propTypes = {
    test: PropTypes.any,
    children: PropTypes.any
};

MyElse.propTypes = {
    children: PropTypes.any
};

export default MyIf;