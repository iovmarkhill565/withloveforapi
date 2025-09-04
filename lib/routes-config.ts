// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
  tag?: string | string[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "🚀 APEX Rent",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "👋 Введение", href: "/introduction" },
      { title: "🔑 Аутентификация", href: "/authentication", },
      {
        title: "💡 Общая информация",
        href: "/help-center",
        noLink: true,
        items: [
          { title: '📲 Список SMS-майлеров', href: "/senders-list" },
          { title: '✉️ Список майлеров', href: "/mailers-list" },
          { title: '📦 Список сервисов', href: "/service-list" },
          { title: '💾 Список генераторов', href: "/generator-list" },
        ],
      },
      { title: '', href: "/line-2", noLink: true },
      {
        title: "❤️ Основной",
        href: "/main-api",
        noLink: true,
        items: [
          { title: '📲 Отправка SMS', href: '/send-sms', tag: 'NEW' },
          { title: '📨 Отправка письма', href: '/send-mailer' },
          { title: '🌐 Сокращение ссылок', href: "/short-link" },
          { title: '📧 Запрос доступных майлеров', href: "/get-mailers" },
        ],
      },
      { title: '', href: "/line-4", noLink: true },
      // {
      //   title: 'test',
      //   noLink: true,
      //   href: "/components",
      //   items: [
      //     { title: "Stepper", href: "/stepper" },
      //     { title: "Tabs", href: "/tabs" },
      //     { title: "Note", href: "/note" },
      //     { title: "Code Block", href: "/code-block" },
      //     { title: "Image & Link", href: "/image-link" },
      //     { title: "File System", href: "/file-system", tag: "New" },
      //     { title: "Custom", href: "/custom" },
      //   ]
      // },
      {
        title: "🔄 Обновления данных",
        href: "/updater",
        noLink: true,
        items: [
          { title: '🥢 PayPal', href: "/paypal" },
        ],
      },
      {
        title: "🤖 Генерация данных",
        href: "/generator",
        noLink: true,
        items: [
          { title: '🔗 Объявление', href: "/order" },
          { title: '🔗 Объявление', tag: 'с парсером', href: "/parsing-order" },
          { title: '', href: "/line-3", noLink: true },
          { title: '📑 PDF файл', href: "/generate-pdf" },
          { title: '🖼️ Запрос данных', tag: '0.00%', href: "/request-data" },
          { title: '🔲 Создать чек', tag: '0.00%', href: "/request-check" },
          { title: '', href: "/line-7", noLink: true },
          { 
            title: "📦 Массовое создание",
            href: "/bulk",
            noLink: true,
            items: [
              { title: '🔗 Объявление', href: "/order" },
              { title: '🔗 Объявление', tag: 'с парсером', href: "/parsing-order" },
            ],
          }
        ],
      },
      // { title: "Algolia Search", href: "/algolia-search", tag: "New" },
      // { title: "Themes", href: "/themes" },
      // {
      //   title: "Customize",
      //   href: "/customize",
      // }
    ],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
