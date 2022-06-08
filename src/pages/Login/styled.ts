import TextField from '@mui/material/TextField';
import { Box, styled } from '@mui/system';

const MyTextField = styled(TextField)({
  width: '100%',
});

const FormItem = styled(Box)({
  marginBottom: '10px',
});

export { FormItem, MyTextField };
