"use client";

import Image from "next/image";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import {
  Activity,
  BarChart3,
  CheckCircle2,
  Building2,
  ChartLine,
  Construction,
  Cpu,
  Droplets,
  Factory,
  Flame,
  Gauge,
  HeartPulse,
  LayoutDashboard,
  Moon,
  Mountain,
  Move,
  QrCode,
  Shield,
  ShieldCheck,
  TriangleAlert,
  Truck,
  User,
  UserCheck,
  Waves,
  Watch,
  Wind,
  Zap,
  type LucideIcon,
} from "lucide-react";

type Lang = "en" | "ru" | "kz";
type FieldName = "name" | "company" | "position" | "email" | "phone";
type FormState = Record<FieldName, string>;
type FormErrors = Partial<Record<FieldName, string>>;

const copy = {
  en: {
    brand: "BONS AI",
    nav: {
      problem: "Problem",
      how: "How It Works",
      bracelet: "Bracelet",
      dashboard: "Dashboard",
      impact: "Impact",
      industries: "Industries",
      contact: "Contact",
    },
    actions: {
      requestDemo: "Request Demo",
      downloadPresentation: "Download Presentation",
    },
    hero: {
      eyebrow: "Industrial Workforce Intelligence",
      title: "Bons AI - Digital Workforce Health & Performance Monitoring",
      subtitle:
        "Smart wearable technology and intelligent analytics to reduce risks, prevent burnout, and increase operational efficiency.",
      panelTitle: "Live Workforce Status",
      panelItems: {
        heartRate: "HR",
        stress: "Stress",
        alert: "Alert",
        stressValue: "Moderate",
        alertValue: "Stable",
        gauge: "Readiness Scale",
        realtime: "Real-time",
      },
    },
    problem: {
      title: "Workforce Health & Safety Challenges",
      stats: [
        { value: "30%", text: "of industrial deaths are related to cardiovascular risks" },
        { value: "40%", text: "of shift-related accidents are caused by fatigue" },
        { value: "10-15%", text: "productivity loss due to stress and sleep disruption" },
        { value: "15-20%", text: "of shift workers show discipline and engagement decline" },
      ],
    },
    how: {
      title: "How It Works",
      stepLabel: "Step",
      steps: [
        {
          title: "Employee",
          text: "Daily activity and physiological indicators are captured without interrupting work.",
        },
        {
          title: "Smart Bracelet",
          text: "Sensors collect vital and movement signals continuously during shifts.",
        },
        {
          title: "Bons AI Platform",
          text: "AI models process signals and identify fatigue, anomaly, and risk patterns.",
        },
        {
          title: "HR & Management Dashboard",
          text: "Teams receive practical alerts, recommendations, and operational analytics.",
        },
      ],
    },
    bracelet: {
      title: "Smart Bracelet",
      sensors: "Sensors",
      durability: "Industrial durability",
      sensorsList: [
        "Heart rate",
        "Blood pressure",
        "Blood oxygen",
        "Stress level",
        "Motion & impact detection",
        "Activity tracking",
      ],
      durabilityList: [
        "Water resistant",
        "Dust protection",
        "Shock resistant",
        "Operates in low temperatures",
      ],
    },
    dashboard: {
      title: "Digital Profile for Every Employee",
      list: [
        "Individual performance analytics",
        "Real-time anomaly detection",
        "Fatigue and burnout alerts",
        "Personalized recommendations",
        "KPI tracking",
        "Department-level analytics",
      ],
      panelTitle: "Operations Dashboard",
      panelLive: "Real-time",
      charts: {
        fatigue: "Fatigue Index",
        forecast: "Incident Forecast",
        performance: "Department Performance",
      },
    },
    discipline: {
      title: "Work Discipline Monitoring",
      items: [
        {
          title: "Random location verification",
          text: "Context-aware spot checks confirm attendance and location consistency without friction.",
        },
        {
          title: "Dynamic QR-code scanning",
          text: "Time-bound QR workflows validate task presence and shift handover milestones.",
        },
        {
          title: "Selfie confirmation",
          text: "Identity checks support trusted reporting while keeping the process simple for workers.",
        },
        {
          title: "Activity transparency reporting",
          text: "Management dashboards summarize field activity trends for fair and clear oversight.",
        },
      ],
    },
    impact: {
      title: "Business Impact",
      before: "Before Implementation",
      after: "After Implementation",
      beforeList: ["Reactive management", "Hidden fatigue", "Unpredictable incidents", "Low visibility"],
      afterList: [
        "Predictive risk prevention",
        "Health-based scheduling",
        "Incident reduction",
        "Data-driven decisions",
      ],
      metrics: [
        { value: "32%", text: "faster response to fatigue indicators" },
        { value: "21%", text: "improvement in shift efficiency trends" },
        { value: "18%", text: "reduction in avoidable incident risk patterns" },
      ],
    },
    implementation: {
      title: "Implementation Process",
      phase1: "Phase 1",
      phase2: "Phase 2",
      phase1List: [
        "Platform development and AI configuration",
        "Sensor integration",
        "Digital profile setup",
        "Risk detection system",
      ],
      phase2List: [
        "Wearable deployment",
        "Discipline rule configuration",
        "Dashboard onboarding",
        "Model optimization",
      ],
    },
    industries: {
      title: "Industries",
      list: ["Mining", "Construction", "Oil & Gas", "Logistics", "Industrial Manufacturing", "Energy"],
    },
    cta: {
      title: "Ready to Transform Workforce Safety & Performance?",
      subtitle: "Request a personalized demonstration of Bons AI.",
      fields: {
        name: "Name",
        company: "Company",
        position: "Position",
        email: "Email",
        phone: "Phone",
      },
      submit: "Request Demo",
      submitSending: "Отправка...",
      success: "Спасибо! Ваша заявка успешно отправлена.",
      submitError: "Не удалось отправить заявку. Попробуйте ещё раз.",
      validation: {
        nameRequired: "Please enter your name.",
        nameMin: "Name must be at least 2 characters.",
        companyRequired: "Please enter your company name.",
        positionRequired: "Please enter your position.",
        emailRequired: "Please enter your email.",
        emailInvalid: "Please enter a valid email address.",
        phoneRequired: "Please enter your phone number.",
        phoneInvalid: "Please enter a valid phone number.",
      },
    },
  },
  ru: {
    brand: "BONS AI",
    nav: {
      problem: "Проблема",
      how: "Как работает",
      bracelet: "Браслет",
      dashboard: "Панель",
      impact: "Эффект",
      industries: "Отрасли",
      contact: "Контакты",
    },
    actions: {
      requestDemo: "Запросить демо",
      downloadPresentation: "Скачать презентацию",
    },
    hero: {
      eyebrow: "Индустриальная аналитика персонала",
      title: "Bons AI - Цифровой мониторинг здоровья и эффективности персонала",
      subtitle:
        "Умные носимые устройства и интеллектуальная аналитика для снижения рисков, профилактики выгорания и роста операционной эффективности.",
      panelTitle: "Статус персонала в реальном времени",
      panelItems: {
        heartRate: "Пульс",
        stress: "Стресс",
        alert: "Статус",
        stressValue: "Умеренный",
        alertValue: "Стабильно",
        gauge: "Шкала готовности",
        realtime: "Онлайн",
      },
    },
    problem: {
      title: "Проблемы здоровья и безопасности персонала",
      stats: [
        { value: "30%", text: "промышленных смертей связаны с сердечно-сосудистыми рисками" },
        { value: "40%", text: "сменных инцидентов вызваны усталостью" },
        { value: "10-15%", text: "потери производительности из-за стресса и нарушений сна" },
        { value: "15-20%", text: "сменных сотрудников демонстрируют снижение дисциплины и вовлеченности" },
      ],
    },
    how: {
      title: "Как это работает",
      stepLabel: "Шаг",
      steps: [
        {
          title: "Сотрудник",
          text: "Ежедневная активность и физиологические показатели фиксируются без вмешательства в рабочий процесс.",
        },
        {
          title: "Умный браслет",
          text: "Датчики непрерывно собирают жизненные и поведенческие сигналы в течение смены.",
        },
        {
          title: "Платформа Bons AI",
          text: "AI-модели обрабатывают данные и выявляют паттерны усталости, аномалий и рисков.",
        },
        {
          title: "Панель HR и руководства",
          text: "Команды получают прикладные алерты, рекомендации и операционную аналитику.",
        },
      ],
    },
    bracelet: {
      title: "Умный браслет",
      sensors: "Датчики",
      durability: "Промышленная надежность",
      sensorsList: [
        "Частота сердцебиения",
        "Артериальное давление",
        "Насыщение крови кислородом",
        "Уровень стресса",
        "Детекция движения и ударов",
        "Трекинг активности",
      ],
      durabilityList: [
        "Влагозащита",
        "Защита от пыли",
        "Ударопрочность",
        "Работа при низких температурах",
      ],
    },
    dashboard: {
      title: "Цифровой профиль каждого сотрудника",
      list: [
        "Персональная аналитика эффективности",
        "Обнаружение аномалий в реальном времени",
        "Алерты усталости и выгорания",
        "Персонализированные рекомендации",
        "Отслеживание KPI",
        "Аналитика по подразделениям",
      ],
      panelTitle: "Операционная панель",
      panelLive: "Реальное время",
      charts: {
        fatigue: "Индекс усталости",
        forecast: "Прогноз инцидентов",
        performance: "Эффективность подразделений",
      },
    },
    discipline: {
      title: "Мониторинг трудовой дисциплины",
      items: [
        {
          title: "Случайная проверка геолокации",
          text: "Контекстные проверки подтверждают присутствие и корректность локации без лишней нагрузки на персонал.",
        },
        {
          title: "Динамическое QR-сканирование",
          text: "Ограниченные по времени QR-сценарии фиксируют присутствие на задаче и этапы передачи смены.",
        },
        {
          title: "Selfie-подтверждение",
          text: "Идентификационные проверки повышают достоверность отчетности и сохраняют удобство для сотрудников.",
        },
        {
          title: "Прозрачная отчетность по активности",
          text: "Панель руководства отображает тенденции полевой активности для взвешенного контроля.",
        },
      ],
    },
    impact: {
      title: "Бизнес-эффект",
      before: "До внедрения",
      after: "После внедрения",
      beforeList: [
        "Реактивное управление",
        "Скрытая усталость",
        "Непредсказуемые инциденты",
        "Низкая прозрачность",
      ],
      afterList: [
        "Предиктивная профилактика рисков",
        "Планирование смен на основе здоровья",
        "Снижение инцидентов",
        "Управление на основе данных",
      ],
      metrics: [
        { value: "32%", text: "ускорение реакции на индикаторы усталости" },
        { value: "21%", text: "рост эффективности сменной работы" },
        { value: "18%", text: "снижение предотвратимых риск-паттернов" },
      ],
    },
    implementation: {
      title: "Этапы внедрения",
      phase1: "Этап 1",
      phase2: "Этап 2",
      phase1List: [
        "Разработка платформы и настройка AI",
        "Интеграция датчиков",
        "Настройка цифровых профилей",
        "Система детекции рисков",
      ],
      phase2List: [
        "Развертывание носимых устройств",
        "Настройка правил дисциплины",
        "Онбординг в дашборд",
        "Оптимизация моделей",
      ],
    },
    industries: {
      title: "Отрасли",
      list: ["Горнодобыча", "Строительство", "Нефть и газ", "Логистика", "Промышленное производство", "Энергетика"],
    },
    cta: {
      title: "Готовы повысить безопасность и эффективность персонала?",
      subtitle: "Запросите персонализированную демонстрацию Bons AI.",
      fields: {
        name: "Имя",
        company: "Компания",
        position: "Должность",
        email: "Email",
        phone: "Телефон",
      },
      submit: "Запросить демо",
      submitSending: "Отправка...",
      success: "Спасибо! Ваша заявка успешно отправлена.",
      submitError: "Не удалось отправить заявку. Попробуйте ещё раз.",
      validation: {
        nameRequired: "Укажите имя.",
        nameMin: "Имя должно содержать минимум 2 символа.",
        companyRequired: "Укажите компанию.",
        positionRequired: "Укажите должность.",
        emailRequired: "Укажите email.",
        emailInvalid: "Введите корректный email.",
        phoneRequired: "Укажите телефон.",
        phoneInvalid: "Введите корректный номер телефона.",
      },
    },
  },
  kz: {
    brand: "BONS AI",
    nav: {
      problem: "Мәселе",
      how: "Қалай жұмыс істейді",
      bracelet: "Білезік",
      dashboard: "Панель",
      impact: "Нәтиже",
      industries: "Салалар",
      contact: "Байланыс",
    },
    actions: {
      requestDemo: "Демо сұрау",
      downloadPresentation: "Презентацияны жүктеу",
    },
    hero: {
      eyebrow: "Өндірістік персонал аналитикасы",
      title: "Bons AI - Қызметкерлердің денсаулығы мен өнімділігін цифрлық мониторингтеу",
      subtitle:
        "Ақылды тағылатын құрылғылар және интеллектуалды аналитика тәуекелдерді төмендетуге, күйзеліс пен қажуды алдын алуға, операциялық тиімділікті арттыруға көмектеседі.",
      panelTitle: "Персонал күйі нақты уақытта",
      panelItems: {
        heartRate: "Пульс",
        stress: "Стресс",
        alert: "Мәртебе",
        stressValue: "Орташа",
        alertValue: "Тұрақты",
        gauge: "Дайындық шкаласы",
        realtime: "Нақты уақыт",
      },
    },
    problem: {
      title: "Қызметкерлер денсаулығы мен қауіпсіздігі мәселелері",
      stats: [
        { value: "30%", text: "өндірістегі өлім-жітім жүрек-қан тамырлары тәуекелдерімен байланысты" },
        { value: "40%", text: "ауысым кезіндегі оқиғалар шаршаудан туындайды" },
        { value: "10-15%", text: "стресс пен ұйқы бұзылуына байланысты өнімділік төмендейді" },
        { value: "15-20%", text: "ауысым қызметкерлерінде тәртіп пен қатысу төмендеуі байқалады" },
      ],
    },
    how: {
      title: "Бұл қалай жұмыс істейді",
      stepLabel: "Қадам",
      steps: [
        {
          title: "Қызметкер",
          text: "Күнделікті белсенділік пен физиологиялық көрсеткіштер жұмыс процесін бұзбай жиналады.",
        },
        {
          title: "Ақылды білезік",
          text: "Датчиктер ауысым бойы өмірлік және қозғалыс сигналдарын үздіксіз тіркейді.",
        },
        {
          title: "Bons AI платформасы",
          text: "AI-модельдер деректерді өңдеп, шаршау, ауытқу және тәуекел үлгілерін анықтайды.",
        },
        {
          title: "HR және басшылық панелі",
          text: "Командалар нақты ескертулер, ұсыныстар және операциялық аналитика алады.",
        },
      ],
    },
    bracelet: {
      title: "Ақылды білезік",
      sensors: "Датчиктер",
      durability: "Өндірістік төзімділік",
      sensorsList: [
        "Жүрек соғу жиілігі",
        "Қан қысымы",
        "Қандағы оттегі деңгейі",
        "Стресс деңгейі",
        "Қозғалыс пен соққыны анықтау",
        "Белсенділікті бақылау",
      ],
      durabilityList: [
        "Суға төзімді",
        "Шаңнан қорғаныс",
        "Соққыға төзімді",
        "Төмен температурада жұмыс істейді",
      ],
    },
    dashboard: {
      title: "Әр қызметкер үшін цифрлық профиль",
      list: [
        "Жеке өнімділік аналитикасы",
        "Нақты уақыттағы ауытқуды анықтау",
        "Шаршау және күйзеліс ескертулері",
        "Жекелендірілген ұсыныстар",
        "KPI көрсеткіштерін бақылау",
        "Бөлім деңгейіндегі аналитика",
      ],
      panelTitle: "Операциялық панель",
      panelLive: "Нақты уақыт",
      charts: {
        fatigue: "Шаршау индексі",
        forecast: "Оқиға болжамы",
        performance: "Бөлім өнімділігі",
      },
    },
    discipline: {
      title: "Еңбек тәртібін мониторингтеу",
      items: [
        {
          title: "Кездейсоқ локацияны тексеру",
          text: "Контекстке негізделген тексерістер қатысу мен орналасуды артық жүктемесіз растайды.",
        },
        {
          title: "Динамикалық QR-сканерлеу",
          text: "Уақытпен шектелген QR-сценарийлер тапсырмадағы болуды және ауысым тапсыру кезеңін бекітеді.",
        },
        {
          title: "Selfie растау",
          text: "Сәйкестендіру тексерістері есептің сенімділігін арттырып, қызметкерге ыңғайлылық сақтайды.",
        },
        {
          title: "Белсенділік бойынша ашық есеп",
          text: "Басшылық панелі теңгерімді бақылау үшін далалық белсенділік трендтерін көрсетеді.",
        },
      ],
    },
    impact: {
      title: "Бизнес нәтижесі",
      before: "Енгізуге дейін",
      after: "Енгізгеннен кейін",
      beforeList: [
        "Реактивті басқару",
        "Жасырын шаршау",
        "Болжаусыз оқиғалар",
        "Төмен ашықтық",
      ],
      afterList: [
        "Тәуекелдерді болжап алдын алу",
        "Денсаулыққа негізделген ауысым жоспарлау",
        "Оқиғалардың азаюы",
        "Дерекке негізделген шешім",
      ],
      metrics: [
        { value: "32%", text: "шаршау индикаторларына жылдам әрекет" },
        { value: "21%", text: "ауысым тиімділігі трендінің өсуі" },
        { value: "18%", text: "алдын алуға болатын тәуекел үлгілерінің төмендеуі" },
      ],
    },
    implementation: {
      title: "Енгізу кезеңдері",
      phase1: "1-кезең",
      phase2: "2-кезең",
      phase1List: [
        "Платформаны әзірлеу және AI баптау",
        "Датчиктерді интеграциялау",
        "Цифрлық профильдерді орнату",
        "Тәуекелдерді анықтау жүйесі",
      ],
      phase2List: [
        "Тағылатын құрылғыларды енгізу",
        "Тәртіп ережелерін баптау",
        "Дашбордқа онбординг",
        "Модельдерді оңтайландыру",
      ],
    },
    industries: {
      title: "Салалар",
      list: ["Тау-кен", "Құрылыс", "Мұнай және газ", "Логистика", "Өнеркәсіптік өндіріс", "Энергетика"],
    },
    cta: {
      title: "Қызметкерлер қауіпсіздігі мен өнімділігін арттыруға дайынсыз ба?",
      subtitle: "Bons AI бойынша жеке демонстрацияға сұраныс жіберіңіз.",
      fields: {
        name: "Аты",
        company: "Компания",
        position: "Лауазым",
        email: "Email",
        phone: "Телефон",
      },
      submit: "Демо сұрау",
      submitSending: "Отправка...",
      success: "Спасибо! Ваша заявка успешно отправлена.",
      submitError: "Не удалось отправить заявку. Попробуйте ещё раз.",
      validation: {
        nameRequired: "Атыңызды енгізіңіз.",
        nameMin: "Аты кемінде 2 таңбадан тұруы керек.",
        companyRequired: "Компания атауын енгізіңіз.",
        positionRequired: "Лауазымды енгізіңіз.",
        emailRequired: "Email енгізіңіз.",
        emailInvalid: "Дұрыс email мекенжайын енгізіңіз.",
        phoneRequired: "Телефон нөмірін енгізіңіз.",
        phoneInvalid: "Дұрыс телефон нөмірін енгізіңіз.",
      },
    },
  },
} as const;

