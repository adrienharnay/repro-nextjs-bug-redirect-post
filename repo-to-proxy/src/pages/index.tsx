import { useState } from "react";

const Home = () => {
  const [data, setData] = useState(null);

  return (
    <div>
      <a href="/test">Go to test page</a>

      <button
        onClick={async () => {
          const res = await fetch(
            "https://repro-nextjs-bug-redirect-post.vercel.app/api/hello",
            {
              method: "POST",
            }
          );
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
