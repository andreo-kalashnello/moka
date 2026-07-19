import type { LucideIcon } from "lucide-react";
import { Bell, Coffee, ShieldCheck, UtensilsCrossed, UsersRound } from "lucide-react";

export type MenuCategory = "Сніданки" | "Випічка" | "Основне" | "Десерти" | "Кава та напої";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  alt: string;
  category: MenuCategory;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: LucideIcon;
}

export interface ReviewItem {
  id: string;
  name: string;
  text: string;
  avatar: string;
}

export interface StatItem {
  value: string;
  label: string;
  icon: LucideIcon;
}

export const menuCategories: readonly MenuCategory[] = [
  "Сніданки",
  "Випічка",
  "Основне",
  "Десерти",
  "Кава та напої",
];

export const menuItems: readonly MenuItem[] = [
  {
    id: "avocado-toast",
    name: "Авокадо тост з яйцем пашот",
    description: "З пшеничним хлібом, авокадо, руколою та насінням",
    price: "210 ₴",
    image: "/images/menu/avocado-toast.jpg",
    alt: "Авокадо тост з яйцем пашот",
    category: "Сніданки",
  },
  {
    id: "croissant",
    name: "Круасан класичний",
    description: "Хрумкий зовні, ніжний всередині. Подаємо з маслом та джемом",
    price: "95 ₴",
    image: "/images/menu/croissant.jpg",
    alt: "Класичний круасан на керамічній тарілці",
    category: "Випічка",
  },
  {
    id: "oatmeal",
    name: "Вівсяна каша з ягодами",
    description: "На кокосовому молоці з сезонними ягодами та медом",
    price: "180 ₴",
    image: "/images/menu/oatmeal.jpg",
    alt: "Вівсяна каша зі свіжими ягодами",
    category: "Сніданки",
  },
  {
    id: "cheesecake",
    name: "Чізкейк Сан-Себастьян",
    description: "Ніжний баскський чізкейк з ягідним соусом",
    price: "165 ₴",
    image: "/images/menu/cheesecake.jpg",
    alt: "Чізкейк Сан-Себастьян з ягідним соусом",
    category: "Десерти",
  },
  {
    id: "cappuccino",
    name: "Капучино",
    description: "На еспресо та молоці вищого ґатунку",
    price: "85 ₴",
    image: "/images/menu/cappuccino.jpg",
    alt: "Капучино з лате-артом",
    category: "Кава та напої",
  },
  {
    id: "moka-breakfast",
    name: "Сніданок MOKA",
    description: "Яйця, свіжі овочі, авокадо та хрусткий тост",
    price: "235 ₴",
    image: "/images/services/breakfast.jpg",
    alt: "Повний сніданок зі свіжими овочами та яйцями",
    category: "Сніданки",
  },
  {
    id: "almond-croissant",
    name: "Круасан мигдальний",
    description: "Класичний круасан із ніжним мигдальним кремом",
    price: "125 ₴",
    image: "/images/menu/croissant.jpg",
    alt: "Круасан на світлій керамічній тарілці",
    category: "Випічка",
  },
  {
    id: "moka-toast",
    name: "Тост MOKA з авокадо",
    description: "Авокадо, яйце пашот, зелень та насіння на теплому хлібі",
    price: "225 ₴",
    image: "/images/menu/avocado-toast.jpg",
    alt: "Тост з авокадо, зеленню та яйцем пашот",
    category: "Основне",
  },
  {
    id: "berry-cheesecake",
    name: "Ягідний чізкейк",
    description: "Кремовий баскський чізкейк із сезонними ягодами",
    price: "175 ₴",
    image: "/images/menu/cheesecake.jpg",
    alt: "Порція баскського чізкейка з ягідним соусом",
    category: "Десерти",
  },
  {
    id: "strawberry-latte",
    name: "Полуничний лате",
    description: "Еспресо, молоко, полуничний крем та легка вершкова пінка",
    price: "145 ₴",
    image: "/images/menu/strawberry-latte.jpg",
    alt: "Шаруватий полуничний лате у склянці",
    category: "Кава та напої",
  },
];

export const services: readonly ServiceItem[] = [
  {
    id: "all-day-breakfast",
    title: "Сніданки цілий день",
    description: "Улюблені сніданки доступні протягом усього дня.",
    image: "/images/services/breakfast.jpg",
    alt: "Тарілка зі сніданком та яйцями",
    icon: UtensilsCrossed,
  },
  {
    id: "catering",
    title: "Кейтеринг",
    description: "Смачні рішення для ваших подій будь-якого масштабу.",
    image: "/images/services/catering.jpg",
    alt: "Сервірований стіл для кейтерингу",
    icon: Bell,
  },
  {
    id: "private-events",
    title: "Приватні події",
    description: "Затишний простір для свят, зустрічей та закритих заходів.",
    image: "/images/services/interior.jpg",
    alt: "Інтер’єр кафе для приватної події",
    icon: UsersRound,
  },
  {
    id: "takeaway",
    title: "Кава та випічка з собою",
    description: "Свіжа кава та випічка, щоб ваш день був ідеальним.",
    image: "/images/services/takeaway.jpg",
    alt: "Кава з собою та свіжий круасан",
    icon: Coffee,
  },
];

export const stats: readonly StatItem[] = [
  { value: "5+", label: "років створюємо\nсмачні моменти", icon: Coffee },
  { value: "12 000+", label: "щасливих гостей\nщомісяця", icon: UsersRound },
  { value: "100%", label: "натуральні інгредієнти\nпреміум якості", icon: ShieldCheck },
];

export const reviews: readonly ReviewItem[] = [
  {
    id: "anna",
    name: "Анна К.",
    text: "Найкращий капучино в місті та неймовірні сніданки! Атмосфера, в яку хочеться повертатися знову і знову.",
    avatar: "/images/reviews/anna.png",
  },
  {
    id: "oleksii",
    name: "Олексій І.",
    text: "Ідеальне місце для зустрічей і роботи. Все продумано до дрібниць, від сервісу до смаку кожної страви.",
    avatar: "/images/reviews/oleksii.png",
  },
  {
    id: "mariia",
    name: "Марія П.",
    text: "Проводили тут день народження — усе було чудово! Смачно, красиво і дуже затишно.",
    avatar: "/images/reviews/mariia.png",
  },
];
