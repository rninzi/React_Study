import { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState(null);
  const newsApiKey = process.env.REACT_APP_NEWS_API_KEY;
  const onClick = async () => {
    try {
      // 현재 headline 호출 가능 국가가 us로 한정됨
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsApiKey}`,
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default App;
