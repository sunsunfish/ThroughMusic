import TextField from '@mui/material/TextField';
import { Box, styled } from '@mui/system';

const FormInput = styled(TextField)({
  width: '100%',
});

const FormItem = styled(Box)({
  marginBottom: '10px',
});

export { FormItem, FormInput };
