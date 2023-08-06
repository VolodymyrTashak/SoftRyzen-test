import styled from 'styled-components'; 

export const HeaderBox = styled.div`
display: block;
padding-top: 34px;
padding-bottom: 25px;
border-bottom: 1px solid #7B61FF;
background: #FEFCFF;

@media (min-width: 320px) and (max-width: 767px) {
    
     }
     @media (min-width: 768px) and (max-width: 1199px) {
        display: flex;
        align-items: center;
        }
        @media (min-width: 1200px) {
            
            }
`;

export const LogoBox = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 24px;

@media (min-width: 768px) and (max-width: 1199px) {
    margin-bottom: 0;
    }
`;

export const Logo = styled.h1`
font-family: "Alata";
color: #7B61FF;
font-size: 24px;
font-weight: 400;
line-height: normal;
`;

export const Select = styled.select`
width: 69px;
padding: 12px 4px 12px 12px;
align-items: center;
border-radius: 8px;
background: #FFF;
border: none;
box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
color: #3F3F3F;
font-size: 16px;
font-weight: 500;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  height: 48px;
  border-radius: 8px;
  background: #FFF;
  overflow: hidden;
  padding: 12px;
  justify-content: center;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
`;

export const SearchFormButton = styled.button`
  display: inline-block;
//   width: 48px;
//   height: 48px;
  border: 0;
  background-color: #fff;
  cursor: pointer;
  outline: none;
`;

export const SearchFormInput = styled.input`
  display: inline-block;
  color: #888;
  width: 100%;
  font: inherit;
  border: none;
  outline: none;
  margin-left: 12px;
`;