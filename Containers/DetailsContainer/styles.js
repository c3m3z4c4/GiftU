import styled from 'styled-components'

const DetailsWrapper = styled.div`
font-family: 'Quicksand', sans-serif;
width:100%;
display: flex;
width: 100%;
height: 100%;
`
const LeftDetails = styled.div`
width: 50%;
display: flex;
width: 100%;
height: 100vh;
justify-content: center;
align-items: center;
background: rgba(160, 221, 199, 0.1);
`
const RightDetails = styled(LeftDetails)`
    background: #FFFFFF;
`

const MainImageContainer = styled.div`
    width: 480px;
    height: 460px;
    position: relative;
    border-radius: 10px;
`;
const MainImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const DecorativeImage = styled.img`
    width: 156.85px;
    height: 152.24px;
    position: absolute;
    bottom: 0;
    right: 0;
`;

const InformationContainer = styled.div`
    width: 480px;
    height: 460px;
    background: rgba(255, 171, 7, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;
const TitleDetails = styled.p`
    font-family: Quicksand;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 0%;
    text-transform: uppercase;
    color: #87D3B8;
`;

const LineImage = styled.img`
    width: 69.02px;
    height: 17.59px
`;
const DetailsInformation = styled.p`
    display: flex;
    justify-content:  center;
    flex-direction: column;
    align-items: center;

`;
const DetailItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 100px);
`;
const DetailItemTitle = styled.p`
    font-family: Quicksand;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: #726666;
    width: calc(100%/2);
    font-weight: 900;
`;
const DetailItemContent = styled.p`
    font-family: Quicksand;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #726666;
    width: calc(100%/2);
`;
const DetailButton = styled.button`
    font-family: Quicksand;
    font-style: normal;
    width: 253px;
    height: 45px;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.15em;
    color: #F6F6F6;
    padding: 24px;
    background: #87D3B8;
    border-radius: 10px;
    border: none;
    cursor: pointer;
`;
const ColorLetter = styled.span`
    color: ${(props) => (props.blue ? "#87D3B8" : "#FFAB07")};
`;

export {
    DetailsWrapper,
    LeftDetails,
    RightDetails,
    MainImageContainer,
    MainImage,
    DecorativeImage,
    InformationContainer,
    ColorLetter,
    TitleDetails,
    LineImage,
    DetailsInformation,
    DetailItem,
    DetailItemTitle,
    DetailItemContent,
    DetailButton,
}