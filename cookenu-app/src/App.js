import React from "react"
import  Router  from "./Router/Route"
import {ThemeProvider} from '@material-ui/core/styles'
import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createTheme();
theme = responsiveFontSizes(theme);

const App = () => {
  return (
      <ThemeProvider theme={theme}>
        <Router/>
      </ThemeProvider>
    )
}

export default App
