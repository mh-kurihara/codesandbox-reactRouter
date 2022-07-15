import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  const history = useHistory();
  //  console.log(state);

  const onClickBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h1>Page1詳細Aページです{`${state}`}</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
