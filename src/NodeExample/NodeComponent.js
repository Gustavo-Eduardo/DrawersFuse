import * as React from 'react';
import { styled } from '@mui/material/styles';

const Node = styled('div')(({ theme }) => ({
    width: 25,
    height: 25,
    borderRadius: '50%',
    backgroundColor: 'green',
}));

const handleClick = () => {
    console.log("im being clicked");
}

const NodeComponent = (props) => {

    return (
        <Node onClick={handleClick} />
    );

}

export default NodeComponent