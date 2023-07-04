Alunos: Daniel Gelich e João Vitor Lembeck

Ordem de execução:
* node generateKeys.js
* node encripta.js public_key.txt text.txt criptografado.txt
* node decripta.js private_key.txt criptografado.txt descriptografado.txt

—------------------------------------------------------------------------------------------------------------------------
* Planejamento e operação

O código foi separado por por funções diferentes, separadas em arquivos diferentes (generateKeys.js, decripta.js e encripta.js);
A função de criptografia faz a criptografia de caracter por caracter, utilizando a chave publica para realizar a operação, e então o arquivo de decriptografia utiliza a chave privada para descriptografar o arquivo.
—------------------------------------------------------------------------------------------------------------------------
* Teste

Os testes foram realizados com tentativas de execução de um arquivo especifico de texto, e salvando os resultados em arquivos de texto separados. O resultado esperado era o arquivo descriptografado ser igual ao arquivo original.
Os bugs mais encontrados foram na descriptografia dos arquivos, que nao retornava o mesmo texto do arquivo original. Porém o problema foi resolvido com uma simples alteração.
—------------------------------------------------------------------------------------------------------------------------
* Avalie o projeto

Foi aprendido como funciona uma criptografia RSA de forma mais prática, além de termos conhecendo novas funções do JavaScript que podem ser úteis em outras ocasiões, tanto no front-end quanto backend.
