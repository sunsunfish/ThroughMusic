import { styled } from '@mui/system';

const SwipeContainer = styled('div')({
  backgroundColor: 'skyblue',
  width: '700px',
  height: '350px',
  overflow: 'hidden',
  position: 'relative',
  margin: '0 auto',
});

const SwipeItemWrap = styled('ul')({
  display: 'flex',
  padding: '40px 0',
  margin: '0',
});

const SwipeItem = styled('li')({
  backgroundColor: 'orange',
  listStyle: 'none',
  width: '300px',
  height: '200px',
  flexShrink: '0',
  transition: 'all 0.5s ease-in-out',
  position: 'absolute',
  left: '25%',
  zIndex: '-1',
  img: {
    width: '100%',
    height: '100%',
  },
  '&.left': {
    zIndex: '1',
    transform: 'scale(1)translateX(-50%)',
  },
  '&.right': {
    zIndex: '2',
    transform: 'scale(1) translateX(50%)',
  },
  '&.center': {
    zIndex: '3',
    transform: 'scale(1.2) translateX(0)',
  },
});

const SwipeDotWrap = styled('ul')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  columnGap: '20px',
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  bottom: 0,
});
const SwipeDotItem = styled('ul')(({ theme }) => ({
  backgroundColor: '#e5e5e5',
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  flexShrink: '0',
  padding: '0',
  '&.active': {
    backgroundColor: theme.palette.primary.main,
    transition: 'all 0.5s ease-in-out',
  },
}));

const Nban = styled('div')({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  fontSize: '25px',
  color: 'black',
  userSelect: 'none',
  transition: 'all 0.3s',
});

export { SwipeContainer, SwipeItemWrap, SwipeItem, SwipeDotWrap, SwipeDotItem, Nban };
