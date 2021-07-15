import styled from 'styled-components'

export const GridStyled = styled.main`
  padding: 16px;

  width: 100%;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;

  .profileArea {
    display: none;
    @media(min-width: 860px) {
      display: block;
    }
  }

  @media(min-width: 860px) {
    display: grid;
    grid-gap: 10px;
    max-width: 1110px;
    grid-template-columns: 160px 1fr 312px;
    grid-template-areas: "profileArea welcomeArea profileRelationsArea";
  }

`
