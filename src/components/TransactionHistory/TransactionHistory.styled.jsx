import styled from '@emotion/styled';

export const TransactionTable = styled.table`
  max-width: 100%;
  padding: 15px;
  margin: 0 auto;
  border-collapse: collapse;
  border: 3px solid gray;
`;

export const Th = styled.th`
  padding: 20px;
  width: 150px;
  border: 3px solid gray;
  background-color: rgb(0, 170, 162);
  color: white;
`;

export const Td = styled.th`
  padding: 10px 20px;
  font-weight: normal;
`;
// text-align: left;
export const Tbody = styled.tbody`
  & > :nth-of-type(odd) {
    background-color: rgb(240, 240, 240);
  }
`;

// background-color: #fff;
//   background-color: rgb(216, 216, 216);
