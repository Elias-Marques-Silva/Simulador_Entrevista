export type JobArea = 'software-development' | 'technical-support' | 'administration' | 'customer-service';
export type JobLevel = 'intern' | 'junior' | 'mid';

export interface Question {
  id: string;
  text: string;
  followUps: string[];
  evaluationCriteria: string[];
}

export interface JobConfig {
  id: JobArea;
  title: string;
  description: string;
  icon: string;
}

export interface LevelConfig {
  id: JobLevel;
  title: string;
  description: string;
}

export const jobAreas: JobConfig[] = [
  {
    id: 'software-development',
    title: 'Desenvolvimento de Software',
    description: 'Desenvolvimento de sistemas, aplicacoes e solucoes tecnologicas',
    icon: 'code',
  },
  {
    id: 'technical-support',
    title: 'Suporte Tecnico',
    description: 'Resolucao de problemas tecnicos e atendimento a usuarios',
    icon: 'headphones',
  },
  {
    id: 'administration',
    title: 'Administracao',
    description: 'Gestao, organizacao e processos administrativos',
    icon: 'briefcase',
  },
  {
    id: 'customer-service',
    title: 'Atendimento ao Cliente',
    description: 'Relacionamento com clientes e excelencia no servico',
    icon: 'users',
  },
];

export const jobLevels: LevelConfig[] = [
  {
    id: 'intern',
    title: 'Estagio',
    description: 'Vaga para estudantes em formacao',
  },
  {
    id: 'junior',
    title: 'Junior',
    description: 'Vaga para profissionais com ate 2 anos de experiencia',
  },
  {
    id: 'mid',
    title: 'Pleno',
    description: 'Vaga para profissionais com 3 a 5 anos de experiencia',
  },
];

