import { styled } from '@mui/system';

const Content = styled('div')({
  width: '1200px',
  height: '367px',
  margin: '100px auto 0',
  backgroundColor: 'red',
});

const ImageList = styled('div')({
  width: '1200px',
  height: '336px',
  backgroundColor: '#2758d8',
  margin: '0',
  // 'ImageList>u1':{
  //   width: '100%',
  //   height: '100%',
  // },
  // 'ImageList>u1>li':{
  //   position:"absolute",
  //   width: '730px',
  //   height: '336px',
  // }
});

const Lineb = styled('div')({
  width: '1200px',
  height: '31px',
  backgroundColor: '#33b630',
  margin: '0',
});

const Uone = styled('u')({
  paddingLeft: '0',
  listStyle: 'none',
  margin: '0',
  width: '100%',
  height: '100%',
});

const Li = styled('li')({
  position: 'absolute',
  width: '730px',
  height: '336px',
});
export { Content, ImageList, Lineb, Uone, Li };
