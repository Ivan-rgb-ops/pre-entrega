const [method, resource, ...params] = process.argv.slice(2);

console.log("method:", method);
console.log("resource:", resource);
console.log("params:", params);