// SOFTWARE DEVELOPMENT QUESTIONS
const softwareDevQuestions: Record<JobLevel, Question[]> = {
  intern: [
    {
      id: 'sd-int-1',
      text: 'Ola! Sou a Ana, recrutadora da empresa. Seja bem-vindo! Me conte um pouco sobre voce: qual seu curso, periodo e por que decidiu seguir a area de tecnologia?',
      followUps: ['Interessante! E quais linguagens de programacao voce ja estudou?', 'Ja pensou em alguma area especifica dentro de desenvolvimento?'],
      evaluationCriteria: ['clareza', 'motivacao', 'conhecimento'],
    },
    {
      id: 'sd-int-2',
      text: 'Imagine que voce precisa criar um programa simples para calcular a media de notas de 5 alunos. Como voce abordaria esse problema?',
      followUps: ['E se precisasse validar se a nota esta entre 0 e 10?', 'Como testaria se o programa funciona?'],
      evaluationCriteria: ['logica', 'pensamento estruturado'],
    },
    {
      id: 'sd-int-3',
      text: 'Voce ja ouviu falar sobre Git ou controle de versao? Sabe para que serve?',
      followUps: ['Ja usou GitHub ou plataforma similar?', 'Sabe a diferenca entre commit e push?'],
      evaluationCriteria: ['conhecimento tecnico', 'ferramentas'],
    },
    {
      id: 'sd-int-4',
      text: 'Como voce estuda e mantem-se atualizado sobre tecnologia?',
      followUps: ['Ultima coisa nova que aprendeu?', 'Prefere estudar so ou em grupo?'],
      evaluationCriteria: ['proatividade', 'autodidata'],
    },
    {
      id: 'sd-int-5',
      text: 'Voce ja trabalhou em equipe em algum projeto? Se sim, como foi? Se nao, como imagina que seria?',
      followUps: ['Como lidaria com um colega que nao esta contribuindo?', 'E se tivesse conflito de opinioes tecnicas?'],
      evaluationCriteria: ['trabalho em equipe', 'comunicacao'],
    },
    {
      id: 'sd-int-6',
      text: 'Qual foi o projeto mais desafiador que voce desenvolveu na faculdade ou por conta propria?',
      followUps: ['Quais dificuldades enfrentou?', 'O que faria diferente hoje?'],
      evaluationCriteria: ['experiencia pratica', 'resolucao de problemas'],
    },
    {
      id: 'sd-int-7',
      text: 'Voce conhece alguma metodologia de desenvolvimento de software? Como Scrum ou Agile?',
      followUps: ['Ja participou de Daily Meetings?', 'Sabe o que e um Sprint?'],
      evaluationCriteria: ['metodologias', 'conhecimento basico'],
    },
    {
      id: 'sd-int-8',
      text: 'Me fale sobre um erro ou bug que voce encontrou em um codigo e como resolveu.',
      followUps: ['Quanto tempo levou para resolver?', 'Pediu ajuda de alguem?'],
      evaluationCriteria: ['resolucao de problemas', 'proatividade'],
    },
    {
      id: 'sd-int-9',
      text: 'Voce tem experiencia com banco de dados? Quais ja utilizou?',
      followUps: ['Sabe criar tabelas e fazer consultas?', 'Conhece a diferenca entre SQL e NoSQL?'],
      evaluationCriteria: ['conhecimento tecnico', 'banco de dados'],
    },
    {
      id: 'sd-int-10',
      text: 'Como voce lida com prazos apertados e pressao?',
      followUps: ['Ja trabalhou sob pressao?', 'Como organiza suas tarefas?'],
      evaluationCriteria: ['gestao de tempo', 'resiliencia'],
    },
    {
      id: 'sd-int-11',
      text: 'Voce ja participou de algum hackathon ou competencia de programacao?',
      followUps: ['Qual foi o resultado?', 'O que aprendeu nessa experiencia?'],
      evaluationCriteria: ['interesse', 'competitividade'],
    },
    {
      id: 'sd-int-12',
      text: 'Qual area de desenvolvimento mais te atrai: frontend, backend, mobile ou dados?',
      followUps: ['Por que essa area especifica?', 'O que ja estudou sobre isso?'],
      evaluationCriteria: ['autoconhecimento', 'interesse genuino'],
    },
    {
      id: 'sd-int-13',
      text: 'Voce costuma usar inteligencia artificial para ajudar em codigos? Como?',
      followUps: ['Ja usou ChatGPT ou Copilot?', 'Como valida se o codigo gerado esta correto?'],
      evaluationCriteria: ['adaptacao', 'ferramentas modernas'],
    },
    {
      id: 'sd-int-14',
      text: 'Me fale de um tecnico ou professor que voce admira e por que.',
      followUps: ['O que aprendeu com essa pessoa?', 'Tenta seguir algum conselho dela?'],
      evaluationCriteria: ['referencias', 'aprendizado'],
    },
    {
      id: 'sd-int-15',
      text: 'Se voce tivesse que aprender uma nova tecnologia em uma semana para um projeto, como faria?',
      followUps: ['Quais recursos utilizaria?', 'Ja passou por situacao assim?'],
      evaluationCriteria: ['autodidata', 'planejamento'],
    },
    {
      id: 'sd-int-16',
      text: 'Voce sabe o que sao APIs? Consegue explicar com suas palavras?',
      followUps: ['Ja consumiu alguma API?', 'Sabe o que e JSON?'],
      evaluationCriteria: ['conhecimento tecnico', 'comunicacao'],
    },
    {
      id: 'sd-int-17',
      text: 'Qual e seu processo para debugar um codigo que nao funciona?',
      followUps: ['Usa alguma ferramenta especifica?', 'Como organiza os testes?'],
      evaluationCriteria: ['metodologia', 'resolucao de problemas'],
    },
    {
      id: 'sd-int-18',
      text: 'Voce contribuiu para algum projeto open source?',
      followUps: ['Se sim, como foi a experiencia?', 'Se nao, tem interesse?'],
      evaluationCriteria: ['colaboracao', 'iniciativa'],
    },
  ],
  junior: [
    {
      id: 'sd-jr-1',
      text: 'Me conte sobre sua experiencia previa em desenvolvimento e as principais tecnologias que ja trabalhou.',
      followUps: ['Qual tecnologia voce se sente mais confortavel?', 'Qual foi seu maior desafio tecnico?'],
      evaluationCriteria: ['experiencia', 'conhecimento tecnico'],
    },
    {
      id: 'sd-jr-2',
      text: 'Voce ja trabalhou com metodologias ageis como Scrum ou Kanban? Como era o dia a dia do time?',
      followUps: ['Como lidava com prazos apertados?', 'Ja participou de code reviews?'],
      evaluationCriteria: ['metodologias ageis', 'trabalho em equipe'],
    },
    {
      id: 'sd-jr-3',
      text: 'Imagine que recebeu uma tarefa para corrigir um bug em um codigo que nao conhece. Como procederia?',
      followUps: ['Como documentaria a solucao?', 'E se o bug afeta outras partes?'],
      evaluationCriteria: ['resolucao de problemas', 'debug'],
    },
    {
      id: 'sd-jr-4',
      text: 'Qual foi o projeto mais desafiador que participou? Contei sobre as dificuldades superadas.',
      followUps: ['O que faria diferente?', 'O que aprendeu?'],
      evaluationCriteria: ['superacao', 'aprendizado'],
    },
    {
      id: 'sd-jr-5',
      text: 'Onde voce se ve em 2 anos? Quais sao seus objetivos de carreira?',
      followUps: ['O que espera aprender nessa vaga?', 'Tecnologia que gostaria de dominar?'],
      evaluationCriteria: ['planejamento', 'ambicao'],
    },
    {
      id: 'sd-jr-6',
      text: 'Como voce aborda a escrita de testes? Utiliza TDD ou BDD?',
      followUps: ['Qual framework de testes ja usou?', 'Como decide o que testar?'],
      evaluationCriteria: ['qualidade', 'testes'],
    },
    {
      id: 'sd-jr-7',
      text: 'Me explique como voce versiona seu codigo e mantem branches organizados.',
      followUps: ['Ja trabalhou com Git Flow?', 'Como resolve conflitos de merge?'],
      evaluationCriteria: ['git', 'organizacao'],
    },
    {
      id: 'sd-jr-8',
      text: 'Voce ja trabalhou em um sistema legado? Como foi a experiencia?',
      followUps: ['Como lidou com a falta de documentacao?', 'Fez refatoracao?'],
      evaluationCriteria: ['adaptacao', 'resolucao de problemas'],
    },
    {
      id: 'sd-jr-9',
      text: 'Como voce aborda a otimizacao de performance em aplicacoes?',
      followUps: ['Ja identificou gargalos de performance?', 'Quais ferramentas usou?'],
      evaluationCriteria: ['performance', 'analise'],
    },
    {
      id: 'sd-jr-10',
      text: 'Voce tem experiencia com cloud? Quais provedores ja utilizou?',
      followUps: ['Ja fez deploy de aplicacao?', 'Sabe configurar CI/CD?'],
      evaluationCriteria: ['cloud', 'deploy'],
    },
    {
      id: 'sd-jr-11',
      text: 'Como voce documenta seu codigo? Quais praticas segue?',
      followUps: ['Ja usou Swagger ou similar?', 'Como documenta APIs?'],
      evaluationCriteria: ['documentacao', 'boas praticas'],
    },
    {
      id: 'sd-jr-12',
      text: 'Me fale sobre uma situacao em que voce precisou aprender uma tecnologia muito rapido.',
      followUps: ['Como organizou o estudo?', 'Qual foi o resultado?'],
      evaluationCriteria: ['aprendizado rapido', 'organizacao'],
    },
    {
      id: 'sd-jr-13',
      text: 'Como voce lida com requisitos mal definidos em um projeto?',
      followUps: ['Ja precisou replanejar um projeto?', 'Como communicou com stakeholders?'],
      evaluationCriteria: ['comunicacao', 'adaptacao'],
    },
    {
      id: 'sd-jr-14',
      text: 'Voce ja mentorou ou ajudou desenvolvedores mais juniores?',
      followUps: ['Como foi essa experiencia?', 'Qual abordagem usou?'],
      evaluationCriteria: ['mentorship', 'lideranca'],
    },
    {
      id: 'sd-jr-15',
      text: 'Qual foi o feedback mais dificil que voce recebeu? Como lidou?',
      followUps: ['O que mudou depois disso?', 'Como pede feedback?'],
      evaluationCriteria: ['resiliencia', 'crescimento'],
    },
    {
      id: 'sd-jr-16',
      text: 'Como voce garante a seguranca do codigo que escreve?',
      followUps: ['Ja encontrou vulnerabilidades?', 'Quais praticas de seguranca conhece?'],
      evaluationCriteria: ['seguranca', 'boas praticas'],
    },
    {
      id: 'sd-jr-17',
      text: 'Voce ja trabalhou com microservicos ou arquitetura monolitica? Qual preferencia?',
      followUps: ['Quais vantagens e desvantagens ve?', 'Teve experiencia pratica?'],
      evaluationCriteria: ['arquitetura', 'experiencia'],
    },
    {
      id: 'sd-jr-18',
      text: 'Me conte sobre um momento em que voce discordou de uma decisao tecnica da equipe.',
      followUps: ['Como expressou sua opiniao?', 'Qual foi o desfecho?'],
      evaluationCriteria: ['comunicacao', 'assertividade'],
    },
  ],
  mid: [
    {
      id: 'sd-mid-1',
      text: 'Me descreva sua trajetoria profissional e como voce evoluiu ate o nivel atual.',
      followUps: ['Qual foi o marco mais importante?', 'Como avalia sua evolucao tecnica?'],
      evaluationCriteria: ['trajetoria', 'evolucao'],
    },
    {
      id: 'sd-mid-2',
      text: 'Como desenvolvedor pleno, voce ja liderou ou orientou desenvolvedores juniores. Me conte sobre essa experiencia.',
      followUps: ['Como lida com um junior com dificuldades?', 'Qual abordagem para code reviews?'],
      evaluationCriteria: ['lideranca', 'mentorship'],
    },
    {
      id: 'sd-mid-3',
      text: 'Me fale sobre uma decisao de arquitetura que voce tomou. Quais criterios e trade-offs considerou?',
      followUps: ['Se pudesse voltar, mudaria algo?', 'Como documentou a decisao?'],
      evaluationCriteria: ['arquitetura', 'tomada de decisao'],
    },
    {
      id: 'sd-mid-4',
      text: 'Em relacao a qualidade de codigo, quais principios voce mais valoriza?',
      followUps: ['Como aborda divida tecnica?', 'Quais ferramentas de CI/CD usa?'],
      evaluationCriteria: ['qualidade', 'boas praticas'],
    },
    {
      id: 'sd-mid-5',
      text: 'Como voce se mantem atualizado e baliza o tempo entre aprender novas tecnologias vs aprofundar nas que domina?',
      followUps: ['Ultima tecnologia que estudou por conta propria?', 'Como avalia quando vale a pena adotar algo novo?'],
      evaluationCriteria: ['atualizacao', 'criterio'],
    },
    {
      id: 'sd-mid-6',
      text: 'Me conte sobre um projeto em que voce foi o responsavel tecnico principal.',
      followUps: ['Como organizou a equipe?', 'Quais desafios enfrentou?'],
      evaluationCriteria: ['lideranca tecnica', 'gestao'],
    },
    {
      id: 'sd-mid-7',
      text: 'Como voce aborda a relacao com outras areas como produto, design e QA?',
      followUps: ['Ja teve conflitos? Como resolveu?', 'Como garante alinhamento?'],
      evaluationCriteria: ['colaboracao', 'comunicacao'],
    },
    {
      id: 'sd-mid-8',
      text: 'Voce ja precisou refatorar um sistema legado grande? Como abordou?',
      followUps: ['Como planejou a refatoracao?', 'Como minimizou riscos?'],
      evaluationCriteria: ['refatoracao', 'planejamento'],
    },
    {
      id: 'sd-mid-9',
      text: 'Como voce aborda decisoes de build vs buy em uma empresa?',
      followUps: ['Ja recomendou comprar uma solucao?', 'Quais criterios considera?'],
      evaluationCriteria: ['visao estrategica', 'analise'],
    },
    {
      id: 'sd-mid-10',
      text: 'Me conte sobre um incidente critico em producao que voce lidou.',
      followUps: ['Como foi a comunicacao com stakeholders?', 'O que mudou depois?'],
      evaluationCriteria: ['gestao de crises', 'resolucao'],
    },
    {
      id: 'sd-mid-11',
      text: 'Como voce avalia a maturidade de uma equipe de desenvolvimento?',
      followUps: ['Quais indicadores observa?', 'Como contribui para a evolucao?'],
      evaluationCriteria: ['lideranca', 'maturidade'],
    },
    {
      id: 'sd-mid-12',
      text: 'Voce ja implementou uma cultura de SRE ou DevOps em um time? Como foi?',
      followUps: ['Quais praticas introduziu?', 'Como mediu o sucesso?'],
      evaluationCriteria: ['cultura', 'transformacao'],
    },
    {
      id: 'sd-mid-13',
      text: 'Como voce gerencia a divida tecnica em projetos em andamento?',
      followUps: ['Como prioriza entre features e divida?', 'Como comunica com produto?'],
      evaluationCriteria: ['gestao', 'priorizacao'],
    },
    {
      id: 'sd-mid-14',
      text: 'Me fale sobre um momento em que voce precisou defender uma tecnologia ou abordagem.',
      followUps: ['Como apresentou argumentos?', 'Qual foi o resultado?'],
      evaluationCriteria: ['persuasao', 'comunicacao'],
    },
    {
      id: 'sd-mid-15',
      text: 'Como voce aborda a escalabilidade de sistemas que desenvolve?',
      followUps: ['Ja projetou algo que precisou escalar?', 'Quais patterns usa?'],
      evaluationCriteria: ['escalabilidade', 'design'],
    },
    {
      id: 'sd-mid-16',
      text: 'Voce ja trabalhou com equipes distribuidas ou remotas? Quais desafios identificou?',
      followUps: ['Como garante comunicacao?', 'Quais ferramentas usa?'],
      evaluationCriteria: ['trabalho remoto', 'comunicacao'],
    },
    {
      id: 'sd-mid-17',
      text: 'Como voce contribui para contratacao e desenvolvimento de novos membros da equipe?',
      followUps: ['Como avalia candidatos?', 'Como integra novos membros?'],
      evaluationCriteria: ['contratacao', 'onboarding'],
    },
    {
      id: 'sd-mid-18',
      text: 'Me conte sobre uma vez em que voce teve que dizer nao para um requisito ou prazo.',
      followUps: ['Como comunicou?', 'Qual foi o resultado?'],
      evaluationCriteria: ['assertividade', 'comunicacao'],
    },
  ],
};

