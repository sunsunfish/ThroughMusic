import Meta from '@/components/Meta';
import { Content, ImageList, Lineb, Uone, Li } from './styled';

//轮播组件
function FirstPage() {
  return (
    <>
      <Meta title="test" />
      <Content>
        <ImageList>
          <Lineb>
            <Uone>
              <Li>
                <img src=" http://www.runoob.com/images/pulpit.jpg"></img>{' '}
              </Li>
              <Li>
                <img src=" http://www.runoob.com/images/pulpit.jpg"></img>
              </Li>
              <Li>
                <img src=" http://www.runoob.com/images/pulpit.jpg"></img>
              </Li>
              <Li>
                <img src=" http://www.runoob.com/images/pulpit.jpg"></img>
              </Li>
              <Li>
                <img src=" http://www.runoob.com/images/pulpit.jpg"></img>
              </Li>
              <Li>
                <img src=" http://www.runoob.com/images/pulpit.jpg"></img>
              </Li>
            </Uone>
          </Lineb>
        </ImageList>
      </Content>
    </>
  );
}

export default FirstPage;
