const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const caixaOpcoes = document.querySelector(".caixa-opcoes");
const repetirBtn = document.getElementById("repetir-btn");
const novoBtn = document.getElementById("novo-btn");


const casos = [
    {
        nome: "Caso 1",
        perguntas: [
            {
                enunciado: "Você é um detetive e foi chamado para investigar uma cena de crime. Ao chegar, você vê um corpo no chão e sinais de luta. Qual é a primeira coisa que você faz?",
                alternativas: [
                    { texto: "Examinar o corpo em busca de pistas.", proximaPergunta: 1 },
                    { texto: "Procurar testemunhas nos arredores.", proximaPergunta: 2 }
                ]
            },
            {
                enunciado: "Você encontrou uma carta de baralho ao lado do corpo. O que você faz em seguida?",
                alternativas: [
                    { texto: "Enviar a carta para análise forense.", proximaPergunta: 3 },
                    { texto: "Procurar por câmeras de segurança nas redondezas.", proximaPergunta: 4 }
                ]
            },
            {
                enunciado: "Uma testemunha disse ter visto uma pessoa correndo para fora do local. Qual é o seu próximo passo?",
                alternativas: [
                    { texto: "Investigar as redondezas em busca de mais testemunhas.", proximaPergunta: 5 },
                    { texto: "Seguir a pista e procurar por câmeras de segurança.", proximaPergunta: 4 }
                ]
            },
            {
                enunciado: "A análise revela que a mancha de sangue na carta pertence à vítima e tem uma inscrição. O que você faz agora?",
                alternativas: [
                    { texto: "Seguir a pista da inscrição na carta de baralho.", proximaPergunta: 6 },
                    { texto: "Investigar o clube de pôquer onde a vítima jogava frequentemente.", proximaPergunta: 7 }
                ]
            },
            {
                enunciado: "Você encontrou uma câmera que pode ter capturado o suspeito fugindo. O que você faz?",
                alternativas: [
                    { texto: "Analisar as imagens das câmeras de segurança.", proximaPergunta: 8 },
                    { texto: "Rastrear o carro visto nas câmeras de segurança.", proximaPergunta: 9 }
                ]
            },
            {
                enunciado: "Você encontrou mais testemunhas que disseram ter visto uma pessoa correndo para um carro. O que você faz?",
                alternativas: [
                    { texto: "Rastrear o carro.", proximaPergunta: 9 },
                    { texto: "Analisar as imagens das câmeras de segurança.", proximaPergunta: 8 }
                ]
            },
            {
                enunciado: "A inscrição leva você a um clube de pôquer. O que você faz?",
                alternativas: [
                    { texto: "Interrogar os jogadores sobre a vítima.", proximaPergunta: 10 },
                    { texto: "Investigar o histórico da vítima no clube.", proximaPergunta: 11 }
                ]
            },
            {
                enunciado: "As imagens mostram uma figura encapuzada correndo para um carro. O que você faz?",
                alternativas: [
                    { texto: "Rastrear o carro até uma casa abandonada.", proximaPergunta: 12 },
                    { texto: "Procurar mais câmeras que possam ter capturado a placa do carro.", proximaPergunta: 9 }
                ]
            },
            {
                enunciado: "Você rastreia o carro até uma casa abandonada. O que você faz?",
                alternativas: [
                    { texto: "Invadir a casa e procurar pelo suspeito.", proximaPergunta: 13 },
                    { texto: "Montar uma vigilância para observar quem entra e sai da casa.", proximaPergunta: 14 }
                ]
            },
            {
                enunciado: "Os jogadores lembram que a vítima teve uma discussão acalorada com alguém na noite anterior. O que você faz?",
                alternativas: [
                    { texto: "Identificar e interrogar a pessoa com quem a vítima discutiu.", proximaPergunta: 15 },
                    { texto: "Verificar se há câmeras no clube que registraram a discussão.", proximaPergunta: 8 }
                ]
            },
            {
                enunciado: "Você investiga o histórico da vítima no clube e descobre que ela estava devendo dinheiro. O que você faz?",
                alternativas: [
                    { texto: "Investigar os credores da vítima.", proximaPergunta: 16 },
                    { texto: "Procurar mais informações sobre a vida pessoal da vítima.", proximaPergunta: 17 }
                ]
            }
        ],
        conclusoes: [
            "Você resolveu o caso! O suspeito foi preso e a justiça foi feita.",
            "Você encontrou o culpado, mas ele conseguiu escapar.",
            "Você seguiu a pista errada e o caso ainda está em aberto.",
            "Você conseguiu novas pistas que podem levar à solução do caso em breve."
        ]
    },
    {
        nome: "Caso 2",
        perguntas: [
            {
                enunciado: "Uma joia valiosa foi roubada de um museu durante uma exposição. Qual é a primeira coisa que você faz?",
                alternativas: [
                    { texto: "Examinar a cena em busca de pistas.", proximaPergunta: 1 },
                    { texto: "Entrevistar os seguranças do museu.", proximaPergunta: 2 }
                ]
            },
            {
                enunciado: "Você encontrou uma impressão digital no pedestal onde a joia estava. O que você faz em seguida?",
                alternativas: [
                    { texto: "Enviar a impressão para análise forense.", proximaPergunta: 3 },
                    { texto: "Procurar por câmeras de segurança nas redondezas.", proximaPergunta: 4 }
                ]
            },
            {
                enunciado: "Um dos seguranças menciona que viu uma pessoa suspeita perto do museu. Qual é o seu próximo passo?",
                alternativas: [
                    { texto: "Investigar a área em busca de testemunhas.", proximaPergunta: 5 },
                    { texto: "Seguir a pista e procurar por câmeras de segurança.", proximaPergunta: 4 }
                ]
            },
                    {
                        enunciado: "Você encontra informações sobre uma reunião da gangue em um local específico. O que você faz?",
                        alternativas: [
                            { texto: "Vigiar o local da reunião para obter mais informações.", proximaPergunta: 9 },
                            { texto: "Ir diretamente ao local e confrontar os membros da gangue.", proximaPergunta: 10 }
                        ]
                    },
                    {
                        enunciado: "Você descobre que a gangue planeja um ataque em breve. O que você faz?",
                        alternativas: [
                            { texto: "Informar as autoridades para prevenir o ataque.", proximaPergunta: 11 },
                            { texto: "Tentar resgatar a estudante antes que algo aconteça.", proximaPergunta: 12 }
                        ]
                    },
                    {
                        enunciado: "Você monta uma operação para resgatar a estudante. O que você faz?",
                        alternativas: [
                            { texto: "Invadir o local onde a estudante está mantida.", proximaPergunta: 13 },
                            { texto: "Montar uma equipe de resgate e planejar a abordagem.", proximaPergunta: 14 }
                        ]
                    },
                    {
                        enunciado: "Você descobre que a estudante foi levada para um esconderijo em um prédio abandonado. O que você faz?",
                        alternativas: [
                            { texto: "Realizar uma operação de resgate no prédio.", proximaPergunta: 15 },
                            { texto: "Montar uma vigilância no prédio para obter mais evidências.", proximaPergunta: 16 }
                        ]
                    },
                    {
                        enunciado: "A operação de resgate é bem-sucedida e a estudante é encontrada. O que você faz agora?",
                        alternativas: [
                            { texto: "Interrogar a estudante para obter mais informações sobre a gangue.", proximaPergunta: 17 },
                            { texto: "Desmantelar a gangue com as evidências obtidas.", proximaPergunta: 18 }
                        ]
                    },
                    {
                        enunciado: "Você usa as informações da estudante para capturar os membros da gangue. Qual é o resultado?",
                        alternativas: [
                            { texto: "Você desmantela a gangue e garante a segurança da comunidade.", proximaPergunta: 19 },
                            { texto: "Você captura alguns membros, mas a gangue continua ativa.", proximaPergunta: 20 }
                        ]
                    }
                ],
                conclusoes: [
                    "Você resgatou a estudante e desmantelou a gangue, garantindo a segurança da comunidade.",
                    "Você encontrou a estudante, mas a gangue ainda continua a operar.",
                    "O caso continua aberto, com a gangue ainda sendo uma ameaça.",
                    "Novas evidências surgiram que podem levar a uma solução futura."
                ]
            },
            {
                nome: "Caso 3",
                perguntas: [
                    {
                        enunciado: "Um empresário foi encontrado morto em seu escritório. Qual é a primeira coisa que você faz?",
                        alternativas: [
                            { texto: "Examinar a cena do crime em busca de pistas.", proximaPergunta: 1 },
                            { texto: "Entrevistar os funcionários e associados próximos ao empresário.", proximaPergunta: 2 }
                        ]
                    },
                    {
                        enunciado: "Você descobre que o empresário estava envolvido em um grande negócio imobiliário. O que você faz em seguida?",
                        alternativas: [
                            { texto: "Investigar o negócio imobiliário e seus parceiros.", proximaPergunta: 3 },
                            { texto: "Verificar registros financeiros e correspondências do empresário.", proximaPergunta: 4 }
                        ]
                    },
                    {
                        enunciado: "Você encontra uma lista de contatos importantes no escritório do empresário. O que você faz agora?",
                        alternativas: [
                            { texto: "Entrevistar os contatos listados para obter mais informações.", proximaPergunta: 5 },
                            { texto: "Verificar se algum dos contatos tem um motivo para matar o empresário.", proximaPergunta: 6 }
                        ]
                    },
                    {
                        enunciado: "Um dos contatos menciona uma disputa recente com o empresário. O que você faz?",
                        alternativas: [
                            { texto: "Investigar a disputa para encontrar possíveis suspeitos.", proximaPergunta: 7 },
                            { texto: "Buscar evidências que liguem a disputa ao motivo do crime.", proximaPergunta: 8 }
                        ]
                    },
                    {
                        enunciado: "Você encontra documentos que mostram uma fraude envolvendo o negócio imobiliário. Qual é o próximo passo?",
                        alternativas: [
                            { texto: "Investigar os envolvidos na fraude.", proximaPergunta: 9 },
                            { texto: "Verificar se a fraude está relacionada ao assassinato.", proximaPergunta: 10 }
                        ]
                    },
                    {
                        enunciado: "Você descobre que a fraude beneficiava um grupo de investidores. O que você faz?",
                        alternativas: [
                            { texto: "Interrogar os investidores sobre o caso.", proximaPergunta: 11 },
                            { texto: "Investigar as finanças dos investidores para descobrir motivações.", proximaPergunta: 12 }
                        ]
                    },
                    {
                        enunciado: "Os investidores fornecem informações sobre uma pessoa que estava ameaçando o empresário. O que você faz agora?",
                        alternativas: [
                            { texto: "Localizar e interrogar a pessoa mencionada.", proximaPergunta: 13 },
                            { texto: "Investigar mais a fundo as ameaças feitas ao empresário.", proximaPergunta: 14 }
                        ]
                    },
                    {
                        enunciado: "Você descobre que a pessoa ameaçadora tem um histórico de violência. Qual é o próximo passo?",
                        alternativas: [
                            { texto: "Recolher provas contra a pessoa ameaçadora.", proximaPergunta: 15 },
                            { texto: "Monitorar a pessoa ameaçadora para evitar mais crimes.", proximaPergunta: 16 }
                        ]
                    },
                    {
                        enunciado: "Você encontra provas suficientes contra a pessoa ameaçadora. O que você faz?",
                        alternativas: [
                            { texto: "Prender a pessoa e apresentar as evidências.", proximaPergunta: 17 },
                            { texto: "Continuar a investigação para confirmar a relação com o crime.", proximaPergunta: 18 }
                        ]
                    },
                    {
                        enunciado: "A pessoa ameaçadora é presa e confessa o crime. O que você faz agora?",
                        alternativas: [
                            { texto: "Concluir o caso e garantir que a justiça seja feita.", proximaPergunta: 19 },
                            { texto: "Investigar se há outros envolvidos no assassinato.", proximaPergunta: 20 }
                        ]
                    },
                    {
                        enunciado: "Você encontra outros envolvidos no assassinato. O que você faz?",
                        alternativas: [
                            { texto: "Prender todos os envolvidos e resolver o caso.", proximaPergunta: 21 },
                            { texto: "Continuar a investigação para desmantelar toda a operação criminosa.", proximaPergunta: 22 }
                        ]
                    }
                ],
                conclusoes: [
                    "Você resolveu o caso e todos os envolvidos foram responsabilizados pelo assassinato.",
                    "Você encontrou o principal culpado, mas há outros envolvidos ainda à solta.",
                    "O caso está em aberto, com novas investigações necessárias.",
                    "Você conseguiu novas evidências que podem levar a uma resolução futura."
                ]
            },
            {
                nome: "Caso 4",
                perguntas: [
                    {
                        enunciado: "Um importante executivo foi encontrado morto em sua mansão. Qual é o primeiro passo da investigação?",
                        alternativas: [
                            { texto: "Examinar a cena do crime para procurar pistas.", proximaPergunta: 1 },
                            { texto: "Entrevistar a família e os empregados da mansão.", proximaPergunta: 2 }
                        ]
                    },
                    {
                        enunciado: "Você encontra uma nota com uma mensagem ameaçadora na cena do crime. O que faz?",
                        alternativas: [
                            { texto: "Analisar a nota para descobrir possíveis suspeitos.", proximaPergunta: 3 },
                            { texto: "Verificar se há registros de câmeras de segurança na mansão.", proximaPergunta: 4 }
                        ]
                    },
                    {
                        enunciado: "A nota menciona um nome e uma data. O que você faz em seguida?",
                        alternativas: [
                            { texto: "Investigar o nome mencionado na nota.", proximaPergunta: 5 },
                            { texto: "Confrontar os membros da família sobre a data mencionada.", proximaPergunta: 6 }
                        ]
                    },
                    {
                        enunciado: "Você descobre que o nome mencionado na nota é de um ex-colaborador do executivo. O que faz agora?",
                        alternativas: [
                            { texto: "Localizar e interrogar o ex-colaborador.", proximaPergunta: 7 },
                            { texto: "Verificar a relação entre o ex-colaborador e o executivo.", proximaPergunta: 8 }
                        ]
                    },
                    {
                        enunciado: "O ex-colaborador nega qualquer envolvimento, mas você encontra evidências de que ele esteve na mansão. Qual é o próximo passo?",
                        alternativas: [
                            { texto: "Investigar a ligação entre as evidências e o assassinato.", proximaPergunta: 9 },
                            { texto: "Procurar mais testemunhas que possam corroborar a presença do ex-colaborador.", proximaPergunta: 10 }
                        ]
                    },
                    {
                        enunciado: "Você encontra uma testemunha que afirma ter visto o ex-colaborador na noite do crime. O que você faz?",
                        alternativas: [
                            { texto: "Recolher mais informações da testemunha.", proximaPergunta: 11 },
                            { texto: "Confrontar o ex-colaborador com a nova evidência.", proximaPergunta: 12 }
                        ]
                    }
                ],
                conclusoes: [
                    "Você prendeu o ex-colaborador, que confessou o crime e revelou uma trama complexa.",
                    "O ex-colaborador foi liberado devido à falta de provas, e o caso continua em aberto.",
                    "Você descobriu uma nova pista que pode levar a uma nova direção na investigação.",
                    "O caso está resolvido, mas outras pessoas foram implicadas no esquema."
                ]
            },
            {
                nome: "Caso 5",
                perguntas: [
                    {
                        enunciado: "Um famoso artista foi encontrado morto em sua galeria. Qual é o primeiro passo da investigação?",
                        alternativas: [
                            { texto: "Examinar a galeria em busca de evidências.", proximaPergunta: 1 },
                            { texto: "Falar com os funcionários e visitantes presentes.", proximaPergunta: 2 }
                        ]
                    },
                    {
                        enunciado: "Você encontra um quadro recente do artista com uma pintura estranha. O que faz?",
                        alternativas: [
                            { texto: "Investigar a origem e o significado da pintura.", proximaPergunta: 3 },
                            { texto: "Entrevistar as pessoas que estavam na galeria sobre o quadro.", proximaPergunta: 4 }
                        ]
                    },
                    {
                        enunciado: "Uma testemunha menciona que viu uma pessoa suspeita se aproximando do quadro. Qual é o próximo passo?",
                        alternativas: [
                            { texto: "Recolher mais detalhes sobre a pessoa suspeita.", proximaPergunta: 5 },
                            { texto: "Verificar se há registros de câmeras de segurança na galeria.", proximaPergunta: 6 }
                        ]
                    },
                    {
                        enunciado: "Você descobre que a pessoa suspeita é um colecionador rival. O que você faz agora?",
                        alternativas: [
                            { texto: "Interrogar o colecionador rival sobre a morte do artista.", proximaPergunta: 7 },
                            { texto: "Investigar a relação entre o colecionador e o artista.", proximaPergunta: 8 }
                        ]
                    },
                    {
                        enunciado: "O colecionador afirma que tinha um desentendimento com o artista. O que você faz em seguida?",
                        alternativas: [
                            { texto: "Investigar o desentendimento e verificar se há motivos para o crime.", proximaPergunta: 9 },
                            { texto: "Procurar outras possíveis testemunhas do desentendimento.", proximaPergunta: 10 }
                        ]
                    },
                    {
                        enunciado: "Você encontra uma evidência de que o colecionador tinha acesso à galeria na noite do crime. O que faz agora?",
                        alternativas: [
                            { texto: "Confrontar o colecionador com a nova evidência.", proximaPergunta: 11 },
                            { texto: "Buscar mais provas que liguem o colecionador ao crime.", proximaPergunta: 12 }
                        ]
                    }
                ],
                conclusoes: [
                    "Você conseguiu prender o colecionador, que confessou o crime motivado por inveja.",
                    "O colecionador foi liberado por falta de provas suficientes, e o caso continua.",
                    "A investigação revelou uma conspiração maior envolvendo vários suspeitos.",
                    "Você conseguiu novas pistas que podem levar a uma solução futura do caso."
                ]
            }            
        ];
        
        let casoAtual = Math.floor(Math.random() * casos.length);
        let atual = 0;
        let perguntaAtual;
        let caminhoPercorrido = [];
        
        function mostraPergunta() {
            if (atual >= casos[casoAtual].perguntas.length) {
                mostraResultado();
                return;
            }
            perguntaAtual = casos[casoAtual].perguntas[atual];
            caixaPerguntas.textContent = perguntaAtual.enunciado;
            caixaAlternativas.textContent = "";
            mostraAlternativas();
        }
        
        function mostraAlternativas() {
            for (const alternativa of perguntaAtual.alternativas) {
                const botaoAlternativas = document.createElement("button");
                botaoAlternativas.textContent = alternativa.texto;
                botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
                caixaAlternativas.appendChild(botaoAlternativas);
            }
        }
        
        function respostaSelecionada(opcaoSelecionada) {
            caminhoPercorrido.push(opcaoSelecionada.proximaPergunta);
            atual = opcaoSelecionada.proximaPergunta;
            mostraPergunta();
        }
        
        function mostraResultado() {
            caixaPerguntas.textContent = "Conclusão do caso...";
            const indiceConclusao = caminhoPercorrido.reduce((acc, curr) => acc + curr, 0) % casos[casoAtual].conclusoes.length;
            textoResultado.textContent = casos[casoAtual].conclusoes[indiceConclusao];
            caixaAlternativas.textContent = "";
            caixaOpcoes.style.display = "block";
        }

        function selecionaNovoCaso() {
            let novoCaso;
            do {
                novoCaso = Math.floor(Math.random() * casos.length);
            } while (novoCaso === casoAtual); 
            casoAtual = novoCaso;
        }
        
        repetirBtn.addEventListener("click", () => {
            caminhoPercorrido = [];
            atual = 0;
            caixaOpcoes.style.display = "none";
            textoResultado.textContent = "";
            mostraPergunta();
        });
        
        novoBtn.addEventListener("click", () => {
            selecionaNovoCaso();
            caminhoPercorrido = [];
            atual = 0;
            caixaOpcoes.style.display = "none";
            textoResultado.textContent = "";
            mostraPergunta();
        });
        
        mostraPergunta();
        