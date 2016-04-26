import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import UnfoldMore from 'material-ui/lib/svg-icons/navigation/menu';
import UnfoldLess from 'material-ui/lib/svg-icons/navigation/chevron-left';

const MainAppBar = (props) => {
    const customStyle = {
        "zIndex":10001
    }, title = props.application.currentAction || "Bienvenue",
        iconLeftElement = props.application.display_plugin_list ?
            <IconButton onClick={props.openList}><UnfoldLess/></IconButton> :
            <IconButton onClick={props.openList}><UnfoldMore/></IconButton>;
    return (<AppBar
        title={title}
        iconElementLeft={iconLeftElement}
        style={customStyle}
    />);
};

export default MainAppBar;