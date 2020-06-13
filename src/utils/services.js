let api_server = process.env.REACT_APP_API_SERVER;

const difficultyByLevel = {
  'Principiante': 'easy',
  'Intermedio': 'medium',
  'Avanzado': 'hard',
};

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
