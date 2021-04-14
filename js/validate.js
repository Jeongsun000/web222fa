/**
  Name: Jeongseon Yoon
  Student number: 109687202
  Email: jyoon39@myseneca.ca
  Session: WEB222 NDD
  Dated: April 14, 2021
*/
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
  const lat = form.latitude.value.trim();
  const long = form.longitude.value.trim();

  let latErrors = document.querySelector("#latError");
  let longErrors = document.querySelector("#longError");
  latErrors.innerHTML = "";
  longErrors.innerHTML = "";

  if (isNaN(lat) || parseInt(lat) < -90 || parseInt(lat) > 90) {
    latErrors.innerHTML = "must be a valid Latitude (-90 to 90)";
    return false;
  }
  if (isNaN(long) || parseInt(long) < -180 || parseInt(long) > 180) {
    longErrors.innerHTML = "must be a valid Longitude (-180 to 180)";
    return false;
  }
  return true;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};
