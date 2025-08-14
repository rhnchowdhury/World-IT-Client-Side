import { useEffect, useState } from "react";

const useDeveloper = (email) => {
  const [isDeveloper, setIsDeveloper] = useState(false);
  const [isDeveloperLoading, setIsDeveloperLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:4000/users/developer/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsDeveloper(data.isDeveloper);
          setIsDeveloperLoading(false);
        });
    }
  }, [email]);
  return [isDeveloper, isDeveloperLoading];
};

export default useDeveloper;