const navOrder = ["problem", "how-it-works", "bracelet", "dashboard", "impact", "industries", "contact"] as const;
const disciplineIcons = [Move, QrCode, UserCheck, ChartLine] as const;
const sensorIcons = [HeartPulse, Gauge, Waves, Activity, Move, ChartLine] as const;
const durabilityIcons = [Droplets, Wind, Shield, Building2] as const;
const industryIcons = [Mountain, Construction, Flame, Truck, Factory, Zap] as const;
const problemIcons = [HeartPulse, Moon, BarChart3, ShieldCheck] as const;
const howIcons = [User, Watch, Cpu, LayoutDashboard] as const;
const ImpactBeforeIcon = TriangleAlert;
const ImpactAfterIcon = CheckCircle2;
const dashboardBarTargets = [55, 78, 44, 82, 68] as const;
const initialFormState: FormState = {
  name: "",
  company: "",
  position: "",
  email: "",
  phone: "",
};

const langOptions: ReadonlyArray<{ key: Lang; label: string }> = [
  { key: "en", label: "EN" },
  { key: "ru", label: "RU" },
  { key: "kz", label: "KZ" },
];

function validateField(field: FieldName, value: string, t: (typeof copy)[Lang]["cta"]["validation"]): string | undefined {
  const trimmed = value.trim();
  const phoneDigits = value.replace(/\D/g, "");

  if (field === "name") {
    if (!trimmed) return t.nameRequired;
    if (trimmed.length < 2) return t.nameMin;
    return undefined;
  }

  if (field === "company") {
    return trimmed ? undefined : t.companyRequired;
  }

  if (field === "position") {
    return undefined;
  }

  if (field === "email") {
    if (!trimmed) return t.emailRequired;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return t.emailInvalid;
    return undefined;
  }

  if (field === "phone") {
    if (!trimmed) return t.phoneRequired;
    if (phoneDigits.length < 7 || phoneDigits.length > 15) return t.phoneInvalid;
    return undefined;
  }

  return undefined;
}

