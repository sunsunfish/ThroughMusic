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
  left: '28.5%',
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

const ArrowContainer = styled('div')({
  width: '40px',
  height: '60px',
  margin: '10% 0 0 10%',
  position: 'absolute',
  backgroundColor: 'blue',
  left: '100px',
});

const Arrow = styled('div')({
  position: 'relative',
  top: '27%',
  left: '31%',
  width: '20px',
  height: '20px',
  borderTop: '3px solid #fff',
  borderRight: '3px solid #fff',
  transform: 'rotate(-135deg)',
});

export {
  SwipeContainer,
  SwipeItemWrap,
  SwipeItem,
  SwipeDotWrap,
  SwipeDotItem,
  ArrowContainer,
  Arrow,
};
