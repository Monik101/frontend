import styled from '@emotion/styled';

export const initialLogoHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    padding-left: 40px;
    padding-right: 40px;
    position:sticky;
    top: 0;
`


export const initialLogoMain =styled.div`
    font-size: 500%;
    font-weight: 300;
    text-shadow: 5px 10px 10px rgb(149, 149, 149);
    transition: 0.5s ease;

    &:hover{
        font-size: 600%;
        font-weight: 400;
    }
  `



