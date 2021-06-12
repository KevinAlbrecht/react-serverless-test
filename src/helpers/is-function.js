export default function isFunction(value) {
  const type = typeof value;
  const isObj = value != null && (type === 'object' || type === 'function');
  if (!isObj) return false;

  const tag = Object.prototype.toString.call(value);
  return (
    tag === '[object Function]' ||
    tag === '[object GeneratorFunction]' ||
    tag === '[object AsyncFunction]' ||
    tag === '[object Proxy]'
  );
}
