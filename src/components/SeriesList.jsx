
import SeriesCard from "./SeriesCard";

function SeriesList({ series, savedIds, onToggleSave }) {
    return (
        <section className="series-list">
            {series.map(item => (
                <SeriesCard
                    key={item.id}
                    title={item.title}
                    genre={item.genre}
                    startYear={item.startYear}
                    creator={item.creator.name}
                    ended={item.ended}
                    nextYear={item.nextSeason?.year}
                    seasons={item.seasons}
                    saved={savedIds.includes(item.id)}
                    onToggleSave={() => onToggleSave(item.id)}
                />
            ))}
        </section>
    );
}

export default SeriesList;
