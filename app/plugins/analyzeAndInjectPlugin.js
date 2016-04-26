const fs = window.require('fs') ;
const path = window.require('path');

import * as actionApplication from '../actions/application';
import * as actionPlugin from '../actions/plugin';

export default (store) => {

    const pluginPath = path.join(".", __dirname, "app", "plugins");

    fs.readdir(pluginPath, (err, files) => {
        if (err) {
            actionApplication.indicateError(err);
        }
        files.map((currentFile) => {
            return path.join(pluginPath, currentFile);
        }).filter((currentFile) => {
            if (fs.statSync(currentFile).isDirectory()) {
                try {
                    return fs.statSync(path.join(currentFile, "plugin.json")).isFile();
                } catch (e) {
                    return false;
                }
            }
            return false;
        }).forEach((currentPluginDir) => {
            let currentPluginDesc = fs.readFileSync(path.join(currentPluginDir, "plugin.json"), 'utf8');
            try {
                currentPluginDesc = JSON.parse(currentPluginDesc);
                store.dispatch(actionPlugin.addPlugin(currentPluginDesc.name, currentPluginDesc));
            } catch(e) {
                actionApplication.indicateError(JSON.stringify(e));
            }
        });
    });

};
