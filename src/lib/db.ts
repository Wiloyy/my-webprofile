import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Ma121314?",
  database: "my-profile",
});

db.getConnection()
  .then(() => console.log("✅ MySQL conectado com sucesso!"))
  .catch((err) => console.error("❌ Erro ao conectar:", err.message));
