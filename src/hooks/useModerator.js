import { useEffect, useState } from "react";

const useModerator = (email) => {
  const [isModerator, setIsModerator] = useState(false);
  const [isModeratorLoading, setIsModeratorLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:4000/users/moderator/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsModerator(data.isModerator);
          setIsModeratorLoading(false);
        });
    }
  }, [email]);
  return [isModerator, isModeratorLoading];
};

export default useModerator;
