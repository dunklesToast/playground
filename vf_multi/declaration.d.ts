declare global {
    interface String {
        includesOneOf(input: string[]): boolean;
    }
}

export {};
