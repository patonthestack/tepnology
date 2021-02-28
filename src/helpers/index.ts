// Work & Rent Helpers

// Check if valid URL - for jobs and rentals
export function validURL(str) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i',
  ); // fragment locator
  return !!pattern.test(str);
}

// Add Commas e.g $1,000
export function commaHelper(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Slugify e.g. some-string-yeah
export function slugify(str) {
  return str
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9']+/g, '-')
    .replace(/^-|-$/g, '');
}

// Turn slug 'some-slug-thing' into 'Some-Slug-Thing'
export function slugifyCap(str) {
  let arr = str.split('-');
  arr.forEach(function(item, index) {
    arr[index] = item.replace(item[0], item[0].toUpperCase());
  });

  return arr.join('-');
}

// Unslug 'some-slug-thing' into 'Some Slug Thing'
export function unSlugify(str) {
  let arr = str.split('-');
  arr.forEach(function(item, index) {
    arr[index] = item.replace(item[0], item[0].toUpperCase());
  });

  return arr.join(' ');
}

// Random Color String
export function randomColor() {
  return (
    '#' +
    Math.random()
      .toString(16)
      .slice(2, 8)
      .toUpperCase()
  );
}

// Trim a long string
export function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + '...';
}
