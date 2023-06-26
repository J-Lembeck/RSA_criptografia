Alunos: Daniel Gelich e João Vitor Lembeck

Ordem de execução:
* node generateKeys.js
* node encripta.js public_key.txt text.txt criptografado.txt
* node decripta.js private_key.txt criptografado.txt descriptografado.txt


Primeiro tópico: Planejamento e operação

Foram separados por funções diferentes, juntamente com arquivos diferentes com pastas diferentes para ter uma melhor organização.

Os problemas mais encontrados seria em relação a fazer os arquivos de criptografia funcionarem corretamente, na maioria das vezes eles traziam as informações criptografadas, porém com alguns erros que implicam na parte de descriptografar, que não consegue descriptografar corretamente !

Utilizamos JavaScript pois é a língua que os os dois integrantes entendem um pouco mais em relação às outras disponíveis.
—------------------------------------------------------------------------------------------------------------------------
Segundo tópico: Teste

Fizemos os testes através de tentativas de execução e alterações em algumas partes dos códigos para ver se iriam surtir o mesmo efeito ou resultado esperado pelo código.

Os bugs mais encontrados seria na parte de criptografar e descriptografar, que quando executamos a criptografia para depois fazer a descriptografia, os dados vinham com alguns erros de sintaxe na geração do mesmo.

A função de gerar uma chave privada e uma pública está funcionando e juntamente com os 2 arquivos que fazem a criptografia e a descriptografia. Não tivemos nem um problema que não conseguimos resolver.
—------------------------------------------------------------------------------------------------------------------------
Terceiro tópico: Avalie o projeto

Aprendemos como funciona e como podemos executar criptografia e descriptografia de arquivos contendo textos ou números em geral, outro ponto seria como e onde podemos aplicar esse conhecimento, pois querendo ou não, segurança é algo muito importante quando se trata de dados.

Diríamos que valeu a pena sim, pois segurança da informação é um assunto muito debatido e importante hoje em dia, principalmente tratando-se de dados virtualizados e informações importantes, que devem ser tratados cuidadosamente e seguramente independente do contexto situações do dia a dia.

Aprendemos que existem bibliotecas que ajudam a facilitar este trabalho, porém o objetivo da atividade não era utilizar nem uma biblioteca relacionada, então só analisamos como funcionavam para ter uma ideia melhor do assunto.
