
type SvgComponent = React.FC<React.SVGAttributes<SVGElement>>;

declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}