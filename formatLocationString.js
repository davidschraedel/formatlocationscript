// David Schraedel
// format location dynamically with commas, regardless of any missing address value.

const formatLocationString = (streetVal, cityVal, stateVal, zipVal) => {
  let formattedAddress = "";
  if (streetVal || cityVal || stateVal || zipVal) {
    const street = streetVal ? streetVal : "";
    const city = cityVal ? cityVal : "";
    const state = stateVal ? stateVal : "";
    const zip = zipVal ? zipVal : "";

    formattedAddress =
      street +
      (street && (city || state || zip) ? ", " + city : city) +
      (city && (state || zip) ? ", " + state : state) +
      (state ? " " + zip : zip);
    // console.log("data exists");
  } else {
    formattedAddress = "N/A";
  }

  return formattedAddress;
};

export { formatLocationString };
