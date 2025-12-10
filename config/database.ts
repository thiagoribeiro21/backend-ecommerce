import path from "path";

export default ({ env }) => {
  const client = env("DATABASE_CLIENT", "sqlite");

  // Se a variável for 'postgres' (Lá no Render), usa essa config:
  if (client === "postgres") {
    return {
      connection: {
        client: "postgres",
        connection: {
          connectionString: env("DATABASE_URL"),
          ssl: { rejectUnauthorized: false }, // Obrigatório para o Render não bloquear
        },
        pool: { min: 2, max: 10 },
      },
    };
  }

  // Se não for postgres (No seu PC), usa o SQLite padrão:
  return {
    connection: {
      client: "sqlite",
      connection: {
        filename: path.join(
          __dirname,
          "..",
          "..",
          env("DATABASE_FILENAME", ".tmp/data.db")
        ),
      },
      useNullAsDefault: true,
    },
  };
};
