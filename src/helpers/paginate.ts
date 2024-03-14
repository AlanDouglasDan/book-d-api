// import { resultInterface } from "../interface";

const paginate = (data: any, page: any, limit: any) => {
  //data is the array of data that will be passed to this function for pagination
  //page is the page number
  //limit is the number of data you will get per request

  const pageNumber = parseInt(page);
  const limitNumber = parseInt(limit);

  const startIndex = (pageNumber - 1) * limitNumber;
  const endIndex = pageNumber * limitNumber;

  const results = {
    results: [],
    next: {},
    previous: {},
    totalPages: Math.ceil(data.length / limitNumber),
  };

  if (!pageNumber || !limitNumber) {
    results.results = data;
    return results;
  }

  if (endIndex < data.length) {
    results.next = {
      page: pageNumber + 1,
      limit: limitNumber,
    };
  }

  if (startIndex > 0) {
    results.previous = {
      page: pageNumber - 1,
      limit: limitNumber,
    };
  }

  results.results = data.slice(startIndex, endIndex);

  return results;
};

export default paginate;
