import { useParams } from "react-router-dom";

const Developer = () => {
  const { email } = useParams();

  return (
    <div>
      <h1 className="text-md font-bold">
        you <span className="font-light">({email})</span> are internal user with
        project access{" "}
      </h1>
    </div>
  );
};

export default Developer;
