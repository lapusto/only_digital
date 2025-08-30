export const angles: number[] = [0, 42, 83, 180, 221, 262];

interface Item {
  id: number;
  year: number;
  content: string;
}

interface Items {
  [key: number]: Item[];
}

export const items: Items = {
  0: [
    {
      id: 0,
      year: 2014,
      content:
        "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды.",
    },
    {
      id: 1,
      year: 2015,
      content:
        "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11.",
    },
    {
      id: 2,
      year: 2016,
      content:
        "14 сентября — учёные впервые зафиксировали гравитационные волны, подтвердив предсказания общей теории относительности.",
    },
  ],
  1: [
    {
      id: 3,
      year: 2017,
      content:
        "21 августа — полное солнечное затмение, видимое в США, названное «Великим американским затмением».",
    },
    {
      id: 4,
      year: 2018,
      content:
        "20 сентября — японский аппарат «Хаябуса-2» успешно высадил два ровера на астероид Рюгу.",
    },
    {
      id: 5,
      year: 2019,
      content:
        "10 апреля — впервые опубликовано изображение тени черной дыры, полученное проектом Event Horizon Telescope.",
    },
  ],
  2: [
    {
      id: 6,
      year: 2020,
      content:
        "30 мая — запуск Crew Dragon Demo-2, первая пилотируемая миссия компании SpaceX.",
    },
    {
      id: 7,
      year: 2021,
      content:
        "18 февраля — марсоход Perseverance успешно совершил посадку в кратере Езеро на Марсе.",
    },
    {
      id: 8,
      year: 2022,
      content:
        "12 июля — опубликованы первые снимки, сделанные космическим телескопом «Джеймс Уэбб».",
    },
  ],
  3: [
    {
      id: 9,
      year: 2023,
      content:
        "23 августа — Индия успешно посадила лунный модуль «Чандраян-3» в районе южного полюса Луны.",
    },
    {
      id: 10,
      year: 2024,
      content:
        "8 апреля — полное солнечное затмение, видимое в Северной Америке.",
    },
    {
      id: 11,
      year: 2025,
      content:
        "Запланирован запуск телескопа Nancy Grace Roman для поиска экзопланет и изучения тёмной энергии.",
    },
  ],
  4: [
    {
      id: 12,
      year: 2026,
      content:
        "Запланирован полёт миссии «Марс-2026» для сбора образцов грунта с поверхности Марса.",
    },
    {
      id: 13,
      year: 2027,
      content:
        "Ожидается сближение астероида (137108) 1999 AN10 с Землёй на минимальное расстояние.",
    },
    {
      id: 14,
      year: 2028,
      content:
        "Ожидается очередное полное солнечное затмение, проходящее через Австралию и Новую Зеландию.",
    },
  ],
  5: [
    {
      id: 15,
      year: 2029,
      content:
        "13 апреля — астероид Апофис пролетит на расстоянии всего 31 000 км от Земли, что ближе, чем орбиты некоторых спутников.",
    },
    {
      id: 16,
      year: 2030,
      content:
        "Запланирован запуск миссии «Европа Клипер» для исследования ледяного спутника Юпитера — Европы, где возможна жизнь в подледном океане.",
    },
    {
      id: 17,
      year: 2031,
      content:
        "Ожидается завершение строительства первой лунной базы в рамках международного проекта «Лунная деревня».",
    },
    {
      id: 18,
      year: 9999,
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: 19,
      year: 9999,
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: 20,
      year: 9999,
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ],
};