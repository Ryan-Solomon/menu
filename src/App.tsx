import React, { useEffect, useState } from 'react';
import './App.scss';
import Card from './Card';

const url = 'https://course-api.netlify.app/api/react-tabs-project';

type Job = {
  id: string;
  order: 3;
  title: string;
  dates: string;
  duties: string[];
  company: string;
};

type State = Job[];

function App() {
  const [jobs, setJobs] = useState<State | null>(null);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    setJobs(data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <main>
      <Card jobs={jobs} />
    </main>
  );
}

export default App;
