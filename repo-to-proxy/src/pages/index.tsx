import { useState } from "react";

const Home = () => {
  const [data, setData] = useState(null);

  return (
    <div>
      <button
        onClick={async () => {
          const res = await fetch("/api/hello", { method: "POST" });
          const newData = await res.json();
          setData(newData);
        }}
      >
        Trigger POST
      </button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default Home;
