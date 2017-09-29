export function FormatString(format: string, ...args: any[]): string {
    var argss = Array.prototype.slice.call(arguments, 1);
    for(let i = 0; i < argss.length; i++){
        format = format.replace(/\{(\d+)\}/, (match, number) => {
            return typeof argss[i] != undefined
                ? argss[i]
                : match;
        });
    }
    return format;
}