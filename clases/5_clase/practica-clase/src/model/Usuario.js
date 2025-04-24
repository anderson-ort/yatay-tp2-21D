export class Usuario {
	constructor(id, nombre, email, cuentasBancarias = []) {
		this.id = id;
		this.nombre = nombre;
		this.email = email;
		this.cuentasBancarias = cuentasBancarias;
	}
}
