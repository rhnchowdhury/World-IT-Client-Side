import { useParams } from "react-router-dom";

const Moderator = () => {
  const { email } = useParams();
  return (
    <div>
      <h1 className="text-md font-bold">
        you <span className="font-light">({email})</span> have to access manage
        clients comments, feedback{" "}
      </h1>
    </div>
  );
};

export default Moderator;
