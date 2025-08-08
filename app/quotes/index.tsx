import { useHooks } from "./hooks";

const LifeQuotes = () => {
  const { quote, fetchQuotes } = useHooks();
  return (
    <>
      <div className="text-3xl p-50">
        <h1> Embrace Stoicism</h1>
      </div>
      <div className="text-2x1 m-5">
        {quote?.text}
    <br/>
        {quote?.author}
      </div>
      <button onClick={fetchQuotes}>Generate Quote</button>
    </>
  );
};
export default LifeQuotes;
