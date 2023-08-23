import styled, { css } from 'styled-components'

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 15px;
`

type ItemProps = {
  active: boolean;
  isDot: boolean;
  onClick: any;
};

export const PagLink = styled.button<ItemProps>`
  ${({ theme, active, isDot }) => css`
    align-items: center;
    background: ${active
      ? `${theme.colors.gray_600}`
      : `${theme.colors.white}`};
    border-radius: 100%;
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
    color: ${active ? `${theme.colors.white}` : `${theme.colors.gray_600}`};
    cursor: ${isDot ? 'not-allowed' : 'pointer'};
    display: flex;
    height: 50px;
    justify-content: center;
    margin: 2px;
    min-width: 50px;
    text-decoration: none;
    width: 50px;
  `}
`
