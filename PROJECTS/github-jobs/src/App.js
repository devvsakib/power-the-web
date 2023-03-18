import './App.scss';
import Result from './components/result/Result';
import Search from './components/search/Search';
import { useState } from 'react';
function App() {
  const [page, setPage] = useState(1);
  const [jobInfo, setJobInfo] = useState({});
  const getInfo = (job) => {
    console.log(job);
    setJobInfo(job);
    setPage(2);
  };
  const goBack = () => {
    setPage(1);
  };
  return (
    <div className="App">
      {page === 1 ? (
        <Search getInfo={getInfo} />
      ) : (
        <Result goBack={goBack} {...jobInfo} />
      )}
    </div>
  );
}

export default App;
