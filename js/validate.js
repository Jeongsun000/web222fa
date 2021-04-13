function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  console.log(
    "TODO - validate the longitude, latitude values before submitting"
  );
  const form = document.querySelector("form");
  const lat = parseInt(form.latitude.value.trim());
  const long = parseInt(form.longitude.value.trim());

  let isError = false;
  let latErrors = document.querySelector("#latError");
  let longErrors = document.querySelector("#longError");
  latErrors.innerHTML = "";
  longErrors.innerHTML = "";

  if (lat < -90 || lat > 90) {
    latErrors.innerHTML = "must be a valid Latitude (-90 to 90)";
    isError = true;
  }
  if (long < -180 || long > 180) {
    longErrors.innerHTML = "must be a valid Longitude (-180 to 180)";
    isError = true;
  }
  return !isError;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};
