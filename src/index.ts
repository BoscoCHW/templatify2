import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the templatify2 extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'templatify2:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension templatify2 is activated!');
  }
};

export default plugin;
