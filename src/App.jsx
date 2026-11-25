
import { useState } from "react";
import Header from "./components/Header";
import SeriesList from "./components/SeriesList";
import { platform, series } from "./data/series.js";

function App() {
  const [onlyRunning, setOnlyRunning] = useState(false);
  const [sortByYear, setSortByYear] = useState(false);
  const [savedIds, setSavedIds] = useState([]);

  const toggleSave = (id) => {
    setSavedIds(previousIds => {
      if (previousIds.includes(id)) {
        return previousIds.filter(item => item !== id);
      } else {
        return [...previousIds, id];
      }
    });
  };

  let displayedSeries = [...series];

  if (onlyRunning) {
    displayedSeries = displayedSeries.filter(
      item => item.ended === false
    );
  }

  if (sortByYear) {
    displayedSeries.sort(
      (a, b) => a.startYear - b.startYear
    );
  }

  return (
    <>
      <Header
        platform={platform}
        count={series.length}
        savedCount={savedIds.length}
      />

      <main className="page">
        <div className="toolbar">
          <button
            className={onlyRunning ? "btn btn--active" : "btn"}
            onClick={() => setOnlyRunning(!onlyRunning)}
          >
            רק סדרות משודרות
          </button>

          <button
            className={sortByYear ? "btn btn--active" : "btn"}
            onClick={() => setSortByYear(!sortByYear)}
          >
            מיון לפי שנה
          </button>
        </div>

        <h2 className="page__title">
          הסדרות ({displayedSeries.length})
        </h2>

        <SeriesList
          series={displayedSeries}
          savedIds={savedIds}
          onToggleSave={toggleSave}
        />
      </main>
    </>
  );
}

export default App;
