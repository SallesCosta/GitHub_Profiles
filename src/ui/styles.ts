import styled, { css } from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  min-height: 93vh;
  padding-bottom: 2rem;
  width: 1200px;

  @media (max-width: 1215px) {
    width: 950px;
  }

  @media (max-width: 1030px) {
    gap: 2rem;
    flex-direction: column;
    width: 550px;
  }
`

export const Header = styled.div`
  ${({ theme }) => css`
    align-items: center;
    color: ${theme.colors.gray_600};
    height: 70px;
    display: flex;

    position: relative;
    justify-content: center;
  `}
`

export const Title = styled.h1`
  position: absolute;
  font-size: 2rem;
  margin: auto;
`

export const DarkModeControl = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  margin-left: 85%;
  width: 140px;

  @media (max-width: 768px) {

  width: 100px;
  }
`

type Tipo = {
  border: string;
  bg: string;
};

export const Label = styled.label`
  text-wrap: nowrap;

  @media (max-width: 768px) {
      font-size: 0.7rem;
  }
`

export const TagInternal = styled.div<Tipo>`
  align-items: center;
  background: ${(props) => props.bg};
  border: 1.6px solid ${(props) => props.border};
  border-radius: 5px;
  color: ${(props) => props.border};
  display: flex;
  font-size: 9px;
  justify-content: center;
  width: 70px;
`

type ButtonVariant = {
  primary?: boolean;
};

export const Button = styled.button<ButtonVariant>`
  ${({ theme, primary }) => css`
    border: 1.2px solid ${theme.colors.gray_600};
    color: ${theme.colors.gray_600};
    background: ${theme.colors.white};

    ${primary &&
    css`
        border: 1.2px solid ${theme.colors.ls};
        color: ${theme.colors.ls};
      `
    };

    font-size: 16px;
    padding: 5px 15px;
    border-radius: 15px;
    transition: 0.3s;
    cursor: poiter;

    :hover {
      background: ${theme.colors.orange_200};
      color: ${theme.colors.orange_600};
      border 1.2px solid ${theme.colors.orange_600};

      ${primary &&
    css`
          background: ${theme.colors.ls};
          color: ${theme.colors.white};
          border 1.2px solid ${theme.colors.ls};
        `
    };
     transform: scale(1.03);
    }
  `}
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 2fr));
  grid-template-rows: repeat(auto, 1fr);
  grid-gap: 25px;

  width: 800px;

  @media (max-width: 1215px) {
    width: 550px;
    grid-template-columns: repeat(2, minmax(250px, 2fr));
    grid-template-rows: repeat(auto, 1fr);
  }
`

export const Repo = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.gray_600};
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    padding: 15px;
    min-height: 200px;
    max-height: 200px;
    justify-content: space-between;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.15);

    :hover {
      transform: scale(1.03);
    }
  `}

  h3 {
    font-size: 1.2rem;
    font-weight: bold;
  }

  p {
    font-size: 0.9rem;
    overflow: hidden;
  }

  a {
    cursor: pointer;
  }
`

export const RepoHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 30px;
  overflow: hidden;
`

export const HStack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1030px) {
    flex-direction: column;
  }
`

export const VStack = styled.div`
  display: flex;
  flex-direction: column;
`

export const UserInfos = styled(VStack)`
  @media (max-width: 1030px) {
    width: 500px;
    flex-direction: row;
    justify-content: space-around;
  }
`

export const UserSection = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray_600};
    display: flex;
    flex-direction: column;
    height: 600px;
    justify-content: space-between;
    min-width: 280px;
    width: 280px;

    @media (max-width: 1030px) {
      width: 100%;
      justify-content: space-around;
      height: 700px;

      img {
        margin-left: auto;
        margin-right: auto;
      }
    }
  `}
`

export const ThisRepo = styled(VStack)`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    border-radius: 20px;
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.15);
    color: ${theme.colors.gray_600};
    justify-content: center;
    min-height: 200px;
    padding: 15px;
    width: 100%;

    :hover {
      transform: scale(1.03);
    }
  `}

  h3 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-left: 37px;
  }

  svg {
    height: 55px;
    margin-left: auto;
    margin-right: auto;
    width: 55px;
  }

  @media (max-width: 1030px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    min-height: 50px;

    h3 {
      margin-top: 10px;
    }

    svg {
      margin-botton: 37px;
    }
  }
`
