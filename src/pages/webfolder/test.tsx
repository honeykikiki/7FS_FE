/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { colors } from "@styles/colorPlatte";

const layoutStyle = css`
  display: flex;
  height: 100vh;
  background-color: ${colors.background};
`;

const sidebarStyle = css`
  width: 260px;
  background: ${colors.white};
  border-right: 1px solid ${colors.grayBorder};
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const mainStyle = css`
  flex: 1;
  padding: 1.5rem;
  overflow-x: auto;
  background-color: ${colors.background};
`;

const uploadBtnStyle = css`
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 500;
  margin-bottom: 1rem;
  border: none;
  cursor: pointer;
`;

const folderTreeStyle = css`
  margin-top: 1rem;
  font-size: 0.9rem;

  h4 {
    margin: 0.5rem 0;
    font-weight: 600;
  }

  ul {
    list-style: none;
    padding-left: 1rem;

    li {
      margin: 0.4rem 0;
      color: ${colors.textMutedColor};
      cursor: pointer;

      &:hover {
        color: ${colors.primary};
      }
    }
  }
`;

const tableHeaderStyle = css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const actionBtnStyle = css`
  background-color: ${colors.white};
  border: 1px solid ${colors.grayBorder};
  padding: 0.4rem 0.8rem;
  font-size: 0.875rem;
  margin-right: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${colors.hover};
  }
`;

const tableStyle = css`
  width: 100%;
  border-collapse: collapse;
  background-color: ${colors.white};
  border: 1px solid ${colors.grayBorder};
  border-radius: 10px;
  overflow: hidden;

  th,
  td {
    padding: 1rem;
    border-bottom: 1px solid ${colors.grayBorder};
    font-size: 0.875rem;
  }

  th {
    background-color: ${colors.gray};
    text-align: left;
  }

  tbody tr:hover {
    background-color: ${colors.hover};
  }
`;

function FileManagerPage() {
  return (
    <div css={layoutStyle}>
      {/* 사이드바 */}
      <aside css={sidebarStyle}>
        <button css={uploadBtnStyle}>파일 업로드</button>
        <div>
          <span>전사 자료실 용량</span>
          <progress value={84.4} max={100} style={{ width: "100%", marginTop: "0.5rem" }}></progress>
          <small>10.0GB 중 84.4MB 사용</small>
        </div>
        <div css={folderTreeStyle}>
          <h4>전사 자료실</h4>
          <ul>
            <li>비교자료</li>
            <li>소개자료</li>
          </ul>
          <h4>개인 자료실</h4>
          <ul>
            <li>[jeondemo] 경영 참고</li>
          </ul>
        </div>
      </aside>

      {/* 메인 컨텐츠 */}
      <main css={mainStyle}>
        <div css={tableHeaderStyle}>
          <div>
            <button css={actionBtnStyle}>새폴더</button>
            <button css={actionBtnStyle}>다운로드</button>
            <button css={actionBtnStyle}>삭제</button>
            <button css={actionBtnStyle}>복사</button>
            <button css={actionBtnStyle}>이동</button>
            <button css={actionBtnStyle}>메일보내기</button>
          </div>
          <select>
            <option>20개 보기</option>
            <option>50개 보기</option>
          </select>
        </div>

        <table css={tableStyle}>
          <thead>
            <tr>
              <th>이름</th>
              <th>크기</th>
              <th>확장자</th>
              <th>등록날짜</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.jpeg</td>
              <td>925.1KB</td>
              <td>jpeg</td>
              <td>2025.04.08</td>
              <td>
                <button css={actionBtnStyle}>미리보기</button>
                <button css={actionBtnStyle}>다운로드</button>
              </td>
            </tr>
            <tr>
              <td>[비교자료]5개사 그룹웨어 비교.pdf</td>
              <td>1.2MB</td>
              <td>pdf</td>
              <td>2024.01.31</td>
              <td>
                <button css={actionBtnStyle}>미리보기</button>
                <button css={actionBtnStyle}>다운로드</button>
              </td>
            </tr>
            {/* 추가 행들 */}
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default FileManagerPage;
