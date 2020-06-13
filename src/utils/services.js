let api_server = process.env.REACT_APP_API_SERVER;

export const postLoginNick = async (nickname) => {
  try {
    return await fetch(`${api_server}/api/user`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nick: nickname
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