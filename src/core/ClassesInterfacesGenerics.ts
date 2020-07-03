// Interfaces
interface ClassesInterfacesGenericsParams {
	stringToEncrypt: string;
	Encryption(): string;
}
export class Encrypt implements ClassesInterfacesGenericsParams {
	stringToEncrypt: string;

	constructor(password: string) {
		this.stringToEncrypt = this.Encryption(password);
	}
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	Encryption(password: string): string {
		return password;
	}
}

// Clases abstractas
abstract class Encryptor {
	public encrypt(texto: string): string {
		texto = texto.split('').reverse().join('');
		let resultado = '';
		texto.split('').map((aChar) => {
			resultado += this._encrypt(aChar);
		});
		return resultado;
	}
	protected abstract _encrypt(aChar: string);
}
export class SimpleEncryptor extends Encryptor {
	_encrypt(texto: string): string {
		return texto.split('').reverse().join('');
	}
}

// Tipos genéricos
interface CacheProps<T> {
	AddItem(key: string, value: T): void;
	GetItem(key: string): T;
	keys(): string[];
	values(): T[];
}

export class Cache<T> implements CacheProps<T> {
	cache: { [key: string]: T } = {};

	AddItem(key: string, value: T): void {
		this.cache[key] = value;
	}

	GetItem(key: string): T {
		return this.cache[key];
	}

	keys(): string[] {
		//return this.cache
		return [];
	}

	values(): T[] {
		//return this._values;
		return [];
	}
}
