
<h2 align="center">
:rocket: Desafio Módulo :rocket:
</h2>
<h2 align="center">
:computer: Aplicação de HTML, CSS, JavaScript :computer:
</h2>
<h4 align="center">
Nesse desafio você deve criar uma página de descrição do curso que deve ser chamada no lugar da modal quando o usuário clicar no card do curso.

Rota
A rota também será a /courses, porém o id do curso será passado via route params (ex.: /courses/id_do_curso). Dica: utilize o req.params para recuperar o id fornecido na rota.

```jsserver.get("/courses/:id", function(req, res) {
  const id = req.params.id;

  return res.send(`O id fornecido na rota é: ${id}`);
});

```
Informações
Layout padrão
Card do curso
Link que redireciona para a página do curso

---

Feito com :purple_heart: by Wesley Guerra :wave:
</h4>

<p align="center">
    <br/>
  <br/>
  <img src="https://media.giphy.com/media/kDB327RWF0Ls5akT2a/giphy.gif">
  <br/>
  <br/>
</p>
