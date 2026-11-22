// GitHub Pages のサブパス配信（base）に対応した内部リンクを作る。
// 例: url('/blog') → '/mugibatake/blog'
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path: string) => `${base}${path}`;
