export const DISPLAY_PLUGIN_LIST = 'DISPLAY_PLUGIN_LIST';
export const HIDE_PLUGIN_LIST = 'HIDE_PLUGIN_LIST';
export const TOGGLE_PLUGIN_LIST = 'TOGGLE_PLUGIN_LIST';
export const INDICATE_CURRENT_ACTION = 'INDICATE_CURRENT_ACTION';
export const INDICATE_ERROR = 'INDICATE_ERROR';

export const displayPluginList = () =>
{
    return {
        type: DISPLAY_PLUGIN_LIST
    }
};

export const hidePluginList = () =>
{
    return {
        type: HIDE_PLUGIN_LIST
    };
};

export const tooglePluginList = () =>
{
    return {
        type: TOGGLE_PLUGIN_LIST
    };
};

export const indicateCurrentAction = (text) =>
{
    return {
        type : INDICATE_CURRENT_ACTION,
        content : text
    }
};

export const indicateError = (text) =>
{
    return {
        type : INDICATE_ERROR,
        content : text
    }
};