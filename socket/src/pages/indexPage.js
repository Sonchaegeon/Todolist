import React from 'react';

const IndexPage = (props) => {
    React.useEffect(() => {
        const token = localStorage.getItem('Token');
        if(!token) {
            props.history.push("/login");
        } else {
            props.history.push("/dashboard");
        }
        // eslint-diable-nextline
    }, [0])

    return (
        <div>
        </div>
    );
};

export default IndexPage;