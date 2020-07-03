let api_server = process.env.REACT_APP_API_SERVER;

const difficultyByLevel = {
  'Principiante': 'easy',
  'Intermedio': 'medium',
  'Avanzado': 'hard',
};

export const postUser = async (data) => {
  try {
    return await fetch(`${api_server}/api/user`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
  } catch (err) {
    return Promise.reject(err);
  }
};

export const putAvatar = async (username, avatar) => {
  try {
    return await fetch(`${api_server}/api/user/${username}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        avatar: avatar
      })
    });
  } catch (err) {
    return Promise.reject(err);
  }
};

export const postRating = async (rating) => {
  try {
    return await fetch(`${api_server}/api/rating`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: rating.user,
        rating: rating.rating,
        level: rating.level
      })
    });
  } catch (err) {
    return Promise.reject(err);
  }
};

/* Ejemplo con GET (despues borrar!) */
export async function getUsers(params) {
  try {
    const res = await fetch(`/api/user?params=${params}`, {
      headers: {
        accept: "application/json"
      }
    });
    return res.json();
  } catch (err) {
    return Promise.reject(err);
  }
}

export async function getGame(name, level) {
  const difficulty = difficultyByLevel[`${level}`];
  try {
    const res = await fetch(`${api_server}/api/games/${name}?level=${difficulty}`, {
      headers: {
        accept: "application/json"
      }
    });
    return res.json();
  } catch (err) {
    console.error('Failed getting game data: ', err)
    return Promise.reject(err);
  }
}
