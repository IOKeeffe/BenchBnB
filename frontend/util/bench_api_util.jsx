export constant fetchBenches = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/benches',``
  });
};
