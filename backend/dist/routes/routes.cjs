"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/routes/routes.ts
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default
});
module.exports = __toCommonJS(routes_exports);
var import_express = require("express");

// src/controllers/profissional_controller.ts
var profissionais = /* @__PURE__ */ new Map();
var cadastrarProfissional = (req, res) => {
  const { nome, nascimento, telefone, email, profissao, numero_registro, senha } = req.body;
  if (!nome || !nascimento || !telefone || !email || !profissao || !numero_registro || !senha) {
    res.status(400).json({ error: "Todos os campos s\xE3o obrigat\xF3rios." });
  }
  if (profissionais.has(email)) {
    res.status(400).json({ error: "Email j\xE1 cadastrado." });
  }
  const novoProfissional = {
    nome,
    nascimento,
    telefone,
    email,
    profissao,
    numero_registro,
    senha
    // TODO: Criptografar senha
  };
  profissionais.set(email, novoProfissional);
  res.status(201).json({ message: "Profissional cadastrado com sucesso!", profissional: novoProfissional });
};
var loginProfissional = (req, res) => {
  const { email, senha } = req.body;
  if (!email || !senha) {
    res.status(400).json({ error: "Email e senha s\xE3o obrigat\xF3rios." });
  }
  const profissional = profissionais.get(email);
  if (!profissional) {
    res.status(404).json({ error: "Profissional n\xE3o encontrado." });
  }
  if (profissional.senha !== senha) {
    res.status(401).json({ error: "Senha incorreta." });
  }
  res.status(200).json({ message: "Login realizado com sucesso!", profissional });
};

// src/controllers/paciente_controller.ts
var pacientes = /* @__PURE__ */ new Map();
var atividades = /* @__PURE__ */ new Map();
var cadastrarPaciente = (req, res) => {
  var _a, _b, _c;
  const {
    profissional_id,
    nome,
    data_nascimento,
    contato_emergencia,
    convenio_medico,
    numero_convenio,
    hospital_conveniado,
    genero,
    alergia,
    observacao
  } = req.body;
  if (!profissional_id || !nome || !data_nascimento || !contato_emergencia || !convenio_medico || !numero_convenio || !hospital_conveniado || !genero) {
    res.status(400).json({ error: "Todos os campos obrigat\xF3rios devem ser preenchidos." });
    return;
  }
  const generosValidos = ["feminino", "masculino", "outro"];
  if (!generosValidos.includes(genero)) {
    res.status(400).json({ error: "G\xEAnero inv\xE1lido. Valores permitidos: feminino, masculino, outro." });
    return;
  }
  const novoPaciente = {
    id: ((_b = (_a = pacientes.get(profissional_id)) == null ? void 0 : _a.length) != null ? _b : 0) + 1,
    // Gera um ID simples
    nome,
    data_nascimento,
    contato_emergencia,
    convenio_medico,
    numero_convenio,
    hospital_conveniado,
    genero,
    alergia,
    observacao
  };
  if (!pacientes.has(profissional_id)) {
    pacientes.set(profissional_id, []);
  }
  (_c = pacientes.get(profissional_id)) == null ? void 0 : _c.push(novoPaciente);
  res.status(201).json({ message: "Paciente cadastrado com sucesso!", paciente: novoPaciente });
};
var listarPacientesPorProfissional = (req, res) => {
  const { profissional_id } = req.params;
  if (!profissional_id) {
    res.status(400).json({ error: "O profissional_id \xE9 obrigat\xF3rio." });
    return;
  }
  const id = parseInt(profissional_id, 10);
  if (isNaN(id)) {
    res.status(400).json({ error: "O profissional_id deve ser um n\xFAmero v\xE1lido." });
    return;
  }
  const pacientesDoProfissional = pacientes.get(id);
  if (!pacientesDoProfissional || pacientesDoProfissional.length === 0) {
    res.status(404).json({ error: "Nenhum paciente encontrado para este profissional." });
    return;
  }
  res.status(200).json({ pacientes: pacientesDoProfissional });
};
var cadastrarAtividade = (req, res) => {
  var _a, _b, _c;
  const { paciente_id, nome, horario, concluido } = req.body;
  if (!paciente_id || !horario || !nome || typeof concluido !== "boolean") {
    res.status(400).json({ error: "Todos os campos obrigat\xF3rios devem ser preenchidos." });
    return;
  }
  const pacienteExiste = Array.from(pacientes.values()).some(
    (listaPacientes) => listaPacientes.some((paciente) => paciente.id === paciente_id)
  );
  if (!pacienteExiste) {
    res.status(404).json({ error: "Paciente n\xE3o encontrado." });
    return;
  }
  const novaAtividade = {
    id: (_b = (_a = atividades.get(paciente_id)) == null ? void 0 : _a.length) != null ? _b : 0 + 1,
    // Gera um ID simples
    nome,
    horario,
    concluido,
    paciente_id
  };
  if (!atividades.has(paciente_id)) {
    atividades.set(paciente_id, []);
  }
  (_c = atividades.get(paciente_id)) == null ? void 0 : _c.push(novaAtividade);
  res.status(201).json({ message: "Atividade cadastrada com sucesso!", atividade: novaAtividade });
};
var listarAtividadesNaoConcluidas = (req, res) => {
  const { profissional_id } = req.params;
  if (!profissional_id) {
    res.status(400).json({ error: "O profissional_id \xE9 obrigat\xF3rio." });
    return;
  }
  const id = parseInt(profissional_id, 10);
  if (isNaN(id)) {
    res.status(400).json({ error: "O profissional_id deve ser um n\xFAmero v\xE1lido." });
    return;
  }
  const pacientesDoProfissional = pacientes.get(id);
  if (!pacientesDoProfissional || pacientesDoProfissional.length === 0) {
    res.status(404).json({ error: "Nenhum paciente encontrado para este profissional." });
    return;
  }
  const atividadesNaoConcluidas = pacientesDoProfissional.flatMap((paciente) => {
    const atividadesDoPaciente = atividades.get(paciente.id) || [];
    return atividadesDoPaciente.filter((atividade) => !atividade.concluido).map((atividade) => ({
      atividade_id: atividade.id,
      nome_paciente: paciente.nome,
      nome_atividade: atividade.nome,
      horario: atividade.horario
    }));
  });
  if (atividadesNaoConcluidas.length === 0) {
    res.status(404).json({ error: "Nenhuma atividade n\xE3o conclu\xEDda encontrada para este profissional." });
    return;
  }
  res.status(200).json({ atividades: atividadesNaoConcluidas });
};

// src/routes/routes.ts
var router = (0, import_express.Router)();
router.post("/profissional", cadastrarProfissional);
router.post("/login", loginProfissional);
router.post("/paciente", cadastrarPaciente);
router.get("/profissional/:profissional_id/pacientes", listarPacientesPorProfissional);
router.post("/atividade", cadastrarAtividade);
router.get("/profissional/:profissional_id/atividades-nao-concluidas", listarAtividadesNaoConcluidas);
var routes_default = router;
