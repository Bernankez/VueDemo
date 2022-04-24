export function createBEM(name: string) {
  return (element?: string, modifier?: string) => {
    let className = name;
    if (element) {
      className = `${className}__${element}`;
    }
    if (modifier) {
      className = `${className}--${modifier}`;
    }
    return className;
  };
}

export function createNamespace(name: string) {
  const prefixedName = `demo-${name}`;
  return [prefixedName, createBEM(prefixedName)] as const;
}
