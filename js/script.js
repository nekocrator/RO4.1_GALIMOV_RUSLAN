const charactersData = {
    chito: "Спокойная и рассудительная девушка. Любит книги и ведёт дневник. Главная героиня и подруга Юри, вместе они выживают в этом заброшенном мире.",
    yuuri: "Весёлая и беззаботная. Обожает еду и оружие. Вторая главная героиня и подруга Чито.",
    nuuko: "Таинственное разумное существо, живущее в руинах города. Они называют его \"кошкой\". Фигурирует в сюжете несколько эпизодов до последнего.",
    kanazawa: "Картограф и путешественник. Создаёт карты разрушенного мира. В одном из эпизодов дарит фотоаппарат главным героиням. Фигурирует в сериале один эпизод.",
    ishii: "Инженер и механик. Мечтает подняться в небо на собственном самолёте. Когда у Чито и Юри ломается транспорт в одном из эпизодов они видят какой-то самолёт и где-то поблизости стоящую Иши. После этого она чинит их транспорт в обмен на помощь с самолётами. Также фигурирует в сюжете один эпизод."
};

document.querySelectorAll(".character-card").forEach(card => {
    card.addEventListener("click", () => {

        const key = card.dataset.character;
        const infoBlock = card.querySelector(".character-info");

        if (card.classList.contains("active")) {
            card.classList.remove("active");
            infoBlock.textContent = "";
        } else {
            document.querySelectorAll(".character-card").forEach(c => {
                c.classList.remove("active");
                c.querySelector(".character-info").textContent = "";
            });

            card.classList.add("active");
            infoBlock.textContent = charactersData[key];
        }
    });
});
