export const get = () => {
  return new Response(null, {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  });
};
