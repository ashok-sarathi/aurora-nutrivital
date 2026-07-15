export const basePath = process.env.NODE_ENV === 'production' ? '/aurora-nutrivital' : '';

export function publicPath(path: `/${string}`) {
  return `${basePath}${path}`;
}
