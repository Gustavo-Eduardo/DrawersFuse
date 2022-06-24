import * as React from 'react';
import { styled } from '@mui/material/styles';
import NodeComponent from './NodeComponent';

const Container = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    gap: 20,
    width: '100%',
    height: 450,
}));

const NodeContainer = (props) => {

    return (
        <Container>
            <NodeComponent/>
            <NodeComponent/>
        </Container>
    );

}

export default NodeContainer