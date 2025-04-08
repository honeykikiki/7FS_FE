import axios from "axios";
import Button from "@components/shared/Button";
import { mockData } from "./mock";

const apiKey = "363431c80fcf82e2ce96d649e0274164";

function mock() {
  const handleOnClick = async () => {
    const data = mockData;
    console.log(data);

    for (let index = 0; index < data.length; index++) {
      // 카카오 api 조회 하기
      const element = data[index];
      const url = `https://dapi.kakao.com/v2/local/search/address?query=${element}`;

      try {
        const result = await axios.get(url, {
          headers: {
            Authorization: `KakaoAK ${apiKey}`,
            // "Content-Type": "application/json",
          },
        });

        // 파일 내보내기 (csv)
        if (result.status === 200) {
          console.log(index, result.data.documents[0].x, result.data.documents[0].y);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return <Button onClick={handleOnClick}>데이터 불러오기</Button>;
}

export default mock;
