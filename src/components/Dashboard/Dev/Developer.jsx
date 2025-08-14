import { useLoaderData } from "react-router-dom";

const Developer = () => {
  const load = useLoaderData();
  console.log(load);

  return (
    <div>
      <h1>This is developer</h1>
    </div>
  );
};

export default Developer;
