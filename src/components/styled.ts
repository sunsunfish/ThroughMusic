import Box from '@mui/material/Box';
import { styled } from '@mui/system';

const FlexBox = styled(Box)({
  display: 'flex',
});

const CenteredFlexBox = styled(FlexBox)({
  justifyContent: 'center',
  alignItems: 'center',
});

const FullSizeCenteredFlexBox = styled(CenteredFlexBox)({
  width: '100%',
  height: '100%',
});

const LayoutBox = styled(Box)({
  display: 'grid',
  gridTemplateColumns: '200px 1fr',
  gridTemplateRows: 'repeat(3, 1fr)',
  height: '100vh',
  overflow: 'hidden',
});

export { FlexBox, CenteredFlexBox, FullSizeCenteredFlexBox, LayoutBox };
