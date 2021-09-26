import { FormControl, Select, MenuItem } from "@material-ui/core";

function Header({ countries, selectedCountry, setSelectedCountryData }) {
  return (
    <div className="app__header">
      <h1>COVID-19 TRACKER</h1>
      <FormControl className="app_dropdown">
        <Select
          variant="outlined"
          value={selectedCountry}
          onChange={(e) => setSelectedCountryData(e)}
        >
          <MenuItem value="worldwide">worldwide</MenuItem>
          {countries &&
            countries.map((country, index) => (
              <MenuItem value={country.value} key={index}>
                {country.name}{" "}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default Header;
