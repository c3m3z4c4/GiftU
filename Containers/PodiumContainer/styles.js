
import styled from 'styled-components'

const PodiumWrapper = styled.div`
font-family: 'Quicksand', sans-serif;
width:100%;
display: flex;
justify-content: flex-end;
align-items: space-between;
`
const PodiumContainer = styled.div`
width: 80%;
display: flex;
align-items: flex-end;
justify-content: space-bewteen;
`

const CompleteColumn = styled.div`
  width: calc(100%/3 - 20px);
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Maincolumn = styled.div`
  background: rgba(252, 255, 90, 0.4);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 96px;
  font-style: normal;
  font-weight: bold;
  line-height: 0%;
  letter-spacing: 0.2em;
  color: rgba(255, 171, 7, 0.75);
`
const NameComponent = styled.div`
  width: 100%;
  height: 45px;
  font-weight: bold;
  font-size: 24px;
  line-height: 0%;
  color: #726666;
  background: rgba(135, 211, 184, 0.32);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  img {
      padding-left: 40px;
  }
`;

const FirstPlace = styled(Maincolumn)`
  min-height: 350px;
`
const SecondPlace = styled(Maincolumn)`
  min-height: 220px;
`
const ThirdPlace = styled(Maincolumn)`
  min-height: 165px;
`

const ImagePodium = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
  object-fit: cover;
  `;
  
  const FirstPlaceIcon = styled.img.attrs(props => ({
      src: '/images/iconFirst.png',
    }))`
    width: 100px;
    height: 100px;
  `;
  
  const PlusIcon = styled.img.attrs(props => ({
    src: '/images/plus.png',
      href:'plus icon',
    }))`
    width: 15px;
    height: 15px;
  `;
  
  const DecorativeContainer = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`

  const LittleDecorative = styled.img.attrs(props => ({
      src: '/images/little.png',
      href:'little decorastive',
    }))`
    margin-bottom: 100%;
     width: 30px;
    height: 30px;
  `;
  
  const Decorative = styled.img.attrs(props => ({
      src: '/images/decorative.png',
      href:'decorstive',
    }))`
    width: 100px;
    height: 100px;
  `;
 
export {
    PodiumWrapper,
    PodiumContainer,
    NameComponent,
    CompleteColumn,
    Maincolumn,
    FirstPlace,
    SecondPlace,
    ThirdPlace,
    FirstPlaceIcon,
    PlusIcon,
    Decorative,
    LittleDecorative,
    ImagePodium,
    DecorativeContainer,
};

