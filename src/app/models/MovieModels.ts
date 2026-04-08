

export interface MovieType {
    id: string;
    title: {
        original: string;
        transliteration?: string;
        translation?: string;
    };
    year: string;
    runtime: number;
    genre: string[];
    tags: string[];
    group: {
        people?: string;
        language?: string;
        country?: string;
        location?: string;
    };
    info: string;
    watch: string[];
    trailer: string;
    color: string;
    location: {
        x: number;
        y: number;
        name: string;
    };
};