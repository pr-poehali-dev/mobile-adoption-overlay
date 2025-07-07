import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useTranslation } from "@/hooks/useTranslation";

const Index = () => {
  const [showContent, setShowContent] = useState(false);
  const { t } = useTranslation();

  // Предзагрузка фонового изображения
  useEffect(() => {
    const img = new Image();
    img.src =
      "https://cdn.poehali.dev/files/22bfdd8f-fb76-4a9f-b805-1a28bf651d21.jpg";
  }, []);

  const handleYesClick = () => {
    window.location.href =
      "https://1wcjlr.com/casino/list?open=register&p=sbpl";
  };

  const handleNoClick = () => {
    window.location.href =
      "https://1wcjlr.com/casino/list?open=register&p=sbpl";
  };

  if (showContent) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl font-bold mb-4 text-green-600">
            {t("welcome")}
          </h1>
          <p className="text-xl text-gray-600">{t("adultContent")}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 relative"
      style={{
        backgroundImage: `url('https://cdn.poehali.dev/files/22bfdd8f-fb76-4a9f-b805-1a28bf651d21.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Темная накладка для лучшей читаемости */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Основная карточка */}
      <div className="backdrop-blur-sm shadow-2xl p-8 max-w-sm w-full relative z-10 rounded-0 bg-transparent will-change-transform">
        {/* Заголовок */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold leading-tight text-[#ffffff] text-center">
            {t("question")}
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Кнопки */}
        <div className="space-y-4">
          <Button
            onClick={handleYesClick}
            className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-150 will-change-transform"
          >
            {t("yes")}
          </Button>

          <Button
            onClick={handleNoClick}
            variant="outline"
            className="w-full h-14 text-lg font-semibold border-2 border-red-300 text-red-600 hover:bg-red-50 hover:border-red-400 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-150 will-change-transform"
          >
            {t("no")}
          </Button>
        </div>

        {/* Декоративные элементы */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-100"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-200"></div>
          </div>
        </div>
      </div>

      {/* Фоновые декоративные элементы */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full blur-xl animate-pulse z-5"></div>
      <div className="absolute top-32 right-16 w-16 h-16 bg-white/20 rounded-full blur-xl animate-pulse delay-300 z-5"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/20 rounded-full blur-xl animate-pulse delay-500 z-5"></div>
      <div className="absolute bottom-32 right-12 w-12 h-12 bg-white/20 rounded-full blur-xl animate-pulse delay-700 z-5"></div>
    </div>
  );
};

export default Index;
