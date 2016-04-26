export const ADD_PLUGIN = 'ADD_PLUGIN';
export const REMOVE_PLUGIN = 'REMOVE_PLUGIN';

export const addPlugin = (logicalName, description) =>
{
    return {
        type: ADD_PLUGIN,
        logicalName: logicalName,
        description: description
    }
};

export const hidePlugin = (logicalName) =>
{
    return {
        type: REMOVE_PLUGIN,
        logicalName : logicalName
    };
};