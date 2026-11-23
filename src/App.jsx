import Header from "./components/Header";
import SeriesCard from "./components/SeriesCard";

function App() {
  return (
    <div>
      <Header platform="SeriesHub" count={5} />

      <SeriesCard
        title="Code Red"
        genre="Thriller"
        startYear={2020}
        creator="Noam Shalev"
        ended={true}
        nextYear={undefined}
        seasons={[1, 2, 3]}
      />
    </div>
  );
}

export default App;
