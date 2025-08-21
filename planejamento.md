# backend

## ordem de config app.js

- Configuração básica do Express (json, urlencoded).
- Sessão (sessionConfig(app)).
- Flash (app.use(flash) + flashConfig(app)).
- Configuração de views.
- Rotas (app.use('/', indexRoute)).
- Conexão com BD e start do servidor.

## configuração basica/estrutura de arquivos

[x] configurar arquivos de dependencias do projeto
- config files, server file, dotenv file, src files

[x] configurar views com bootstrap

[x] config git, git file, git connection

[x] configurar messages, session e flash messages
    - testar para ver se funciona


## config de logica backend

[x] Formulario de registro
    - [x] Validação de email e senha inseridos pelo user
    - [x] Validar se cadastro já existe no BD
    - [x] Salvar no banco de dados, efetuar cadastro

[x] Formulario de login/session
    - [x] Verificar se user já tem cadastro
    - [x] iniciar sessão caso tenha cadastro
    - [x] permitir encerrar sessão
    - [x] Mostrar btn sair e entrar baseado na sessão
    - [x] permitir acesso a rota 'index.ejs' apenas se session estver ativa


[x] validar e salvar contatos na rota 'contatos'
    - [x] criar view com form para adicionar contatos ao BD
    - [x] criar model para salvar e validar contatos no BD, validacao etc

[x] listar contatos na rota 'index'
    - [x] apontar para rotas de edição e exclusão

[x] Criar metodo de edição de contato

[x] Criar metodo de exclusão de contato

[x] Aplicar estilos nas views
    - [x] configurar os arquivos estaticos no app.js
    - [x] colocar o link do CSS nas views

# expectativa de termino

- 10hrs