import { FormControl, Select, MenuItem } from "@material-ui/core";
import { useState, useEffect } from "react";

function Header() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("worldwide");
  //   const url = "https://disease.sh/v3/covid-19/countries";

  useEffect(() => {
    const init = async () => {
      await fetchCountries();
    };

    init();
  }, []);

  const fetchCountries = async () => {
    await fetch("https://disease.sh/v3/covid-19/countries")
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        console.log("**@ the data is , ", data);
        const countries = data.map((country) => {
          return {
            name: country.country,
            value: country.countryInfo.iso2,
          };
        });

        console.log("**@ processed countries are , ", countries);
        setCountries(countries);
      })
      .catch((err) => {
        console.log(
          "**@ something went wrong while fetching countries , error is , ",
          err
        );
      });
  };

  const setSelectedCountryData = async (e) => {
    e.preventDefault();

    const selectedCountryCode = e.target.value;
    console.log("**@ selectedCountry code is , ", selectedCountryCode);

    setSelectedCountry(selectedCountryCode);
  };
  return (
    <div className="app__header">
      <h1>COVID-19 TRACKER</h1>
      <FormControl className="app_dropdown">
        <Select
          variant="outlined"
          value={selectedCountry}
          onChange={(e) => setSelectedCountryData(e)}
        >
          <MenuItem
            value="worldwide"
            // onChange={setSelectedCountry("worldwide")}
          >
            worldwide
          </MenuItem>
          {countries &&
            countries.map((country, index) => (
              <MenuItem
                value={country.value}
                key={index}
                // onChange={setSelectedCountry(country.value)}
              >
                {country.name}{" "}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Header;
