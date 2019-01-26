/*
var keystone = require('keystone');
var Types = keystone.Field.Types;

/!**
 * Algorithmes Model
 * =============
 *!/

var Algorithmes = new keystone.List('Algorithmes');


Algorithmes.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, unique: true, index: true },
	password: { type: Types.Password, initial: true, required: true },
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
});
*/