// TECHNICAL SUPPORT QUESTIONS
const technicalSupportQuestions: Record<JobLevel, Question[]> = {
  intern: [
    {
      id: 'ts-int-1',
      text: 'Ola! Seja bem-vindo! Me conte um pouco sobre voce: qual seu curso, periodo e por que tem interesse em suporte tecnico?',
      followUps: ['Ja prestou suporte para alguem?', 'Qual area de tecnologia mais te interessa?'],
      evaluationCriteria: ['motivacao', 'interesse'],
    },
    {
      id: 'ts-int-2',
      text: 'Um usuario liga dizendo que "a internet nao funciona". Quais perguntas faria para entender o problema?',
      followUps: ['E se fosse usuario remoto?', 'Como explicaria roteador para uma pessoa leiga?'],
      evaluationCriteria: ['diagnostico', 'comunicacao'],
    },
    {
      id: 'ts-int-3',
      text: 'Voce ja utilizou sistemas de chamados ou tickets? Conhece alguma ferramenta?',
      followUps: ['Por que e importante registrar chamados?', 'Como priorizaria varios chamados?'],
      evaluationCriteria: ['organizacao', 'ferramentas'],
    },
    {
      id: 'ts-int-4',
      text: 'Imagine que nao consegue resolver um problema de um usuario. O que faria?',
      followUps: ['Como orientaria o usuario?', 'Como documentaria para escalonar?'],
      evaluationCriteria: ['escalacao', 'transparencia'],
    },
    {
      id: 'ts-int-5',
      text: 'Como lidaria com um usuario irritado por causa de um problema que esta demorando?',
      followUps: ['Ja passou por situacao assim?', 'O que faria para acalmar?'],
      evaluationCriteria: ['inteligencia emocional', 'paciencia'],
    },
    {
      id: 'ts-int-6',
      text: 'Voce sabe o que e um endereço IP? Consegue explicar de forma simples?',
      followUps: ['E DNS, sabe o que é?', 'Ja configurou uma rede domestica?'],
      evaluationCriteria: ['conhecimento tecnico', 'didatica'],
    },
    {
      id: 'ts-int-7',
      text: 'Como voce organizaria seu dia se tivesse 10 chamados pendentes e 5 novos chegando?',
      followUps: ['Quais criterios usaria para priorizar?', 'Como impediria que chamados esquecesse?'],
      evaluationCriteria: ['organizacao', 'priorizacao'],
    },
    {
      id: 'ts-int-8',
      text: 'Voce ja usou remote desktop ou ferramentas de acesso remoto?',
      followUps: ['Quais conhece?', 'Como orientaria um usuario a usar?'],
      evaluationCriteria: ['ferramentas', 'comunicacao'],
    },
    {
      id: 'ts-int-9',
      text: 'O que voce faria se um usuario apagasse um arquivo importante por engano?',
      followUps: ['Conhece formas de recuperar?', 'Como preveniria isso?'],
      evaluationCriteria: ['resolucao', 'prevencao'],
    },
    {
      id: 'ts-int-10',
      text: 'Voce sabe a diferenca entre hardware e software? Me de exemplos.',
      followUps: ['Ja formatou um computador?', 'Ja instalou sistema operacional?'],
      evaluationCriteria: ['conhecimento', 'experiencia'],
    },
    {
      id: 'ts-int-11',
      text: 'Um usuario disse que o computador esta lento. Como investigaria o problema?',
      followUps: ['Quais perguntas faria?', 'Quais solucoes tentaria?'],
      evaluationCriteria: ['diagnostico', 'investigacao'],
    },
    {
      id: 'ts-int-12',
      text: 'Voce ja criou tutorial ou guia para ajudar usuarios?',
      followUps: ['Como foi?', 'Qual ferramenta usou?'],
      evaluationCriteria: ['documentacao', 'didatica'],
    },
    {
      id: 'ts-int-13',
      text: 'O que voce faria se descobrisse que um problema que pensou estar resolvido voltou?',
      followUps: ['Como comunicaria?', 'Como investigaria a causa raiz?'],
      evaluationCriteria: ['persistencia', 'comunicacao'],
    },
    {
      id: 'ts-int-14',
      text: 'Voce sabe o que sao drivers? Por que sao importantes?',
      followUps: ['Ja atualizou drivers?', 'Como explicaria para um usuario?'],
      evaluationCriteria: ['conhecimento', 'comunicacao'],
    },
    {
      id: 'ts-int-15',
      text: 'Como voce se manteria atualizado sobre novos problemas e solucoes de TI?',
      followUps: ['Quais fontes de informacao usaria?', 'Ja participou de forum de suporte?'],
      evaluationCriteria: ['proatividade', 'aprendizado'],
    },
    {
      id: 'ts-int-16',
      text: 'Um usuario diz que nao consegue imprimir. Quais passos seguiria?',
      followUps: ['O que verificaria primeiro?', 'E se fosse impressora de rede?'],
      evaluationCriteria: ['diagnostico', 'metodologia'],
    },
    {
      id: 'ts-int-17',
      text: 'Voce ja ajudou alguem com problema de virus ou malware?',
      followUps: ['Como foi?', 'O que recomendaria para prevenir?'],
      evaluationCriteria: ['seguranca', 'experiencia'],
    },
    {
      id: 'ts-int-18',
      text: 'Como voce lidaria se descobrisse que um problema e recorrente em varios usuarios?',
      followUps: ['Para quem reportaria?', 'Como documentaria?'],
      evaluationCriteria: ['analise', 'comunicacao'],
    },
  ],
  junior: [
    {
      id: 'ts-jr-1',
      text: 'Me conte sobre sua experiencia previa em suporte ou atendimento.',
      followUps: ['Quais tipos de problemas atendia?', 'Qual ferramenta mais utilizou?'],
      evaluationCriteria: ['experiencia', 'ferramentas'],
    },
    {
      id: 'ts-jr-2',
      text: 'Me descreva um problema tecnico complexo que resolveu. Como foi o processo?',
      followUps: ['Criou documentacao?', 'Qual foi o feedback do usuario?'],
      evaluationCriteria: ['resolucao', 'documentacao'],
    },
    {
      id: 'ts-jr-3',
      text: 'Como organiza seu dia com muitos chamados pendentes e novos chegando?',
      followUps: ['Usa metodo de gestao de tempo?', 'Como evita que chamados caiam no esquecimento?'],
      evaluationCriteria: ['organizacao', 'gestao'],
    },
    {
      id: 'ts-jr-4',
      text: 'Voce ja precisou orientar usuario remotamente? Como foi?',
      followUps: ['Quais ferramentas de acesso remoto conhece?', 'Como garante que o usuario entenda?'],
      evaluationCriteria: ['suporte remoto', 'didatica'],
    },
    {
      id: 'ts-jr-5',
      text: 'Como se mantem atualizado sobre novas tecnologias e problemas comuns?',
      followUps: ['Ja participou de comunidade ou forum?', 'Como compartilha conhecimento?'],
      evaluationCriteria: ['autodidata', 'colaboracao'],
    },
    {
      id: 'ts-jr-6',
      text: 'Voce ja identificou um problema recorrente e criou uma solucao definitiva?',
      followUps: ['Como documentou?', 'Como mediu o impacto?'],
      evaluationCriteria: ['proatividade', 'melhoria'],
    },
    {
      id: 'ts-jr-7',
      text: 'Como voce aborda a documentacao de problemas e solucoes?',
      followUps: ['Ja criou base de conhecimento?', 'Como estrutura o conteudo?'],
      evaluationCriteria: ['documentacao', 'organizacao'],
    },
    {
      id: 'ts-jr-8',
      text: 'Me conte sobre um momento em que precisou escalonar um problema critico.',
      followUps: ['Como comunicou?', 'Como acompanhou ate a resolucao?'],
      evaluationCriteria: ['escalacao', 'acompanhamento'],
    },
    {
      id: 'ts-jr-9',
      text: 'Voce ja trabalhou com suporte por telefone, chat e email? Qual prefere?',
      followUps: ['Quais vantagens de cada um?', 'Como adapta a comunicacao?'],
      evaluationCriteria: ['multicanal', 'adaptacao'],
    },
    {
      id: 'ts-jr-10',
      text: 'Como voce lida com SLAs e prazos de resolucao?',
      followUps: ['Ja deixou de cumprir um SLA?', 'Como gerencia expectativas?'],
      evaluationCriteria: ['SLA', 'gestao'],
    },
    {
      id: 'ts-jr-11',
      text: 'Voce ja treinou ou orientou estagiarios?',
      followUps: ['Como foi?', 'Qual abordagem usou?'],
      evaluationCriteria: ['mentorship', 'lideranca'],
    },
    {
      id: 'ts-jr-12',
      text: 'Como voce investiga problemas que nao tem causa obvia?',
      followUps: ['Quais ferramentas de diagnostico usa?', 'Como documenta a investigacao?'],
      evaluationCriteria: ['investigacao', 'metodologia'],
    },
    {
      id: 'ts-jr-13',
      text: 'Me fale sobre um feedback dificil que recebeu de um usuario.',
      followUps: ['Como lidou?', 'O que mudou?'],
      evaluationCriteria: ['resiliencia', 'melhoria'],
    },
    {
      id: 'ts-jr-14',
      text: 'Voce ja trabalhou com inventario de ativos de TI?',
      followUps: ['Como organizava?', 'Quais ferramentas usou?'],
      evaluationCriteria: ['organizacao', 'inventario'],
    },
    {
      id: 'ts-jr-15',
      text: 'Como voce aborda problemas de seguranca da informacao no suporte?',
      followUps: ['Ja lidou com incidente de seguranca?', 'Como orientaria usuarios?'],
      evaluationCriteria: ['seguranca', 'orientacao'],
    },
    {
      id: 'ts-jr-16',
      text: 'Voce ja precisou dar suporte para sistemas que nao conhecia bem? Como fez?',
      followUps: ['Quais recursos utilizou?', 'Quanto tempo levou para se familiarizar?'],
      evaluationCriteria: ['adaptacao', 'aprendizado'],
    },
    {
      id: 'ts-jr-17',
      text: 'Como voce contribui para a melhoria de processos do time de suporte?',
      followUps: ['Ja sugeriu mudancas?', 'Como implementou?'],
      evaluationCriteria: ['melhoria', 'iniciativa'],
    },
    {
      id: 'ts-jr-18',
      text: 'Qual foi o volume de chamados que voce conseguiu atender em um dia?',
      followUps: ['Como gerencia a qualidade?', 'Como evita burnout?'],
      evaluationCriteria: ['produtividade', 'equilibrio'],
    },
  ],
  mid: [
    {
      id: 'ts-mid-1',
      text: 'Me descreva sua trajetoria e como voce desenvolveu sua carreira na area de suporte.',
      followUps: ['Qual foi seu maior desafio profissional?', 'Como se diferencia de quando era junior?'],
      evaluationCriteria: ['trajetoria', 'evolucao'],
    },
    {
      id: 'ts-mid-2',
      text: 'Como analista pleno, voce ja liderou ou supervisionou equipes de suporte.',
      followUps: ['Como avalia desempenho da equipe?', 'Qual abordagem para feedbacks dificeis?'],
      evaluationCriteria: ['lideranca', 'gestao'],
    },
    {
      id: 'ts-mid-3',
      text: 'Fale sobre um momento em que identificou problema recorrente e implementou solucao definitiva.',
      followUps: ['Como documentou e comunicou?', 'Quais metricas usou para medir melhoria?'],
      evaluationCriteria: ['iniciativa', 'melhoria'],
    },
    {
      id: 'ts-mid-4',
      text: 'Como voce aborda a criacao e manutencao de bases de conhecimento?',
      followUps: ['Como define prioridade do que documentar?', 'Como incentiva a equipe a contribuir?'],
      evaluationCriteria: ['documentacao', 'colaboracao'],
    },
    {
      id: 'ts-mid-5',
      text: 'Como voce gerencia crises como queda de sistemas criticos?',
      followUps: ['Ja passou por situacao assim?', 'Como foi a comunicacao com stakeholders?'],
      evaluationCriteria: ['gestao de crises', 'comunicacao'],
    },
    {
      id: 'ts-mid-6',
      text: 'Como voce planeja a capacidade do time de suporte?',
      followUps: ['Quais metricas observa?', 'Como ajusta para periodos de pico?'],
      evaluationCriteria: ['planejamento', 'metricas'],
    },
    {
      id: 'ts-mid-7',
      text: 'Me conte sobre um projeto de automacao que implementou no suporte.',
      followUps: ['Quais ferramentas usou?', 'Qual foi o impacto?'],
      evaluationCriteria: ['automacao', 'inovacao'],
    },
    {
      id: 'ts-mid-8',
      text: 'Como voce garante a qualidade do atendimento da equipe?',
      followUps: ['Quais indicadores monitora?', 'Como da feedback construtivo?'],
      evaluationCriteria: ['qualidade', 'monitoramento'],
    },
    {
      id: 'ts-mid-9',
      text: 'Voce ja negociou contratos de SLA com areas internas ou clientes?',
      followUps: ['Como definiu os niveis?', 'Como gerencia expectativas?'],
      evaluationCriteria: ['negociacao', 'SLA'],
    },
    {
      id: 'ts-mid-10',
      text: 'Como voce aborda a formacao e desenvolvimento continuo da equipe?',
      followUps: ['Quais treinamentos implementou?', 'Como mediu a eficacia?'],
      evaluationCriteria: ['desenvolvimento', 'treinamento'],
    },
    {
      id: 'ts-mid-11',
      text: 'Me fale sobre uma mudanca de processo que voce liderou.',
      followUps: ['Como engajou a equipe?', 'Quais resistencias enfrentou?'],
      evaluationCriteria: ['mudanca', 'lideranca'],
    },
    {
      id: 'ts-mid-12',
      text: 'Como voce integra o suporte com outras areas como desenvolvimento e infraestrutura?',
      followUps: ['Como garante comunicacao?', 'Ja criou canais de escalacao?'],
      evaluationCriteria: ['colaboracao', 'integracao'],
    },
    {
      id: 'ts-mid-13',
      text: 'Voce ja implementou metricas e KPIs para o time? Quais?',
      followUps: ['Como coleta e apresenta?', 'Como usa para melhorar?'],
      evaluationCriteria: ['metricas', 'analise'],
    },
    {
      id: 'ts-mid-14',
      text: 'Como voce aborda a gestao de incidentes criticos?',
      followUps: ['Qual processo segue?', 'Como faz post-mortem?'],
      evaluationCriteria: ['incidentes', 'processo'],
    },
    {
      id: 'ts-mid-15',
      text: 'Me conte sobre um momento em que precisou defender um investimento em suporte.',
      followUps: ['Como apresentou argumentos?', 'Qual foi o resultado?'],
      evaluationCriteria: ['persuasao', 'planejamento'],
    },
    {
      id: 'ts-mid-16',
      text: 'Como voce gerencia a pressao quando varios incidentes criticos acontecem ao mesmo tempo?',
      followUps: ['Como prioritiza?', 'Como comunica com areas impactadas?'],
      evaluationCriteria: ['gestao', 'priorizacao'],
    },
    {
      id: 'ts-mid-17',
      text: 'Voce ja participou de selecao de ferramentas de suporte?',
      followUps: ['Quais criterios usou?', 'Como avaliou opcoes?'],
      evaluationCriteria: ['selecao', 'analise'],
    },
    {
      id: 'ts-mid-18',
      text: 'Como voce contribui para a relacao do suporte com os usuarios finais?',
      followUps: ['Ja mediu satisfacao?', 'Como trata feedbacks negativos?'],
      evaluationCriteria: ['satisfacao', 'relacionamento'],
    },
  ],
};

