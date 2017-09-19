export function FormatString(format: string, ...args: any[]) {
    var argss = Array.prototype.slice.call(arguments, 1);
    return format.replace('{(\d+)}', (match, number) => {
        return typeof argss[number] != 'undefined'
            ? argss[number]
            : match;
    });
}