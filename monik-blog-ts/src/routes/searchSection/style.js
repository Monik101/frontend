import styled from "@emotion/styled";

export const searchbox = styled.div`
  height: 300px;
  width: 90vh;
  color: black;
  margin-left: 20px;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: flex-start;
  }
`;

export const mainSection = styled.div`
  display: flex;
`;

export const mainSectionText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const logodiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  height: 200px;
  width: 200px;
`;

export const name = styled.div`
  font-size: 80%;
  width: 20%;
  text-align: start;
`;

export const nameContent = styled.div`
  font-size: 50%;
  width: 60vh;
  text-align: start;
  line-height: 2em;
  height: 3em; /* height is 2x line-height, so two lines will display */
  overflow: hidden;
  flex-grow: 1;
`;

export const nameLogo = styled.img`
  height: 150px;
`;
