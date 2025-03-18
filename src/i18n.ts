import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// ایمپورت فایل‌های JSON
import en from './Locales/en.json';
import fa from './Locales/fa.json';
import tr from './Locales/tr.json';
import ru from './Locales/ru.json';
import ar from './Locales/ar.json';
import ur from './Locales/ur.json';
import zh from './Locales/zh.json';

const resources = {
  en: { translation: en },
  fa: { translation: fa },
  tr: { translation: tr },
  ru: { translation: ru },
  ar: { translation: ar },
  ur: { translation: ur },
  zh: { translation: zh }
};

i18n
  .use(LanguageDetector) // تشخیص خودکار زبان مرورگر
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "fa", // زبان پیش‌فرض
    interpolation: { escapeValue: false }
  });

export default i18n;
