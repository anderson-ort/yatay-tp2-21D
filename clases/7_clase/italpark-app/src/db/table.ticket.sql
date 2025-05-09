CREATE TABLE tickets (
	id TEXT PRIMARY KEY,
	user_code TEXT NOT NULL,
	tipo_entrada TEXT DEFAULT 'classic',
	exp_date TIMESTAMP NOT NULL
);
