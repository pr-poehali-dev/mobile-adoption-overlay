import { useState, useEffect } from "react";

interface Translations {
  [key: string]: {
    question: string;
    yes: string;
    no: string;
    welcome: string;
    adultContent: string;
  };
}

const translations: Translations = {
  // Русский
  RU: {
    question: "Вам есть 18?",
    yes: "Да",
    no: "Нет",
    welcome: "Добро пожаловать!",
    adultContent: "Контент для взрослых пользователей",
  },
  // Английский
  US: {
    question: "Are you 18+?",
    yes: "Yes",
    no: "No",
    welcome: "Welcome!",
    adultContent: "Adult content",
  },
  // Немецкий
  DE: {
    question: "Sind Sie 18+?",
    yes: "Ja",
    no: "Nein",
    welcome: "Willkommen!",
    adultContent: "Inhalte für Erwachsene",
  },
  // Французский
  FR: {
    question: "Avez-vous 18 ans?",
    yes: "Oui",
    no: "Non",
    welcome: "Bienvenue!",
    adultContent: "Contenu pour adultes",
  },
  // Испанский
  ES: {
    question: "¿Tienes 18 años?",
    yes: "Sí",
    no: "No",
    welcome: "¡Bienvenido!",
    adultContent: "Contenido para adultos",
  },
  // Итальянский
  IT: {
    question: "Hai 18 anni?",
    yes: "Sì",
    no: "No",
    welcome: "Benvenuto!",
    adultContent: "Contenuto per adulti",
  },
  // Португальский
  PT: {
    question: "Você tem 18 anos?",
    yes: "Sim",
    no: "Não",
    welcome: "Bem-vindo!",
    adultContent: "Conteúdo adulto",
  },
  // Турецкий
  TR: {
    question: "18 yaşında mısınız?",
    yes: "Evet",
    no: "Hayır",
    welcome: "Hoş geldiniz!",
    adultContent: "Yetişkin içeriği",
  },
  // Польский
  PL: {
    question: "Czy masz 18 lat?",
    yes: "Tak",
    no: "Nie",
    welcome: "Witamy!",
    adultContent: "Treść dla dorosłych",
  },
  // Украинский
  UA: {
    question: "Вам є 18?",
    yes: "Так",
    no: "Ні",
    welcome: "Ласкаво просимо!",
    adultContent: "Контент для дорослих",
  },
  // Казахский
  KZ: {
    question: "Сізге 18 жас толды ма?",
    yes: "Иә",
    no: "Жоқ",
    welcome: "Қош келдіңіз!",
    adultContent: "Ересектерге арналған мазмұн",
  },
  // Белорусский
  BY: {
    question: "Вам ёсць 18?",
    yes: "Так",
    no: "Не",
    welcome: "Запрашаем!",
    adultContent: "Кантэнт для дарослых",
  },
  // Узбекский
  UZ: {
    question: "Sizga 18 yoshmi?",
    yes: "Ha",
    no: "Yo'q",
    welcome: "Xush kelibsiz!",
    adultContent: "Kattalar uchun kontent",
  },
  // Азербайджанский
  AZ: {
    question: "Sizin 18 yaşınız var?",
    yes: "Bəli",
    no: "Xeyr",
    welcome: "Xoş gəldiniz!",
    adultContent: "Böyüklər üçün məzmun",
  },
  // Грузинский
  GE: {
    question: "ხართ 18 წლის?",
    yes: "კი",
    no: "არა",
    welcome: "კეთილი იყოს თქვენი მობრძანება!",
    adultContent: "ზრდასრულთა კონტენტი",
  },
  // Армянский
  AM: {
    question: "Դուք 18 տարեկան եք?",
    yes: "Այո",
    no: "Ոչ",
    welcome: "Բարի գալուստ!",
    adultContent: "Մեծահասակների բովանդակություն",
  },
};

const countryToLanguage: { [key: string]: string } = {
  RU: "RU",
  BY: "BY",
  KZ: "KZ",
  UA: "UA",
  UZ: "UZ",
  AZ: "AZ",
  GE: "GE",
  AM: "AM",
  US: "US",
  GB: "US",
  CA: "US",
  AU: "US",
  IE: "US",
  NZ: "US",
  DE: "DE",
  AT: "DE",
  CH: "DE",
  FR: "FR",
  BE: "FR",
  LU: "FR",
  MC: "FR",
  ES: "ES",
  MX: "ES",
  AR: "ES",
  CO: "ES",
  VE: "ES",
  CL: "ES",
  PE: "ES",
  EC: "ES",
  IT: "IT",
  SM: "IT",
  VA: "IT",
  PT: "PT",
  BR: "PT",
  AO: "PT",
  MZ: "PT",
  TR: "TR",
  CY: "TR",
  PL: "PL",
};

export const useTranslation = () => {
  const [language, setLanguage] = useState<string>("RU");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const detectLanguage = async () => {
      try {
        // Используем ipapi.co для определения страны
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();

        const countryCode = data.country_code;
        const detectedLanguage = countryToLanguage[countryCode] || "RU";

        setLanguage(detectedLanguage);
        console.log(
          `Detected country: ${countryCode}, Language: ${detectedLanguage}`,
        );
      } catch (error) {
        console.error("Error detecting location:", error);
        // Fallback к определению по браузеру
        const browserLang = navigator.language.split("-")[0].toUpperCase();
        const fallbackLang = Object.keys(translations).includes(browserLang)
          ? browserLang
          : "RU";
        setLanguage(fallbackLang);
      } finally {
        setIsLoading(false);
      }
    };

    detectLanguage();
  }, []);

  const t = (key: keyof Translations[string]) => {
    return translations[language]?.[key] || translations["RU"][key];
  };

  return { t, language, isLoading };
};
