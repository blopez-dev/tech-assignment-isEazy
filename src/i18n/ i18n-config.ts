import enUsMessages from '../lang/en-US.json';
import esEsMessages from '../lang/es-ES.json';

export const defaultLocale = 'en-US';

type Message = {
    dir: string;
    name: string;
    messages: never;
};

export const locales: Record<string, Message> = {
    'en-US': { name: 'English', messages: enUsMessages, dir: 'ltr' } as never,
    'es-ES': { name: 'Español', messages: esEsMessages, dir: 'ltr' } as never,
};
