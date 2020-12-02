import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
`;

export const CredentialsBlock = styled.p`
  margin-top: 20px;
  display: flex;
  flex-direction: column;

  span {
    font-size: 13px;
  }
`;
