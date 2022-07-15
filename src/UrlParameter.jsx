import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  // Queryを便利に扱うためのメソッドを提供
  const query = new URLSearchParams(search);
  console.log(search);
  return (
    <div>
      <h1>URLParameterページです</h1>
      <p>url parameter idは{id}です</p>
      <p>query parameter idは{query.get("name")}です</p>
    </div>
  );
};
