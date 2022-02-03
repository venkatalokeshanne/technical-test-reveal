import "./countries.css";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { citiesData } from "../Table/cities.slice";
import { fetchCountries } from "../services";

type Country = {
  name: string;
  count?: number;
};

const Countries = () => {
  const dispatch = useAppDispatch();
  const [countries, setCountries] = useState<Country[] | null>(null);
  const [isActive, setIsActive] = useState<number | null>(null);

  useEffect(() => {
    fetchCountries().then((response) => {
      setCountries(response.data);
    });
  }, []);

  function getCities(country: string, index: number) {
    dispatch(citiesData(country));
    setIsActive(index);
  }
  return (
    <div id="countries-wrapper">
      <p
        className={isActive === -1 ? "active" : "inActive"}
        onClick={() => getCities("", -1)}
      >
        ALL CITIES
      </p>
      {countries?.map((country, index) => (
        <p
          key={country.name}
          className={index === isActive ? "active" : "inActive"}
          onClick={() => getCities(country.name, index)}
        >
          {country.name} ({country.count})
        </p>
      ))}
    </div>
  );
};

export default Countries;
