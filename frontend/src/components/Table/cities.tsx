import "./cities.css";
import { useAppSelector } from "../../app/hooks";
import { selectCities } from "./cities.slice";

const Table = () => {
  const state = useAppSelector(selectCities);

  return (
    <div id="cities-table-wrapper">
      {state.city !== null && state.city?.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>City</th>
              <th>Country</th>
              <th>Sub-Country</th>
              <th>Link to geoname page</th>
            </tr>
          </thead>
          <tbody>
            {state.city?.map((city, index) => (
              <tr key={index}>
                <td>{city.name}</td>
                <td>{city.country}</td>
                <td>{city.subcountry}</td>
                <td>
                  <a
                    href={`https://www.geonames.org/${city.geonameid}`}
                    target="_blank"
                    rel="noreferrer"
                  >{`https://www.geonames.org/${city.geonameid}`}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {state.city === null && state.status === "idle" && <p>Click ALL CITIES to get all cities</p> }
      {state.status === "loading" && <p>Loding...</p>}
      {state.status === "failed" && (<p>Loading details from API failed</p>)}
    </div>
  );
};

export default Table;
