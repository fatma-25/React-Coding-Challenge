import Card from './components/Card';
import { useQuery } from 'react-query';
import axios from 'axios';
export default function App() {
  const { data } = useQuery('data', () =>
    axios('https://datausa.io/api/data?drilldowns=State&measures=Population&year=2019&limit=20'),
  );

  return (
    <div className="bg-[#C4C4C4] ">
      <div className="mb-10 pt-10">
        <h1 className="text-[40px] font-bold mx-10 text-[#56A0BB] ">Population der Staaten</h1>
      </div>
      <div className="flex justify-center items-center min-h-screen grid grid-rows-4 grid-flow-col gap-3 ">
        {data?.data.data.map((e: any) => (
          <div className="container flex items-start my-5 mx-1 ">
            <Card e={e} />
          </div>
        ))}
      </div>
    </div>
  );
}
