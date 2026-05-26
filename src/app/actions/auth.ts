"use server";

import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export async function register(formData: FormData) {
  const nome = formData.get("nome") as string;
  const email = formData.get("email") as string;
  const senha = formData.get("senha") as string;
  const confirmarSenha = formData.get("confirmarSenha") as string;

  if (senha !== confirmarSenha) {
    throw new Error("As senhas não coincidem");
  }

  const hash = await bcrypt.hash(senha, 10);

  await db.execute("INSERT INTO User (nome, email, senha) VALUES (?, ?, ?)", [
    nome,
    email,
    hash,
  ]);

  redirect("/login");
}

export async function login(formData: FormData) {
  const email = formData.get("email") as string;
  const senha = formData.get("senha") as string;

  const [rows]: any = await db.execute("SELECT * FROM User WHERE email = ?", [
    email,
  ]);

  if (rows.length === 0) throw new Error("Usuário não encontrado");

  const senhaCorreta = await bcrypt.compare(senha, rows[0].senha);
  if (!senhaCorreta) throw new Error("Senha incorreta");

  return { success: true };
}
