import { createTheme } from '@material-ui/core/styles';
import { primaryCor, neutroCor } from './colors';

const theme = createTheme({
    palette: {
    primary: {
        main: primaryCor [500],
        contrastText: "white"
    },
    text: {
        primary: neutroCor [500],
        },
    },
});

export default theme