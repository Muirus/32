module.exports = async (bot,message,args,argsF) => {
    //args - это массив аргументов. Например g/ping 0 1 2 tEsT | args[0]="0", args[1]="1", args[2]="2", args[3]="test" . А так-же argsF[3]=="tEsT"
    return message.channel.send({ //Это команда
        embeds: [
            {
                title: "```Соглашение:```",
                description: "\n \n>>> **1. Играя здесь вы согласны со всеми правилами сервера.** \n \n**2. Не знание правил - не освобождает от ответственности.** \n \n**3. Все правила нашего Discord также действуют на  Minecraft сервере.**",
                color: 10349425
            },
            {
                title: "",
                description: "",
                color: 10349425,
                image:{url:'https://media.discordapp.net/attachments/1090399077788819558/1106284383658328194/Rules.png'}
            },
            {
                description: "\n \n**1.1** \n> Не используйте читы, дюпы и баги, в том числе с помощью рельс и ковров. \n*Бан навсегда с возможностью Апелляции*\n \n**1.2** \n> Не засоряйте мир, пожалуйста  рубите деревья до конца, не мусорьте блоками. \n*Штраф + нужно убрать за собой*\n \n**1.3** \n> Постройка механизмов, которые слишком нагружают сервер. (Zero-tick в этом числе) \n*Предупреждение после чего Бан с возможностью Апелляции* \n \n**1.4** \n> Торговля игровыми предметами и услугами за реальные деньги. \n*Бан навсегда*\n \n**1.5** \n> Не гриферите, не воруйте, не убивайте игроков. \n*От Штрафа до Бана* \n \n**1.6** \n> Соблюдайте правила, установленные игроками на их территориях, и \n> правила установленные общинами для их жителей. \n*Штраф* \n \n**1.7** \n> Не используйте больше одного аккаунта на сервере \n*Бан всех дополнительных аккаунтов*",
                color: 10349425
            },
            {
                color: 10349425,
                image:{url:'https://media.discordapp.net/attachments/1090399077788819558/1106284359771758803/GreenZone.png'}

            },
            {
                description: "**2.1**\n> Запрещено ставить/ломать/видоизменять любые блоки в зелёных зонах.\n*Штраф* \n \n**2.2**\n> Запрещено устраивать ПвП в Зелёных зонах. \n*Штраф* \n \n**2.3**\n> Запрещено размещение и взрыв кристаллов, динамита, кроватей, повлёкшие за собой разрушения в зелёной зоне. \n*От Штрафа + Восстановление до Бана с Апелляцией* \n \n>>> **Текущие зеленые зоны:** \n \n 1. Спавн  - Верхний мир, в радиусе 500 блоков \n \n 2. Хаб - Ад, радиус 100 блоков \n \n 3. Ветки - Зоны в аду вдоль нулевых координат шириной 15 блоков \n \n 4. Центральный остров  - Участок энда радиусом 150 блоков с центром в начале отсчёта \n ",
                color: 10349425
            },
            {
                color: 10349425,
                image:{url:'https://media.discordapp.net/attachments/1090399077788819558/1106284324837408980/End.png'}

            },
            {
                description: "**3.1**\n> Заранее предупреждайте игроков в глобальном чате о призыве дракона.\n*Предупреждение* \n \n**3.2**\n> Не призывайте дракона во время проведения крупных ивентов \n*Предупреждение + Штраф* \n \n**3.3**\n> Если призванный вами дракон разрушил часть построек на острове, следует их восстановить \n*Восстановление + Штраф*",
                color: 10349425
            },
            {
                color: 10349425,
                image:{url:'https://media.discordapp.net/attachments/1090399077788819558/1106297660354347109/wtf.png'}

            },
            {
                description: ">>> *1. Куда писать чтобы меня добавили в ВайтЛист?*\n __- В канал <#1107198098683473940>__ \n \n*2. Какая валюта на сервере?* \n __- Алмазная Руда__ \n \n*3. Где найти IP?* \n __- В канале <#1081255901698215998>__ \n \n*4. Что такое зеленая зона?* \n __- Зелёными зонами - называются территории, охраняемые и под владением государства.__",
                color: 10349425
            }
        ]
    });
    
};
module.exports.names = ["rulesm"]; //У неё есть название
module.exports.interaction = { //И слэш команда
    name: 'rulesm', //И название должно быть такое, как у команды
    description: 'Правила Minecraft сервера Desire',
    defaultPermission: false, //Про слэш команды можно узнать из документации
    userPermissions: ['ADMINISTRATOR']
};