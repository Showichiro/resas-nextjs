export const Resource = {
  PREFECTURES: { key: 'prefectures', route: 'prefectures' },
  POPULATIONS: { key: 'populations', route: 'populations' },
} as const;

export type Resource = typeof Resource[keyof typeof Resource];
