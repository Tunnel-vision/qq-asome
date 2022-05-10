import React from 'react';
import styled from 'styled-components';

interface Props {
    name?: string;
    qq?: string;
    qlogo?: string;
}

const WrpperDiv = styled.div`
     width: 270px;
    height: 80px;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    border: 2px solid #000;
    font-size: 2rem;
    border-radius: 15px;
    background-color: #f0f0f0;
    & .qq {
        color: rgba(0,0,0,0.5);;
    }


`

const ProfilePhoto = styled.img`
    width: 80px;
    height: 80px;
    border-radius:50%;

`

const Index: React.FC<Props> = ({ name, qq, qlogo }) => {
    if(!name && !qq && !qlogo) return null;
    return (
        <WrpperDiv>
            <ProfilePhoto src={qlogo} alt='user' />
            <div>
                <div>{name}</div>
                <div className='qq'>{qq}</div>
            </div>
        </WrpperDiv>
    )
}

export default Index;