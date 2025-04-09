import styled from "@emotion/styled";
import { InputFiled, InputFiledProps } from "./InputFiled";

const InputContainer = styled.div`
  position: relative;
  width: fit-content;
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

const SearchForm = ({ ...props }: InputFiledProps) => {
  return (
    <InputContainer>
      <SearchIcon />
      <InputFiled css={{ padding: "0 20px 0 40px" }} {...props} />
    </InputContainer>
  );
};
export default SearchForm;
