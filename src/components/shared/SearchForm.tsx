import styled from "@emotion/styled";
import Input from "./Input";

const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const SearchIcon = styled.span`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  background-image: url("/icon/search.svg"); /* 돋보기 아이콘 경로 */
  background-size: cover;
  background-repeat: no-repeat;
`;

const SearchForm = () => {
  return (
    <InputContainer>
      <SearchIcon />
      <Input css={{ padding: "0 20px 0 40px" }} />
    </InputContainer>
  );
};
export default SearchForm;
