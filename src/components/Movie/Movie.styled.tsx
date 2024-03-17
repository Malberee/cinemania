import styled from 'styled-components'

export const MovieWrapper = styled.div`
  position: relative;
  width: 280px;
  height: 406px;

  border-radius: 5px;
  overflow: hidden;
`

export const MovieInner = styled.div`
  position: absolute;
  bottom: 0;

  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  width: 100%;
  height: 100%;
  padding: 16px 12px;

  color: white;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 63.48%,
    rgba(0, 0, 0, 0.9) 92.16%
  );
`

export const StarWrapper = styled.span`
  display: inline-block;
  padding: 0 2px;
  width: 18px;
  height: 14px;
`

export const InfoWrapper = styled.div`
  font-size: ${({ theme }) => theme.text.mobile.sm}px;
  font-weight: 500;
`

export const GreyText = styled.p`
  color: ${({ theme }) => theme.staticColors.grey};
  margin-top: 10px;
`
