import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';

const MainLeftBar = (props) =>
{
    return <LeftNav
        docked={true}
        open={!!props.application.display_plugin_list}
    />
};

export default MainLeftBar;
