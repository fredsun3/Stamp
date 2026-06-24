// 邮票与年代数据类型定义

export type Rarity = "common" | "rare" | "legendary";

export interface Stamp {
  id: string;
  name: string;
  decade: string;
  year: number;
  issueDate: string;
  denomination: string;
  format: string;
  perforation: string;
  designer: string;
  printer: string;
  theme: string;
  description: string;
  background: string;
  significance: string;
  color: string;
  accentColor: string;
  rarity: Rarity;
  featured?: boolean;
}

export interface Decade {
  id: string;
  label: string;
  range: string;
  title: string;
  subtitle: string;
  background: string;
  styleNote: string;
  accentColor: string;
  stampCount: number;
}

export interface Theme {
  id: string;
  name: string;
  description: string;
}
