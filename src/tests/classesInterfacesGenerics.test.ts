import { SimpleEncryptor } from '../core/ClassesInterfacesGenerics';
import { Encrypt } from '../core/ClassesInterfacesGenerics';
import { Cache } from '../core/ClassesInterfacesGenerics';

describe('Test', () => {
	test('Check if encryption works', () => {
		const encryptor = new SimpleEncryptor();
		expect(encryptor.encrypt('Hola')).toBe('aloH');
	});

	test('Check if interface works', () => {
		const encrypt = new Encrypt('password');
		expect(encrypt.stringToEncrypt).toBe('password');
	});

	test('Check if added item can be accessed', () => {
		const cache = new Cache<string>();
		cache.AddItem('1', 'Hola');
		const getitem = cache.GetItem('1');
		expect(getitem).toBe('Hola');
	});
});