// ADMINISTRATION QUESTIONS
const administrationQuestions: Record<JobLevel, Question[]> = {
  intern: [
    {
      id: 'adm-int-1',
      text: 'Ola! Seja bem-vindo! Me conte sobre voce, seu curso, periodo e o que te atraiu na area administrativa.',
      followUps: ['Ja teve experiencia em escritorio?', 'Qual aspecto da administracao mais te interessa?'],
      evaluationCriteria: ['motivacao', 'interesse'],
    },
    {
      id: 'adm-int-2',
      text: 'Imagine que precisa organizar documentos fisicos e digitais de um departamento. Como faria?',
      followUps: ['Quais ferramentas ou metodos utilizaria?', 'Como garantiria que qualquer pessoa encontrasse um documento?'],
      evaluationCriteria: ['organizacao', 'metodologia'],
    },
    {
      id: 'adm-int-3',
      text: 'Voce ja utilizou software de escritorio como Excel, Word ou sistemas de gestao? Qual nivel?',
      followUps: ['Sabe usar formulas basicas no Excel?', 'Ja criou documentos profissionais?'],
      evaluationCriteria: ['ferramentas', 'competencia'],
    },
    {
      id: 'adm-int-4',
      text: 'Como lidaria com uma situacao em que recebe varias tarefas de pessoas diferentes com prazos proximos?',
      followUps: ['Como organizaria prioridades?', 'O que faria se percebesse que nao conseguiria entregar tudo?'],
      evaluationCriteria: ['priorizacao', 'comunicacao'],
    },
    {
      id: 'adm-int-5',
      text: 'Voce prefere trabalhar em tarefas burocraticas ou em atividades com mais interacao com pessoas?',
      followUps: ['Me de um exemplo de cada tipo.', 'Como se ve daqui a 5 anos na area?'],
      evaluationCriteria: ['autoconhecimento', 'preferencias'],
    },
    {
      id: 'adm-int-6',
      text: 'Voce ja lidou com agendamento de reunioes ou compromissos? Como organizava?',
      followUps: ['Ja usou calendario compartilhado?', 'Como lidava com conflitos de horario?'],
      evaluationCriteria: ['organizacao', 'ferramentas'],
    },
    {
      id: 'adm-int-7',
      text: 'Se um visitador chegasse sem agendamento, como voce atenderia?',
      followUps: ['E se a pessoa que ele quer ver nao estivesse disponivel?', 'Como documentaria a visita?'],
      evaluationCriteria: ['recepcao', 'organizacao'],
    },
    {
      id: 'adm-int-8',
      text: 'Como voce faria um controle de estoque de material de escritorio?',
      followUps: ['Quais informacoes registraria?', 'Como evitaria faltas?'],
      evaluationCriteria: ['organizacao', 'planejamento'],
    },
    {
      id: 'adm-int-9',
      text: 'Voce ja redigiu emails profissionais ou memorandos?',
      followUps: ['Quais cuidados toma?', 'Ja cometeu erro de tom ou formalidade?'],
      evaluationCriteria: ['comunicacao escrita', 'formalidade'],
    },
    {
      id: 'adm-int-10',
      text: 'Como voce lidaria se descobrisse um erro proprio em um documento ja enviado?',
      followUps: ['Como comunicaria?', 'Como evitaria no futuro?'],
      evaluationCriteria: ['honestidade', 'resolucao'],
    },
    {
      id: 'adm-int-11',
      text: 'Voce ja trabalhou com controle de ponto ou registro de presenca?',
      followUps: ['Quais ferramentas conhece?', 'Como verificaria inconsistencias?'],
      evaluationCriteria: ['organizacao', 'controle'],
    },
    {
      id: 'adm-int-12',
      text: 'Como voce organizaria uma viagem corporativa para um executivo?',
      followUps: ['O que verificaria?', 'Como documentaria?'],
      evaluationCriteria: ['planejamento', 'detalhes'],
    },
    {
      id: 'adm-int-13',
      text: 'Voce ja trabalhou com notas fiscais ou documentos contabeis?',
      followUps: ['O que e uma nota fiscal?', 'Quais cuidados precisa ter?'],
      evaluationCriteria: ['conhecimento', 'atencao'],
    },
    {
      id: 'adm-int-14',
      text: 'Como voce faria um levantamento de fornecedores para cotacao de preços?',
      followUps: ['Quais informacoes coletaria?', 'Como organizaria os dados?'],
      evaluationCriteria: ['organizacao', 'pesquisa'],
    },
    {
      id: 'adm-int-15',
      text: 'Se um colega pedisse para voce fazer um favor pessoal durante o horario de trabalho, como reagiria?',
      followUps: ['Como definiria limites?', 'E se fosse o chefe pedindo?'],
      evaluationCriteria: ['etica', 'limites'],
    },
    {
      id: 'adm-int-16',
      text: 'Voce ja digitou documentos ou laudos tecnicos?',
      followUps: ['Como garantia qualidade?', 'Ja fez revisao de texto de outros?'],
      evaluationCriteria: ['digitacao', 'qualidade'],
    },
    {
      id: 'adm-int-17',
      text: 'Como voce se organizaria para aprender rapidamente os processos da empresa?',
      followUps: ['Quais perguntas faria?', 'Como documentaria o que aprendeu?'],
      evaluationCriteria: ['aprendizado', 'proatividade'],
    },
    {
      id: 'adm-int-18',
      text: 'Voce ja organizou eventos corporativos ou reuniões?',
      followUps: ['Quais tarefas envolveram?', 'O que daría mais atencao?'],
      evaluationCriteria: ['organizacao', 'eventos'],
    },
  ],
  junior: [
    {
      id: 'adm-jr-1',
      text: 'Me conte sobre sua experiencia previa em funcoes administrativas.',
      followUps: ['Quais eram suas principais responsabilidades?', 'Quais sistemas e ferramentas utilizava?'],
      evaluationCriteria: ['experiencia', 'ferramentas'],
    },
    {
      id: 'adm-jr-2',
      text: 'Me descreva um processo administrativo que ajudou a organizar ou melhorar.',
      followUps: ['Qual foi o resultado?', 'Como documentou o novo processo?'],
      evaluationCriteria: ['melhoria', 'documentacao'],
    },
    {
      id: 'adm-jr-3',
      text: 'Como voce lida com prazos apertados e situacoes de pressao?',
      followUps: ['Me de um exemplo real', 'O que aprendeu com essa experiencia?'],
      evaluationCriteria: ['gestao de tempo', 'resiliencia'],
    },
    {
      id: 'adm-jr-4',
      text: 'Voce ja precisou lidar com informacoes sigilosas ou confidenciais?',
      followUps: ['Como garante seguranca de informacoes sensiveis?', 'Ja enfrentou dilema etico?'],
      evaluationCriteria: ['etica', 'confidencialidade'],
    },
    {
      id: 'adm-jr-5',
      text: 'Qual e sua relacao com tecnologia? Se adapta bem a novos sistemas?',
      followUps: ['Ultima ferramenta nova que aprendeu?', 'Como se mantem atualizado sobre ferramentas de produtividade?'],
      evaluationCriteria: ['adaptabilidade', 'tecnologia'],
    },
    {
      id: 'adm-jr-6',
      text: 'Como voce faz o controle de despesas e prestacao de contas?',
      followUps: ['Quais ferramentas usou?', 'Como garante que nada passe despercebido?'],
      evaluationCriteria: ['controle', 'organizacao'],
    },
    {
      id: 'adm-jr-7',
      text: 'Voce ja gerenciou agenda de executivos? Como era o dia a dia?',
      followUps: ['Como lidava com conflitos?', 'Como priorizava compromissos?'],
      evaluationCriteria: ['agenda', 'priorizacao'],
    },
    {
      id: 'adm-jr-8',
      text: 'Me conte sobre um problema de comunicacao que voce resolveu entre areas.',
      followUps: ['Qual foi o problema?', 'Como mediou a situacao?'],
      evaluationCriteria: ['mediacao', 'comunicacao'],
    },
    {
      id: 'adm-jr-9',
      text: 'Como voce aborda a elaboracao de relatorios gerenciais?',
      followUps: ['Quais informacoes considera essenciais?', 'Ja automatizou algum relatorio?'],
      evaluationCriteria: ['relatorios', 'analise'],
    },
    {
      id: 'adm-jr-10',
      text: 'Voce ja trabalhou com contratos ou documentos juridicos?',
      followUps: ['Quais cuidados tomava?', 'Como organizava os arquivos?'],
      evaluationCriteria: ['contratos', 'organizacao'],
    },
    {
      id: 'adm-jr-11',
      text: 'Como voce gerencia reclamacoes ou feedbacks de clientes internos?',
      followUps: ['Ja lidou com situacao dificil?', 'Como documentava?'],
      evaluationCriteria: ['reclamacoes', 'comunicacao'],
    },
    {
      id: 'adm-jr-12',
      text: 'Voce ja participou de processo de compras ou licitacoes?',
      followUps: ['Qual foi seu papel?', 'Quais documentos conhece?'],
      evaluationCriteria: ['compras', 'licitacoes'],
    },
    {
      id: 'adm-jr-13',
      text: ' Como voce mantem organizado o arquivo de documentos da empresa?',
      followUps: ['Quais metodos usa?', 'Ja criou indice ou catalogo?'],
      evaluationCriteria: ['arquivo', 'organizacao'],
    },
    {
      id: 'adm-jr-14',
      text: 'Voce ja organizou viagens corporativas de maior complexidade?',
      followUps: ['Quais desafios enfrentou?', 'Como lidou com imprevistos?'],
      evaluationCriteria: ['viagens', 'planejamento'],
    },
    {
      id: 'adm-jr-15',
      text: 'Como voce colabora com areas como RH, financeiro e juridico?',
      followUps: ['Ja fez interface com essas areas?', 'Como garante alinhamento?'],
      evaluationCriteria: ['colaboracao', 'interacao'],
    },
    {
      id: 'adm-jr-16',
      text: 'Me fale sobre um erro que voce cometeu e como lidou com ele.',
      followUps: ['Como comunicou?', 'O que fez para prevenir que acontecesse novamente?'],
      evaluationCriteria: ['honestidade', 'melhoria'],
    },
    {
      id: 'adm-jr-17',
      text: 'Voce ja treinou ou orientou estagiarios na area?',
      followUps: ['Como foi?', 'Qual abordagem usou?'],
      evaluationCriteria: ['mentorship', 'lideranca'],
    },
    {
      id: 'adm-jr-18',
      text: 'Como voce prioriza tarefas quando tudo parece urgente?',
      followUps: ['Quais criterios usa?', 'Como communicia prioridades?'],
      evaluationCriteria: ['priorizacao', 'comunicacao'],
    },
  ],
  mid: [
    {
      id: 'adm-mid-1',
      text: 'Me descreva sua trajetoria profissional e como evoluiu na area administrativa.',
      followUps: ['Qual foi o marco mais importante?', 'Como se compara ao profissional que era ha 3 anos?'],
      evaluationCriteria: ['trajetoria', 'evolucao'],
    },
    {
      id: 'adm-mid-2',
      text: 'Como analista pleno, voce ja liderou equipes ou projetos administrativos.',
      followUps: ['Como delegava tarefas?', 'Como lidava com membros com desempenho abaixo?'],
      evaluationCriteria: ['lideranca', 'delegacao'],
    },
    {
      id: 'adm-mid-3',
      text: 'Me fale sobre um projeto ou processo administrativo complexo que gerenciou.',
      followUps: ['Quais metricas usou para avaliar sucesso?', 'Como comunicou resultados para gestao?'],
      evaluationCriteria: ['gestao de projetos', 'metricas'],
    },
    {
      id: 'adm-mid-4',
      text: 'Como voce aborda a relacao com outros departamentos e stakeholders internos?',
      followUps: ['Ja negociou conflitos de interesse entre areas?', 'Como garante que demandas sejam alinhadas?'],
      evaluationCriteria: ['relacionamento', 'negociacao'],
    },
    {
      id: 'adm-mid-5',
      text: 'Como voce contribui para a melhoria continua dos processos na sua area?',
      followUps: ['Pode dar exemplo de inovacao que implementou?', 'Como avalia se processo precisa ser alterado?'],
      evaluationCriteria: ['melhoria', 'inovacao'],
    },
    {
      id: 'adm-mid-6',
      text: 'Voce ja participou de planejamento estrategico ou orcamento da area?',
      followUps: ['Qual foi seu papel?', 'Quais desafios enfrentou?'],
      evaluationCriteria: ['estrategia', 'orcamento'],
    },
    {
      id: 'adm-mid-7',
      text: 'Como voce garante compliance e seguimento de normas internas?',
      followUps: ['Ja identificou nao-conformidades?', 'Como abordou?'],
      evaluationCriteria: ['compliance', 'normas'],
    },
    {
      id: 'adm-mid-8',
      text: 'Me conte sobre uma mudanca de sistema ou processo que voce liderou.',
      followUps: ['Como engajou a equipe?', 'Quais resistencias enfrentou?'],
      evaluationCriteria: ['mudanca', 'lideranca'],
    },
    {
      id: 'adm-mid-9',
      text: 'Como voce avalia e desenvolve a equipe sob sua responsabilidade?',
      followUps: ['Como da feedback?', 'Como planeja sucessao ou promocoes?'],
      evaluationCriteria: ['desenvolvimento', 'avaliacao'],
    },
    {
      id: 'adm-mid-10',
      text: 'Voce ja negociou contratos com fornecedores de servicos administrativos?',
      followUps: ['Quais criterios avaliou?', 'Como garantiu melhores condicoes?'],
      evaluationCriteria: ['negociacao', 'contratos'],
    },
    {
      id: 'adm-mid-11',
      text: 'Como voce gerencia crises administrativas como problemas com prestadores ou auditorias?',
      followUps: ['Ja passou por situacao assim?', 'Como foi a comunicacao com gestao?'],
      evaluationCriteria: ['crises', 'comunicacao'],
    },
    {
      id: 'adm-mid-12',
      text: 'Voce ja mapeou e otimizou fluxos de trabalho administrativo?',
      followUps: ['Quais ferramentas usou?', 'Qual foi o ganho de eficiencia?'],
      evaluationCriteria: ['processos', 'otimizacao'],
    },
    {
      id: 'adm-mid-13',
      text: 'Como voce contribui para a cultura e clima da area administrativa?',
      followUps: ['Ja implementou acoes de engajamento?', 'Como mediu resultado?'],
      evaluationCriteria: ['cultura', 'engajamento'],
    },
    {
      id: 'adm-mid-14',
      text: 'Voce ja liderou projeto de implementacao de novo sistema gestor?',
      followUps: ['Como foi o planejamento?', 'Quais desafios enfrentou?'],
      evaluationCriteria: ['sistemas', 'implementacao'],
    },
    {
      id: 'adm-mid-15',
      text: 'Como voce alinha as demandas administrativas com os objetivos estrategicos da empresa?',
      followUps: ['Ja participou de BSC ou OKRs?', 'Como traduz objetivos em acoes?'],
      evaluationCriteria: ['estrategia', 'alinhamento'],
    },
    {
      id: 'adm-mid-16',
      text: 'Me fale sobre um momento em que defendeu um investimento para a area.',
      followUps: ['Como apresentou ROI?', 'Qual foi o resultado?'],
      evaluationCriteria: ['persuasao', 'planejamento'],
    },
    {
      id: 'adm-mid-17',
      text: 'Como voce gerencia a relacao com auditoria interna ou externa?',
      followUps: ['Ja preparou documentacao para auditoria?', 'Como tratou achados?'],
      evaluationCriteria: ['auditoria', 'controles'],
    },
    {
      id: 'adm-mid-18',
      text: 'Voce ja atuou em comites ou grupos de trabalho multiplos?',
      followUps: ['Como foi?', 'Como contribuiu para o resultado?'],
      evaluationCriteria: ['colaboracao', 'multiplos'],
    },
  ],
};

