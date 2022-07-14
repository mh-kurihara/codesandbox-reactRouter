import { useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>URLParameterページです</h1>
      <p>parameter idは{id}です</p>
    </div>
  );
};
