import styled from "@emotion/styled";

const InputSelect = styled.select`
  padding: 10px 14px;
  padding-right: 35px;
  border: 1px solid #d1d5db;
  border-radius: 12px;
  background-color: white;
  font-size: 16px;
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='gray' height='20' viewBox='0 0 24 24' width='20' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 14px center;
  background-size: 16px;
  cursor: pointer;
  transition: border 0.2s ease;

  &:focus {
    outline: none;
    /* border-color: #3b82f6; */
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.3);
  }
`;

export default InputSelect;
