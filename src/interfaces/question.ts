export interface IQuestion {
    type: string,
    name: string,
    message: string,
    choices?: string[],
    validate?: (dirName: string) => boolean | string;
}