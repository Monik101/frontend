import styled from '@emotion/styled';

export const sideNav = styled.header`
    display: flex;
    flex-direction: column;
    margin-top: 300px;
    background-color: rgb(117, 114, 114);
    border-radius: 0.5rem;
    height: 500px;
    width: 230px;
    color: white;
    margin-left: 100px; 
    margin-bottom: 10px;
`;


export const sideNavFeed1 =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-weight: lighter;
    flex-grow: 1;
    margin:10px;
`;

export const Navigation = styled.a`
  display: flex;
  height: 45px;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  padding: 0.25rem;
  line-height: 1.25rem;
  color: rgb(71 85 105 / var(--tw-text-opacity));
  text-decoration:none;
  font-weight: 500;
  margin-top: 20px;
  &:hover{
      background-color: rgb(206, 205, 205);
      boder-radus:10px;
  }
`

export const SocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  margin-bottom: 40px;
  margin: 20px;
`

export const SocialMediaLinks =styled.a`
&:hover{
  background: black;
  border-radius: 5px;
  width: 40px;
}
`

export const LineNav = styled.hr`
  height: 1px;
  opacity: .1;
  width: 100%;
  color: #333; /* old IE */
  background-color: rgb(96, 96, 96);
`