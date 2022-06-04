import Box from '@mui/material/Box';

import { styled } from '@mui/system';

const LayoutFooterBox = styled(Box)(() => ({
  gridArea: '3 / 1 / 4 / 3',
  borderTop: '2px solid #f5f5f5',
  background: '#ffffff',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  justifyContent: 'space-between',
  position: 'relative',
}));

const ControlButtonBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  columnGap: '20px',
}));

const FunctionButtonBox = styled(ControlButtonBox)(() => ({
  justifyContent: 'end',
  paddingRight: '12px',
  color: '#4c4c4c',
}));

const ProgressBarBox = styled('div')(({ theme }) => ({
  background: theme.palette.primary.main,
  height: '2px',
  position: 'absolute',
  top: '-2px',
  left: '0',
  width: '0%',
  transition: 'width 0.5s ease',
}));

const MusicInfoBox = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: '1fr 115px',
  fontSize: '14px',
}));

export { LayoutFooterBox, ControlButtonBox, ProgressBarBox, MusicInfoBox, FunctionButtonBox };
