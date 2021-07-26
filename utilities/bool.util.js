function isNull(value) {
  return value === null;
}

function isUndefined(value) {
  return value === undefined;
}

function isEmptyText(value) {
  return value === "";
}

function validateLinks(links, errors) {
  const linkMissingText = links && links.some((link) => {
    return hasNoValue(link.text);
  });
  if (linkMissingText) {
    errors.push({text: 'Please add text to every link'});
  }
  const linkMissingURL = links && links.some((link) => {
    return hasNoValue(link.url);
  });
  if (linkMissingURL) {
    errors.push({text: 'Please add a url to every link'});
  }
}

function collectErrors(item, fields) {
  const errors = [];
  fields.forEach((field) => {
    if (hasNoValue(item[field])) {
      errors.push({text: 'Please add field: ' + field});
    }
  });
  return errors;
}

function hasNoValue(value) {
  return isNull(value) || isUndefined(value) || isEmptyText(value);
}

function hasValue(value) {
  return !hasNoValue(value);
}

function allHaveValues(values) {
  return values.every((value) => {
    return hasValue(value);
  });
}

function anyHasValue(values) {
  return values.some((value) => {
    return hasValue(value);
  });
}

function howManyHaveValue(values) {
  let count = 0;
  values.forEach((value) => {
    if (hasValue(value)) {
      count++;
    }
  });
  return count;
}

function hasNoNumberValue(value) {
  return hasNoValue(value) || isNaN(value);
}

function hasNumberValue(value) {
  return !hasNoNumberValue(value);
}

function hasBoolValue(value) {
  return value === true || value === false;
}

function hasNoBoolValue(value) {
  return !hasBoolValue(value);
}

function stringHasBooleanValue(value) {
  return value.toLowerCase() === "true" || value.toLowerCase() === "false";
}

function translateBooleanString(value) {
  return value.toLowerCase() === "true";
}

function isEmpty(map) {
  for (let key in map) {
    if (map.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

module.exports = {
  isEmpty,
  hasBoolValue,
  validateLinks,
  howManyHaveValue,
  anyHasValue,
  hasNoBoolValue,
  hasNoValue,
  hasValue,
  allHaveValues,
  hasNumberValue,
  hasNoNumberValue,
  stringHasBooleanValue,
  translateBooleanString,
  collectErrors,
}
