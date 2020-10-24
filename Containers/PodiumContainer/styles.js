
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
@media (max-width: 768px) {
  width: 100%;
}
`

const CompleteColumn = styled.div`
  width: calc(100%/3 - 20px);
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: calc(100%/3 - 5px);
    margin: 0 5px;
  }
`;

const Maincolumn = styled.div`
  background: rgba(252, 255, 90, 0.4);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 76px;
  font-style: normal;
  font-weight: bold;
  line-height: 0%;
  letter-spacing: 0.2em;
  color: rgba(255, 171, 7, 0.75);
  @media (max-width: 1024px) {
    font-size: 56px;
  }
  @media (max-width: 768px) {
    font-size: 46px;
  }
  @media (max-width: 425px) {
      font-size: 20px;
  }
`
const NameComponent = styled.div`
  width: 100%;
  height: 45px;
  font-weight: bold;
  font-size: 18px;
  line-height: 0%;
  color: #726666;
  background: rgba(135, 211, 184, 0.32);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  img {
      padding-left: 40px;
      @media (max-width: 768px) {
        padding-left: 5px;
      }
  }
  text-transform: uppercase;
  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 0;
  }
  @media (max-width: 425px) {
      font-size: 6px;
      line-height: 0;
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
  object-fit: contain;
  background: white;
  box-shadow: 3px 5px 5px 1px rgba(0,0,0,0.17);
  @media (max-width: 768px) {
		width: 150px;
    height: 150px;
  }
  @media (max-width: 425px) {
		width: 60px;
   height: 60px;
	}
  `;
  
  const FirstPlaceIcon = styled.img.attrs(props => ({
      src: '/images/iconFirst.png',
    }))`
    width: 80px;
    height: 80px;
    @media (max-width: 1024px) {
      width: 60px;
      height: 60px;
    }
    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
    }
    @media (max-width: 425px) {
      width: 30px;
     height: 30px;
    }
  `;
  
  const PlusIcon = styled.img.attrs(props => ({
    src: '/images/plus.png',
      href:'plus icon',
    }))`
    width: 15px;
    height: 15px;
    @media (max-width: 425px) {
      width:10px;
      height: 10px;
  }
  `;
  
  const DecorativeContainer = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  @media (max-width: 768px) {
    display: none;
  }
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

