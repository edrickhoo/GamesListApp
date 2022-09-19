export async function getGameListApi(pageNum) {
  let key = "31009d0aeda04be38910b72ee4d9a18a";
  let url = `https://api.rawg.io/api/games?key=${key}&page=${pageNum}`;
  let response = await fetch(url);
  let data = await response.json();

  if (data.detail) {
    throw new Error(`Error has occured: ${data.detail}`);
  }

  let organisedData = data.results.map((item) => {
    return {
      id: item.id,
      name: item.name,
      genres: item.genres,
      platforms: item.platforms,
      background_image: item.background_image,
      rating: item.rating,
    };
  });

  return organisedData;
}

export const pagesWithSearchApi = async (searchInput, pageNum) => {
  let key = "31009d0aeda04be38910b72ee4d9a18a";
  let url = `https://api.rawg.io/api/games?key=${key}&search=${searchInput}&page=${pageNum}`;
  let response = await fetch(url);
  let data = await response.json();
  if (data.detail) {
    throw new Error(`Error has occured: ${data.detail}`);
  }

  let organisedData = data.results.map((item) => {
    return {
      id: item.id,
      name: item.name,
      genres: item.genres,
      platforms: item.platforms,
      background_image: item.background_image,
      rating: item.rating,
    };
  });

  return organisedData;
};

export const searchGameApi = async (searchInput) => {
  let key = "31009d0aeda04be38910b72ee4d9a18a";
  let url = `https://api.rawg.io/api/games?key=${key}&search=${searchInput}`;
  let response = await fetch(url);
  let data = await response.json();

  if (data.detail) {
    throw new Error(`Error has occured: ${data.detail}`);
  }

  let organisedData = data.results.map((item) => {
    return {
      id: item.id,
      name: item.name,
      genres: item.genres,
      platforms: item.platforms,
      background_image: item.background_image,
      rating: item.rating,
    };
  });

  return organisedData;
};

export const getGameDetailsApi = async (id) => {
  let key = "31009d0aeda04be38910b72ee4d9a18a";
  let url = `https://api.rawg.io/api/games/${id}?key=${key}`;
  let response = await fetch(url);
  let data = await response.json();

  if (data.detail) {
    throw new Error(`Error has occured: ${data.detail}`);
  }

  let organisedData = {
    id: data.id,
    name: data.name,
    genres: data.genres,
    platforms: data.platforms,
    background_image: data.background_image,
    rating: data.rating,
    description_raw: data.description_raw,
    website: data.website,
  };

  return organisedData;
};
