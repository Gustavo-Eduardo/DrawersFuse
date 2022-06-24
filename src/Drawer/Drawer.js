import * as React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import DrawerCard from '../Cards/DrawerCard';
import "./Drawer.css"

const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
    height: '100%',
    backgroundColor:
        theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
}));

function SwipeableEdgeDrawer(props) {
    const { window } = props;
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    // This is used only for the example
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div onMouseOver={toggleDrawer(true)}>
            {/* <Global

                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: `calc(25% - ${drawerBleeding}px)`,
                        overflow: 'visible',
                    },
                }}
            /> */}
            <SwipeableDrawer
                container={container}
                anchor="bottom"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <StyledBox
                    style={{
                        maxHeight: 200,
                        overflow: "auto"
                    }}

                    sx={{
                        position: 'absolute',
                        top: -drawerBleeding,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        visibility: 'visible',
                        right: 0,
                        left: 0,
                    }}
                >
                    <Puller />
                    <Typography sx={{ p: 2, color: 'text.secondary' }}>51 results</Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", px: 6, gap: 5 }}>
                        <DrawerCard dataIds={{
                            title: "Start",
                            desc: `
                Profit: 137.34


                `
                        }} />
                        <DrawerCard dataIds={{
                            title: "Stop 1",
                            desc: "Profit: 137.34"
                        }} />
                        <DrawerCard dataIds={{
                            title: "Stop 2",
                            desc: "Profit: 137.34"
                        }} />
                        <DrawerCard dataIds={{
                            title: "End",
                            desc: "Profit: 137.34"
                        }} />
                        <DrawerCard dataIds={{
                            title: "End",
                            desc: "Profit: 137.34"
                        }} />
                        <DrawerCard dataIds={{
                            title: "End",
                            desc: "Profit: 137.34"
                        }} />
                        <DrawerCard dataIds={{
                            title: "End",
                            desc: "Profit: 137.34"
                        }} />

                    </Box>
                </StyledBox>
                <StyledBox
                    sx={{
                        px: 2,
                        pb: 2,
                        height: '100%',
                        overflow: 'auto',
                    }}
                >
                </StyledBox>
            </SwipeableDrawer>
        </div>
    );
}

SwipeableEdgeDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default SwipeableEdgeDrawer;