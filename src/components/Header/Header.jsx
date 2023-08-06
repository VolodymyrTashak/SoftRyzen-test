import { HeaderBox, LogoBox, Logo, Select, SearchForm, SearchFormButton, SearchFormInput } from "./Header.styled";
import { BsSearch } from 'react-icons/bs';

export const Header = () => {
    return (
      <div>
        <HeaderBox className="container">
         {/* <Logo>Event Planner</Logo>
         <SearchForm onSubmit={() => {}}>
           <SearchFormButton type="submit">
             <BsSearch fill="#7B61FF" size={25} />
           </SearchFormButton>
           <SearchFormInput
             type="text"
             name="searchQuery"
             // value={}
             // onChange={}
             autoComplete="off"
             autoFocus
             placeholder="Search by keywords"
           />
         </SearchForm>
         

         <Select id="lang" name="lang">
          <option value="UA">UA</option>
          <option value="EN">EN</option>
         </Select> */}
        <LogoBox>
         <Logo>Event Planner</Logo>
         <Select id="lang" name="lang">
          <option value="UA">UA</option>
          <option value="EN">EN</option>
         </Select>
        </LogoBox>
         <SearchForm onSubmit={() => {}}>
           <SearchFormButton type="submit">
             <BsSearch fill="#7B61FF" size={25} />
           </SearchFormButton>
           <SearchFormInput
             type="text"
             name="searchQuery"
             // value={}
             // onChange={}
             autoComplete="off"
             autoFocus
             placeholder="Search by keywords"
           />
         </SearchForm>
      </HeaderBox>
      </div>
    );
  };
  