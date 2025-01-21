exports.handler = async (event) => {
    const data = JSON.parse(event.body);
    // Обработка данных и сохранение в файл или отправка на почту
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Дані успішно відправлено!" }),
    };
};