function validateForm(data: FormState, t: (typeof copy)[Lang]["cta"]["validation"]): FormErrors {
  const fields: FieldName[] = ["name", "company", "email", "phone"];
  return fields.reduce<FormErrors>((acc, field) => {
    const error = validateField(field, data[field], t);
    if (error) acc[field] = error;
    return acc;
  }, {});
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("ru");
  const [activeSection, setActiveSection] = useState<string>("problem");
  const [reducedMotion, setReducedMotion] = useState(false);
  const [heroGauge, setHeroGauge] = useState(0);
  const [heroBpm, setHeroBpm] = useState(0);
  const [heroLiveStarted, setHeroLiveStarted] = useState(false);
  const [dashboardLiveStarted, setDashboardLiveStarted] = useState(false);
  const [impactLiveStarted, setImpactLiveStarted] = useState(false);
  const [impactCounts, setImpactCounts] = useState([0, 0, 0]);
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});
  const [honeypot, setHoneypot] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const t = copy[lang];

  useEffect(() => {
    const stored = window.localStorage.getItem("bons-lang");
    if (stored === "en" || stored === "ru" || stored === "kz") {
      setLang(stored);
    }

    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("bons-lang", lang);
  }, [lang]);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((element) => revealObserver.observe(element));

    return () => revealObserver.disconnect();
  }, [lang]);

  useEffect(() => {
    const sections = navOrder
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => node !== null);

    const spyObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveSection(visible[0].target.id);
        }
      },
      { threshold: [0.2, 0.35, 0.55], rootMargin: "-20% 0px -55% 0px" },
    );

    sections.forEach((section) => spyObserver.observe(section));

    return () => spyObserver.disconnect();
  }, [lang]);

  useEffect(() => {
    const heroSection = document.getElementById("hero");
    if (!heroSection || heroLiveStarted) {
      return;
    }

    const targetGauge = 83;
    const targetBpm = 72;

    const heroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || heroLiveStarted) {
            return;
          }

          setHeroLiveStarted(true);

          if (reducedMotion) {
            setHeroGauge(targetGauge);
            setHeroBpm(targetBpm);
            heroObserver.unobserve(entry.target);
            return;
          }

          const start = performance.now();
          const duration = 1050;
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setHeroGauge(Math.round(targetGauge * eased));
            setHeroBpm(Math.round(targetBpm * eased));
            if (progress < 1) {
              window.requestAnimationFrame(animate);
            }
          };

          window.requestAnimationFrame(animate);
          heroObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.35 },
    );

    heroObserver.observe(heroSection);
    return () => heroObserver.disconnect();
  }, [heroLiveStarted, reducedMotion]);

  useEffect(() => {
    const dashboardSection = document.getElementById("dashboard");
    if (!dashboardSection || dashboardLiveStarted) {
      return;
    }

    const dashboardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setDashboardLiveStarted(true);
            dashboardObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.28 },
    );

    dashboardObserver.observe(dashboardSection);
    return () => dashboardObserver.disconnect();
  }, [dashboardLiveStarted]);

  useEffect(() => {
    const impactSection = document.getElementById("impact");
    if (!impactSection || impactLiveStarted) {
      return;
    }

    const targets = [32, 21, 18];
    const impactObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          setImpactLiveStarted(true);
          if (reducedMotion) {
            setImpactCounts(targets);
            impactObserver.unobserve(entry.target);
            return;
          }

          const start = performance.now();
          const duration = 900;
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setImpactCounts(targets.map((target) => Math.round(target * eased)));
            if (progress < 1) {
              window.requestAnimationFrame(animate);
            }
          };
          window.requestAnimationFrame(animate);
          impactObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.35 },
    );

    impactObserver.observe(impactSection);
    return () => impactObserver.disconnect();
  }, [impactLiveStarted, reducedMotion]);

  useEffect(() => {
    if (Object.keys(touched).length === 0) return;
    const refreshedErrors: FormErrors = {};
    (Object.keys(touched) as FieldName[]).forEach((field) => {
      if (!touched[field]) return;
      const error = validateField(field, formData[field], t.cta.validation);
      if (error) refreshedErrors[field] = error;
    });
    setFormErrors(refreshedErrors);
  }, [lang, t.cta.validation, touched, formData]);

  const navLabels = useMemo(
    () => [
      { id: "problem", label: t.nav.problem },
      { id: "how-it-works", label: t.nav.how },
      { id: "bracelet", label: t.nav.bracelet },
      { id: "dashboard", label: t.nav.dashboard },
      { id: "impact", label: t.nav.impact },
      { id: "industries", label: t.nav.industries },
      { id: "contact", label: t.nav.contact },
    ],
    [t],
  );

  const formValidation = useMemo(() => validateForm(formData, t.cta.validation), [formData, t.cta.validation]);
  const isFormValid = Object.keys(formValidation).length === 0;

  const handleBlur = (field: FieldName) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setSubmitSuccess(false);
    setSubmitError("");
    const error = validateField(field, formData[field], t.cta.validation);
    setFormErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (field: FieldName, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setSubmitSuccess(false);
    setSubmitError("");
    if (touched[field]) {
      const error = validateField(field, value, t.cta.validation);
      setFormErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fields: FieldName[] = ["name", "company", "position", "email", "phone"];
    const allTouched = fields.reduce<Partial<Record<FieldName, boolean>>>((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);
    setSubmitSuccess(false);
    setSubmitError("");

    const nextErrors = validateForm(formData, t.cta.validation);
    setFormErrors(nextErrors);
    const firstInvalid = fields.find((field) => nextErrors[field]);
    if (firstInvalid) {
      const invalidEl = document.getElementById(`field-${firstInvalid}`);
      invalidEl?.focus();
      return;
    }

    if (honeypot.trim()) {
      setSubmitSuccess(true);
      setFormData(initialFormState);
      setHoneypot("");
      setTouched({});
      setFormErrors({});
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/demo-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          honeypot,
        }),
      });

      const result = (await response.json()) as { success?: boolean };
      if (!response.ok || !result.success) {
        throw new Error("submit_failed");
      }

      setSubmitSuccess(true);
      setFormData(initialFormState);
      setHoneypot("");
      setTouched({});
      setFormErrors({});
    } catch {
      setSubmitError(t.cta.submitError);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="enterprise-page">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#hero" className="text-base font-semibold tracking-[0.16em] text-slate-900">
            {t.brand}
          </a>

          <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.1em] text-slate-600 lg:flex">
            {navLabels.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? "nav-link-active" : ""}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <div className="text-sm font-medium text-slate-500">
              {langOptions.map((option, index) => (
                <span key={option.key}>
                  <button
                    type="button"
                    onClick={() => setLang(option.key)}
                    className={`lang-btn ${lang === option.key ? "lang-btn-active" : ""}`}
                  >
                    {option.label}
                  </button>
                  {index < langOptions.length - 1 ? <span className="px-1">|</span> : null}
                </span>
              ))}
            </div>
            <a href="#contact" className="btn-primary hidden sm:inline-flex">
              {t.actions.requestDemo}
            </a>
          </div>
        </div>
      </header>

      <section id="hero" className="section-root border-b border-slate-200">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div className="reveal">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1 className="hero-title">{t.hero.title}</h1>
            <p className="hero-subtitle">{t.hero.subtitle}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary">
                {t.actions.requestDemo}
              </a>
              <a href="#contact" className="btn-secondary">
                {t.actions.downloadPresentation}
              </a>
            </div>
          </div>

          <div className="reveal relative">
            <div className="panel">
              <div className="hero-bracelet-wrap">
                <Image
                  src="/bracelet.png"
                  alt="Bons AI smart bracelet"
                  width={836}
                  height={1092}
                  priority
                  className="hero-bracelet bracelet-float"
                />
              </div>
              <div className="dashboard-overlay">
                <div className="mb-2 flex items-center justify-between">
                  <p className="panel-label">{t.hero.panelTitle}</p>
                  <span className="live-badge">
                    <span className={`live-dot ${heroLiveStarted ? "live-dot-active" : ""}`} />
                    {t.hero.panelItems.realtime}
                  </span>
                </div>
                <div className="mt-3 grid grid-cols-3 gap-3 text-xs">
                  <div>
                    <p className="text-slate-500">{t.hero.panelItems.heartRate}</p>
                    <p className="mt-1 font-medium text-slate-900">{heroBpm} bpm</p>
                  </div>
                  <div className={`hero-meta ${heroLiveStarted || reducedMotion ? "hero-meta-visible" : ""}`} style={{ ["--hero-delay" as string]: "110ms" }}>
                    <p className="text-slate-500">{t.hero.panelItems.stress}</p>
                    <p className="mt-1 font-medium text-slate-900">{t.hero.panelItems.stressValue}</p>
                  </div>
                  <div className={`hero-meta ${heroLiveStarted || reducedMotion ? "hero-meta-visible" : ""}`} style={{ ["--hero-delay" as string]: "180ms" }}>
                    <p className="text-slate-500">{t.hero.panelItems.alert}</p>
                    <p className="mt-1 font-medium text-[#1452cc]">{t.hero.panelItems.alertValue}</p>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-[10px] font-medium uppercase tracking-[0.13em] text-slate-500">{t.hero.panelItems.gauge}</p>
                  <div className="status-track" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={heroGauge}>
                    <span className={`status-fill ${heroLiveStarted ? "status-fill-active" : ""}`} style={{ width: `${heroGauge}%` }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="problem" className="section-root">
        <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="reveal text-center">
            <h2 className="section-title">{t.problem.title}</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {t.problem.stats.map((stat, index) => {
              const Icon = problemIcons[index];
              return (
                <article
                  key={stat.value + stat.text}
                  className="reveal card-flat card-interactive problem-card p-8"
                  style={{ ["--reveal-delay" as string]: `${index * 60}ms` }}
                  tabIndex={0}
                >
                  <span className="card-icon-wrap problem-card-icon" aria-hidden="true">
                    <Icon className="h-4 w-4" />
                  </span>
                  <p className="mt-4 stat-value">{stat.value}</p>
                  <p className="mt-4 max-w-sm text-sm text-slate-600 sm:text-base">{stat.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section-root border-y border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="reveal text-center">
            <h2 className="section-title">{t.how.title}</h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {t.how.steps.map((step, index) => {
              const Icon = howIcons[index] as LucideIcon;
              return (
                <div key={step.title} className="reveal relative" style={{ ["--reveal-delay" as string]: `${index * 60}ms` }}>
                  <article className="card-flat card-interactive h-full p-6" tabIndex={0}>
                    <span className="card-icon-wrap" aria-hidden="true">
                      <Icon className="h-4 w-4" />
                    </span>
                    <p className="mt-4 step-label">
                      {t.how.stepLabel} {index + 1}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-900">{step.title}</h3>
                    <p className="mt-3 text-sm text-slate-600">{step.text}</p>
                  </article>
                  {index < t.how.steps.length - 1 ? <span className="flow-arrow hidden lg:block">→</span> : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="bracelet" className="section-root">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="reveal">
            <div className="card-flat flex min-h-[430px] items-center justify-center p-10 lg:p-12">
              <Image
                src="/bracelet.png"
                alt="Bons AI bracelet"
                width={836}
                height={1092}
                className="bracelet-image bracelet-float"
              />
            </div>
          </div>

          <div className="reveal">
            <h2 className="section-title text-left">{t.bracelet.title}</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="card-flat card-interactive p-6" tabIndex={0}>
                <h3 className="list-title">
                  <Cpu className="h-5 w-5" /> {t.bracelet.sensors}
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  {t.bracelet.sensorsList.map((item, index) => {
                    const Icon = sensorIcons[index];
                    return (
                      <li key={item} className="feature-item">
                        <Icon className="h-4 w-4 text-[#1452cc]" />
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="card-flat card-interactive p-6" tabIndex={0}>
                <h3 className="list-title">
                  <Shield className="h-5 w-5" /> {t.bracelet.durability}
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  {t.bracelet.durabilityList.map((item, index) => {
                    const Icon = durabilityIcons[index];
                    return (
                      <li key={item} className="feature-item">
                        <Icon className="h-4 w-4 text-[#1452cc]" />
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="dashboard" className="section-root border-y border-slate-200 bg-white">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="reveal">
            <h2 className="section-title text-left">{t.dashboard.title}</h2>
            <ul className="mt-8 grid gap-3 text-sm text-slate-700 sm:text-base">
              {t.dashboard.list.map((feature, index) => (
                <li key={feature} className="card-flat card-interactive px-4 py-3" tabIndex={0} style={{ ["--reveal-delay" as string]: `${index * 35}ms` }}>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal">
            <div className="card-flat p-6 sm:p-7">
              <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.12em] text-slate-500">
                <span>{t.dashboard.panelTitle}</span>
                <span>{t.dashboard.panelLive}</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="chart-card card-interactive" tabIndex={0}>
                  <p>{t.dashboard.charts.fatigue}</p>
                  <div className={`bar-chart ${dashboardLiveStarted ? "bar-chart-live" : ""}`}>
                    {dashboardBarTargets.map((target, index) => (
                      <span
                        key={`${target}-${index}`}
                        className="dashboard-bar"
                        style={{
                          ["--bar-target" as string]: `${target}%`,
                          ["--bar-delay" as string]: `${index * 80}ms`,
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div className="chart-card card-interactive" tabIndex={0}>
                  <p>{t.dashboard.charts.forecast}</p>
                  <div className={`line-chart ${dashboardLiveStarted ? "line-chart-live" : ""}`} />
                </div>
                <div className="chart-card card-interactive sm:col-span-2" tabIndex={0}>
                  <p>{t.dashboard.charts.performance}</p>
                  <div className={`area-chart ${dashboardLiveStarted ? "area-chart-live" : ""}`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="discipline" className="section-root">
        <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="reveal text-center">
            <h2 className="section-title">{t.discipline.title}</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {t.discipline.items.map((feature, index) => {
              const Icon = disciplineIcons[index];
              return (
                <article
                  key={feature.title}
                  className="reveal card-flat card-interactive p-6"
                  style={{ ["--reveal-delay" as string]: `${index * 60}ms` }}
                  tabIndex={0}
                >
                  <Icon className="h-6 w-6 text-[#1452cc]" />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">{feature.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{feature.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="impact" className="section-root border-y border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="reveal text-center">
            <h2 className="section-title">{t.impact.title}</h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="reveal card-flat card-interactive impact-card p-8" tabIndex={0}>
              <h3 className="text-2xl font-semibold text-slate-900">{t.impact.before}</h3>
              <ul className="mt-5 space-y-3 text-slate-700">
                {t.impact.beforeList.map((item) => (
                  <li key={item} className="impact-list-item">
                    <ImpactBeforeIcon className="impact-list-icon text-slate-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="reveal card-flat card-interactive impact-card impact-card-positive p-8 border-[#1452cc]/25" tabIndex={0}>
              <h3 className="text-2xl font-semibold text-[#1452cc]">{t.impact.after}</h3>
              <ul className="mt-5 space-y-3 text-slate-700">
                {t.impact.afterList.map((item) => (
                  <li key={item} className="impact-list-item">
                    <ImpactAfterIcon className="impact-list-icon text-[#1452cc]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {t.impact.metrics.map((metric, index) => (
              <div
                key={metric.value + metric.text}
                className="reveal card-flat card-interactive p-6"
                style={{ ["--reveal-delay" as string]: `${index * 60}ms` }}
                tabIndex={0}
              >
                <p className="metric-value">{impactCounts[index]}%</p>
                <span className={`impact-progress ${impactLiveStarted ? "impact-progress-live" : ""}`} style={{ ["--impact-width" as string]: `${38 + index * 12}%` }} />
                <p className="mt-2 text-sm text-slate-600">{metric.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="section-root border-y border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="reveal text-center">
            <h2 className="section-title">{t.industries.title}</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.industries.list.map((industry, index) => {
              const Icon = industryIcons[index];
              return (
                <article
                  key={industry}
                  className="reveal card-flat card-interactive flex items-center gap-4 p-6"
                  style={{ ["--reveal-delay" as string]: `${index * 60}ms` }}
                  tabIndex={0}
                >
                  <Icon className="h-6 w-6 text-[#1452cc]" />
                  <p className="text-lg font-medium text-slate-900">{industry}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="section-root bg-[#f3f6fb]">
        <div className="mx-auto w-full max-w-4xl px-4 py-24 sm:px-6">
          <div className="reveal card-flat p-8 sm:p-10">
            <h2 className="section-title text-left">{t.cta.title}</h2>
            <p className="mt-4 text-slate-600 sm:text-lg">{t.cta.subtitle}</p>

            <form className="mt-8 grid gap-4 sm:grid-cols-2" noValidate onSubmit={handleSubmit}>
              <label className="form-field">
                <span>{t.cta.fields.name}</span>
                <input
                  id="field-name"
                  type="text"
                  name="name"
                  className={`form-input ${formErrors.name && touched.name ? "form-input-invalid" : ""}`}
                  placeholder={t.cta.fields.name}
                  value={formData.name}
                  onChange={(event) => handleChange("name", event.target.value)}
                  onBlur={() => handleBlur("name")}
                  aria-invalid={Boolean(formErrors.name && touched.name)}
                  aria-describedby={formErrors.name && touched.name ? "field-name-error" : undefined}
                />
                {formErrors.name && touched.name ? <span id="field-name-error" className="form-error">{formErrors.name}</span> : null}
              </label>
              <label className="form-field">
                <span>{t.cta.fields.company}</span>
                <input
                  id="field-company"
                  type="text"
                  name="company"
                  className={`form-input ${formErrors.company && touched.company ? "form-input-invalid" : ""}`}
                  placeholder={t.cta.fields.company}
                  value={formData.company}
                  onChange={(event) => handleChange("company", event.target.value)}
                  onBlur={() => handleBlur("company")}
                  aria-invalid={Boolean(formErrors.company && touched.company)}
                  aria-describedby={formErrors.company && touched.company ? "field-company-error" : undefined}
                />
                {formErrors.company && touched.company ? <span id="field-company-error" className="form-error">{formErrors.company}</span> : null}
              </label>
              <label className="form-field">
                <span>{t.cta.fields.position}</span>
                <input
                  id="field-position"
                  type="text"
                  name="position"
                  className={`form-input ${formErrors.position && touched.position ? "form-input-invalid" : ""}`}
                  placeholder={t.cta.fields.position}
                  value={formData.position}
                  onChange={(event) => handleChange("position", event.target.value)}
                  onBlur={() => handleBlur("position")}
                  aria-invalid={Boolean(formErrors.position && touched.position)}
                  aria-describedby={formErrors.position && touched.position ? "field-position-error" : undefined}
                />
                {formErrors.position && touched.position ? <span id="field-position-error" className="form-error">{formErrors.position}</span> : null}
              </label>
              <label className="form-field">
                <span>{t.cta.fields.email}</span>
                <input
                  id="field-email"
                  type="email"
                  name="email"
                  className={`form-input ${formErrors.email && touched.email ? "form-input-invalid" : ""}`}
                  placeholder={t.cta.fields.email}
                  value={formData.email}
                  onChange={(event) => handleChange("email", event.target.value)}
                  onBlur={() => handleBlur("email")}
                  aria-invalid={Boolean(formErrors.email && touched.email)}
                  aria-describedby={formErrors.email && touched.email ? "field-email-error" : undefined}
                />
                {formErrors.email && touched.email ? <span id="field-email-error" className="form-error">{formErrors.email}</span> : null}
              </label>
              <label className="form-field sm:col-span-2">
                <span>{t.cta.fields.phone}</span>
                <input
                  id="field-phone"
                  type="tel"
                  name="phone"
                  className={`form-input ${formErrors.phone && touched.phone ? "form-input-invalid" : ""}`}
                  placeholder={t.cta.fields.phone}
                  value={formData.phone}
                  onChange={(event) => handleChange("phone", event.target.value)}
                  onBlur={() => handleBlur("phone")}
                  aria-invalid={Boolean(formErrors.phone && touched.phone)}
                  aria-describedby={formErrors.phone && touched.phone ? "field-phone-error" : undefined}
                />
                {formErrors.phone && touched.phone ? <span id="field-phone-error" className="form-error">{formErrors.phone}</span> : null}
              </label>
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                className="honeypot"
                value={honeypot}
                onChange={(event) => setHoneypot(event.target.value)}
                aria-hidden="true"
              />
              <button type="submit" className="btn-primary sm:col-span-2" disabled={!isFormValid || submitting}>
                {submitting ? t.cta.submitSending : t.cta.submit}
              </button>
              {submitError ? <p className="form-error sm:col-span-2">{submitError}</p> : null}
              {submitSuccess ? <p className="form-success sm:col-span-2">{t.cta.success}</p> : null}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
