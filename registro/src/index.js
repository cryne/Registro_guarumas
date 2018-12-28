import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/Menu';
//import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
});
ReactDOM.render(
<MuiThemeProvider theme={theme} >
    <BrowserRouter>
        <App/>
    </BrowserRouter>
</MuiThemeProvider>, document.getElementById('root'),
);


//serviceWorker.unregister();
