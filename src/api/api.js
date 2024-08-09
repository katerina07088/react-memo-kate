const apiUrl = "https://wedev-api.sky.pro/api/leaderboard";

// получение списка лидеров
export const getListOfLeaders = async () => {
  const response = await fetch(apiUrl, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("Не удалось загрузить данные, попробуйте позже");
  }
  return response.json();
};

//добавление лидера в список
export const addLeader = async data => {
  const response = await fetch(apiUrl, {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Упс, ошибка");
  }
  return response.json();
};
