import React from 'react';

const withClass = (WrappedElement, className) => {
    return  props => {
        return (
            <div className={className}>
                <WrappedElement {...props}/>
            </div>
        );
    };
};

export default withClass;