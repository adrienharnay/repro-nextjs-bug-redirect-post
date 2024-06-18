import { useState } from "react";

const Home = () => {
  const [data, setData] = useState(null);

  return (
    <div>
      <a href="/test">Go to test page</a>

      <button
        onClick={async () => {
          try {
            const res = await fetch("http://localhost:3000/api/hello", {
              method: "POST",
              mode: "no-cors",
            });
            const newData = await res.json();
            setData(newData);
          } catch (error) {
            console.error(error);
          }
        }}
      >
        Trigger POST
      </button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default Home;
