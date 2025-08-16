# backend

## configuração basica/estrutura de arquivos

[x] configurar arquivos de dependencias do projeto
- config files, server file, dotenv file, src files

[x] configurar views com bootstrap

[x] config git, git file, git connection

[x] configurar messages, session e flash messages
    - testar para ver se funciona

## ordem de config app.js

- Configuração básica do Express (json, urlencoded).
- Sessão (sessionConfig(app)).
- Flash (app.use(flash) + flashConfig(app)).
- Configuração de views.
- Rotas (app.use('/', indexRoute)).
- Conexão com BD e start do servidor.

## config de logica backend

[x] Formulario de registro
    - [x] Validação de email e senha inseridos pelo user
    - [x] Validar se cadastro já existe no BD
    - [x] Salvar no banco de dados, efetuar cadastro

[] Formulario de login/session
    - [x] Verificar se user já tem cadastro
    - [x] iniciar sessão caso tenha cadastro
    - [x] permitir encerrar sessão
    - [x] Mostrar btn sair e entrar baseado na sessão
    - [] permitir acesso a rota 'index.ejs' apenas se session estver ativa


    Criação view 404.ejs
    alterado nome indexController para loginController
    - alteraçaod e nomenclatura index, para login em loginController, pois é relacionado ao form de register e login
    criacao view index.ejs
# expectativa de termino

- 10hrs