// CUSTOMER SERVICE QUESTIONS
const customerServiceQuestions: Record<JobLevel, Question[]> = {
  intern: [
    {
      id: 'cs-int-1',
      text: 'Ola! Seja bem-vindo! Me conte sobre voce, seu curso, periodo e por que quer trabalhar com atendimento.',
      followUps: ['Ja trabalhou ou fez voluntariado lidando com pessoas?', 'O que mais te atrai no atendimento?'],
      evaluationCriteria: ['motivacao', 'interesse'],
    },
    {
      id: 'cs-int-2',
      text: 'Imagine que um cliente liga reclamando de um produto e esta insatisfeito. Como iniciaria essa conversa?',
      followUps: ['Que frases usaria para demonstrar empatia?', 'E se o cliente estivesse gritando?'],
      evaluationCriteria: ['empatia', 'comunicacao'],
    },
    {
      id: 'cs-int-3',
      text: 'O que significa para voce um "bom atendimento"? Me de exemplos de experiencias como cliente.',
      followUps: ['E uma experiencia ruim, o que faltou?', 'Como aplicaria isso no seu dia a dia?'],
      evaluationCriteria: ['conceito', 'referencias'],
    },
    {
      id: 'cs-int-4',
      text: 'Voce ja utilizou redes sociais? Como responderia um cliente que fez reclamacao publica na pagina da empresa?',
      followUps: ['Que tom de voz usaria?', 'Qual o risco de responder inadequadamente?'],
      evaluationCriteria: ['redes sociais', 'tom de voz'],
    },
    {
      id: 'cs-int-5',
      text: 'Como lidaria com situacao em que nao sabe a resposta para uma pergunta do cliente?',
      followUps: ['O que faria enquanto pesquisava?', 'Como garantiria que o cliente voltasse a entrar em contato?'],
      evaluationCriteria: ['transparencia', 'acompanhamento'],
    },
    {
      id: 'cs-int-6',
      text: 'Voce ja trabalhou em equipe? Como comunicaria um problema que esta demorando para resolver?',
      followUps: ['Como pedir ajuda?', 'Como atualizaria o cliente?'],
      evaluationCriteria: ['comunicacao', 'trabalho em equipe'],
    },
    {
      id: 'cs-int-7',
      text: 'O que voce faria se um cliente pedisse algo que a empresa nao oferece?',
      followUps: ['Como explicaria?', 'Ofereceria alternativa?'],
      evaluationCriteria: ['resolucao', 'clareza'],
    },
    {
      id: 'cs-int-8',
      text: 'Voce sabe o que e NPS? Ja ouviu falar sobre pesquisa de satisfacao?',
      followUps: ['Por que e importante?', 'Como contribuiria para melhorar?'],
      evaluationCriteria: ['conhecimento', 'satisfacao'],
    },
    {
      id: 'cs-int-9',
      text: 'Como voce se organizaria para atender varios clientes ao mesmo tempo?',
      followUps: ['Quais criterios usaria?', 'Como evitaria que ninguem ficasse esperando muito?'],
      evaluationCriteria: ['organizacao', 'priorizacao'],
    },
    {
      id: 'cs-int-10',
      text: 'Voce ja teve que lidar com uma pessoa impaciente? Como foi?',
      followUps: ['O que fez?', 'O que aprendeu?'],
      evaluationCriteria: ['paciencia', 'experiencia'],
    },
    {
      id: 'cs-int-11',
      text: 'Para voce, o que e mais importante: resolver rapido ou resolver bem?',
      followUps: ['Como equilibraria as duas coisas?', 'Ja passou por dilema assim?'],
      evaluationCriteria: ['qualidade', 'velocidade'],
    },
    {
      id: 'cs-int-12',
      text: 'Como voce faria para anotar e organizar informacoes de um atendimento?',
      followUps: ['Quais dados registraria?', 'Como garantiria que nao esquecesse de nada?'],
      evaluationCriteria: ['organizacao', 'documentacao'],
    },
    {
      id: 'cs-int-13',
      text: 'Voce ja ouviu falar de "language positiva"? Como usaria para melhorar um atendimento?',
      followUps: ['O que evitaria dizer?', 'Quais frases usaria?'],
      evaluationCriteria: ['comunicacao', 'linguagem'],
    },
    {
      id: 'cs-int-14',
      text: 'Um cliente pede para falar com o gerente porque esta insatisfeito. O que faz?',
      followUps: ['Como tenta resolver primeiro?', 'Quando realmente escalona?'],
      evaluationCriteria: ['resolucao', 'escalacao'],
    },
    {
      id: 'cs-int-15',
      text: 'Como voce manteria a calma depois de varios atendimentos dificeis?',
      followUps: ['Ja passou por situacao assim?', 'O que faz para recarregar?'],
      evaluationCriteria: ['resiliencia', 'autocuidado'],
    },
    {
      id: 'cs-int-16',
      text: 'Voce ja sugeriu uma melhoria em um processo ou servico?',
      followUps: ['Como foi?', 'Qual foi o resultado?'],
      evaluationCriteria: ['iniciativa', 'melhoria'],
    },
    {
      id: 'cs-int-17',
      text: 'Se um cliente elogiasse seu atendimento, como voce reagiria?',
      followUps: ['Como usaria esse feedback?', 'Dividiria com a equipe?'],
      evaluationCriteria: ['recepcao', 'colaboracao'],
    },
    {
      id: 'cs-int-18',
      text: 'Como voce se prepararia antes de iniciar um dia de atendimento?',
      followUps: ['Quais informacoes revisaria?', 'Como organizaria seu espaco?'],
      evaluationCriteria: ['preparo', 'organizacao'],
    },
  ],
  junior: [
    {
      id: 'cs-jr-1',
      text: 'Me conte sobre sua experiencia previa em atendimento ao cliente.',
      followUps: ['Qual era o perfil do seu publico?', 'Quais canais ja utilizou?'],
      evaluationCriteria: ['experiencia', 'canais'],
    },
    {
      id: 'cs-jr-2',
      text: 'Me descreva uma situacao dificil com um cliente que resolveu com sucesso.',
      followUps: ['O que fez diferente?', 'Como o cliente reagiu?'],
      evaluationCriteria: ['resolucao', 'sucesso'],
    },
    {
      id: 'cs-jr-3',
      text: 'Como voce lida com periodos de grande volume de atendimento? Tem estrategia para manter qualidade?',
      followUps: ['Como gerencia seu emocional?', 'Ja precisou pedir ajuda?'],
      evaluationCriteria: ['gestao de stress', 'qualidade'],
    },
    {
      id: 'cs-jr-4',
      text: 'Voce ja trabalhou com metas como tempo medio de atendimento ou NPS?',
      followUps: ['Como se sentia em relacao a essas metas?', 'O que fazia quando percebia que nao ia alcancar?'],
      evaluationCriteria: ['metricas', 'responsabilidade'],
    },
    {
      id: 'cs-jr-5',
      text: 'Como voce se mantem motivado em uma funcao que pode ser repetitiva?',
      followUps: ['O que mais te da satisfacao?', 'Ja pensou em carreira na area?'],
      evaluationCriteria: ['motivacao', 'perspectiva'],
    },
    {
      id: 'cs-jr-6',
      text: 'Voce ja treinou ou orientou novos atendentes?',
      followUps: ['Como foi?', 'Qual abordagem usou?'],
      evaluationCriteria: ['mentorship', 'lideranca'],
    },
    {
      id: 'cs-jr-7',
      text: 'Como voce contribui para a base de conhecimento ou FAQ do time?',
      followUps: ['Ja criou documentacao?', 'Como estrutura informacoes?'],
      evaluationCriteria: ['documentacao', 'colaboracao'],
    },
    {
      id: 'cs-jr-8',
      text: 'Me fale sobre um feedback dificil que recebeu de um cliente ou gestor.',
      followUps: ['Como lidou?', 'O que mudou?'],
      evaluationCriteria: ['resiliencia', 'melhoria'],
    },
    {
      id: 'cs-jr-9',
      text: 'Voce ja identificou um problema recorrente e propoe solucao para a empresa?',
      followUps: ['Como apresentou?', 'Qual foi o impacto?'],
      evaluationCriteria: ['iniciativa', 'proatividade'],
    },
    {
      id: 'cs-jr-10',
      text: 'Como voce aborda atendimentos por canais diferentes como telefone, chat e email?',
      followUps: ['Quais adaptacoes faz?', 'Qual e mais desafiador?'],
      evaluationCriteria: ['multicanal', 'adaptacao'],
    },
    {
      id: 'cs-jr-11',
      text: 'Voce ja passou por uma crise de atendimento, como uma queda de sistema que afetou muitos clientes?',
      followUps: ['Como foi a comunicacao?', 'Como priorizou?'],
      evaluationCriteria: ['crises', 'comunicacao'],
    },
    {
      id: 'cs-jr-12',
      text: 'Como voce equilibra resolver o problema do cliente e seguir scripts ou padres definidos?',
      followUps: ['Ja precisou fugir do script?', 'Como documentou?'],
      evaluationCriteria: ['autonomia', 'processos'],
    },
    {
      id: 'cs-jr-13',
      text: 'Voce ja participou de projetos para melhorar a experiencia do cliente?',
      followUps: ['Qual foi seu papel?', 'Qual foi o resultado?'],
      evaluationCriteria: ['projetos', 'melhoria'],
    },
    {
      id: 'cs-jr-14',
      text: 'Como voce lida com clientes que fazem demandas repetidas ou insistem na mesma questao?',
      followUps: ['Como mantem a calma?', 'Como redireciona a conversa?'],
      evaluationCriteria: ['paciencia', 'controle'],
    },
    {
      id: 'cs-jr-15',
      text: 'Voce ja precisou dar uma noticia ruim para um cliente? Como fez?',
      followUps: ['Como preparou a conversa?', 'Como o cliente reagiu?'],
      evaluationCriteria: ['comunicacao', 'transparencia'],
    },
    {
      id: 'cs-jr-16',
      text: 'Como voce gerencia o tempo em cada atendimento?',
      followUps: ['Ja usou cronometro ou timer?', 'Como evita que conversa se alongue demais?'],
      evaluationCriteria: ['gestao de tempo', 'eficiencia'],
    },
    {
      id: 'cs-jr-17',
      text: 'Me conta sobre um momento em que voce surpreendeu um cliente positivamente.',
      followUps: ['O que fez?', 'Qual foi a reacao?'],
      evaluationCriteria: ['experiencia', 'encantamento'],
    },
    {
      id: 'cs-jr-18',
      text: 'Como voce participa da cultura e do clima do time de atendimento?',
      followUps: ['Ja sugeriu acoes de engajamento?', 'Como contribui para o ambiente?'],
      evaluationCriteria: ['cultura', 'colaboracao'],
    },
  ],
  mid: [
    {
      id: 'cs-mid-1',
      text: 'Me descreva sua trajetoria e como evoluiu na area de atendimento.',
      followUps: ['Qual foi o aprendizado mais importante?', 'Como avalia sua evolucao?'],
      evaluationCriteria: ['trajetoria', 'evolucao'],
    },
    {
      id: 'cs-mid-2',
      text: 'Como analista pleno, voce ja atuou na supervisao ou mentoria de atendentes.',
      followUps: ['Como avaliava desempenho?', 'Qual abordagem para feedbacks construtivos?'],
      evaluationCriteria: ['lideranca', 'avaliacao'],
    },
    {
      id: 'cs-mid-3',
      text: 'Me fale sobre uma melhoria de processo ou projeto de atendimento que implementou.',
      followUps: ['Como mediu impacto?', 'Como engajou a equipe?'],
      evaluationCriteria: ['melhoria', 'metricas'],
    },
    {
      id: 'cs-mid-4',
      text: 'Como voce aborda situacoes de crise como problemas que viralizam ou reclamacoes recorrentes?',
      followUps: ['Ja passou por situacao assim?', 'Como foi a comunicacao com outras areas?'],
      evaluationCriteria: ['crises', 'comunicacao'],
    },
    {
      id: 'cs-mid-5',
      text: 'Qual sua visao sobre o futuro do atendimento com automatizacoes e IA?',
      followUps: ['Como se prepara para mudancas?', 'O que atendimento humano oferece que IA nao consegue?'],
      evaluationCriteria: ['visao', 'adaptacao'],
    },
    {
      id: 'cs-mid-6',
      text: 'Como voce planeja a capacidade do time para periodos de pico?',
      followUps: ['Quais metricas observa?', 'Como ajusta escala?'],
      evaluationCriteria: ['planejamento', 'metricas'],
    },
    {
      id: 'cs-mid-7',
      text: 'Voce ja liderou projeto de implementacao de novo canal de atendimento?',
      followUps: ['Quais desafios enfrentou?', 'Como mediu sucesso?'],
      evaluationCriteria: ['implementacao', 'canais'],
    },
    {
      id: 'cs-mid-8',
      text: 'Como voce garante qualidade consistente em toda a equipe?',
      followUps: ['Quais monitoramentos faz?', 'Como da feedback em escala?'],
      evaluationCriteria: ['qualidade', 'consistencia'],
    },
    {
      id: 'cs-mid-9',
      text: 'Me fale sobre como voce define e acompanha SLAs do time.',
      followUps: ['Quais SLAs costuma usar?', 'Como gerencia expectativas com areas internas?'],
      evaluationCriteria: ['SLA', 'gestao'],
    },
    {
      id: 'cs-mid-10',
      text: 'Voce ja negociou com outras areas para resolver problemas sistemicos do atendimento?',
      followUps: ['Como engajou outras areas?', 'Qual foi o resultado?'],
      evaluationCriteria: ['negociacao', 'colaboracao'],
    },
    {
      id: 'cs-mid-11',
      text: 'Como voce desenvolve e retem talentos no time de atendimento?',
      followUps: ['Como planeja carreira dos atendentes?', 'Como reduz turnover?'],
      evaluationCriteria: ['desenvolvimento', 'retencao'],
    },
    {
      id: 'cs-mid-12',
      text: 'Voce ja implementou programa de voz do cliente? Como?',
      followUps: ['Quais canais usou?', 'Como transformava feedback em acao?'],
      evaluationCriteria: ['VOC', 'feedback'],
    },
    {
      id: 'cs-mid-13',
      text: 'Como voce aborda a integracao de novos atendentes?',
      followUps: ['Quais etapas do onboarding?', 'Como garante que atinjam produtividade?'],
      evaluationCriteria: ['onboarding', 'integracao'],
    },
    {
      id: 'cs-mid-14',
      text: 'Me fale sobre um momento em que defendeu um investimento para area de atendimento.',
      followUps: ['Como apresentou ROI?', 'Qual foi o resultado?'],
      evaluationCriteria: ['persuasao', 'investimento'],
    },
    {
      id: 'cs-mid-15',
      text: 'Como voce gerencia a relacao entre atendimento e outras areas como produto, vendas e marketing?',
      followUps: ['Ja criou canais formais de comunicacao?', 'Como garante alinhamento?'],
      evaluationCriteria: ['interacao', 'colaboracao'],
    },
    {
      id: 'cs-mid-16',
      text: 'Voce ja lidou com uma situacao de atendimento que teve impacto na reputacao da empresa?',
      followUps: ['Como foi a gestao?', 'Quais aprendizados levou?'],
      evaluationCriteria: ['reputacao', 'gestao'],
    },
    {
      id: 'cs-mid-17',
      text: 'Como voce contribui para a cultura e clima da area de atendimento?',
      followUps: ['Ja mediu clima?', 'Que acoes implementou?'],
      evaluationCriteria: ['cultura', 'clima'],
    },
    {
      id: 'cs-mid-18',
      text: 'Qual e a maior transformacao que voce liderou na area de atendimento?',
      followUps: ['Quais desafios enfrentou?', 'Como mediu sucesso?'],
      evaluationCriteria: ['transformacao', 'lideranca'],
    },
  ],
};

export const questionDatabase: Record<JobArea, Record<JobLevel, Question[]>> = {
  'software-development': softwareDevQuestions,
  'technical-support': technicalSupportQuestions,
  'administration': administrationQuestions,
  'customer-service': customerServiceQuestions,
};

// Function to get random questions for an interview
export const getRandomQuestions = (
  jobArea: JobArea,
  jobLevel: JobLevel,
  numQuestions: number = 5
): Question[] => {
  const allQuestions = [...questionDatabase[jobArea][jobLevel]];
  const shuffled = allQuestions.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, numQuestions);
};

// Function to get a random number of questions (between 3 and 5)
export const getRandomQuestionCount = (): number => {
  return Math.floor(Math.random() * 3) + 3; // Returns 3, 4, or 5
};
