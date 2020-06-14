# RESUMO DE USO - GIT

## git config 

```bash
git config --global user.name "Adao Oliveira"
git config --global user.email "adaum79@gmail.com"
git config --global core.editor subl
git config --global alias.s status
git config --list
```


```bash
git init
```



```bash
git status
git status -s
git status --short
```


```bash
git add <arquivo>
```


```bash
git commit -m "Comentário a ser inserido"
git commit -am "Comentário - Novo commit"
git commit --amend
```


## git log
```bash
git log
git log -2  # mostra apenas os dois ultimos commits
git log -p | --patch
git log --stat
git log --shortstat
git log --decorate
git log -S <nome_funcao>
git log --pretty=oneline|short|full|fuller
git log --graph
git log --since | --after | --until | --before
git shortlog
git show <hash>
git log --name-only
git log --name-status
```


## git diff
```bash
git diff
git diff --staged
git diff --name-only
```



## git rm
```bash
git rm
git rm -f
git rm --cached <arquivo>
```


## git branch

Listar todos o branchs:
```bash
git branch
```

Listar todos o branchs, _exibindo o último `commit`_:
```bash
git branch -v
```

Listar todos o branchs já "mergeados" com o atual:
```bash
git branch --merged
```

Listar branchs __NÃO__ "mergeados":
```bash
git branch --no-merged
```

Remover um branch que já foi "mergeado":
```bash
git branch -d <nome_branch>
```

Remover um branch que ainda __NÃO__ foi "mergeado":
```bash
git branch -D <nome_branch>
```

## git rebase
Consiste em pegar todas as mudanças _comitadas_ em um branch
e reaplicá-las em outro branch, a partir de um `commit` comum. 
A sequência de um `rebase` é:

1) Buscar um ancestral comum entre 2 branchs;
2) Pegar as diferenças introduzidas por cada `commit` do branch atual
e gravar em arquivos temporários;
3) Resetaro branch atual para o mesmo ponto do branch que se deseja
fazer o `rebase` e depois aplicar as mudanças, uma a uma.

Como fazer o `rebase`?

__Passo 1)__ Ir para o branch em edição e executar o `rebase`:
```bash
git checkout experiment
git rebase master
```

__Passo 2)__ Retorna para o branch master e executa `merge`:
```bash
git checkout master
git merge experiment
```



> __Vantagem do `rebase` em relação ao `merge`:__
> * Apesar do resultado final ser o mesmo snapshot, com o `rebase` o 
> histórico fica mais limpo. No resultado final, o histórico fica
> parecendo com um trabalho em série, mesmo que tenha sido feito em 
> paralelo.
```bash
rebase
```

## git merge
```bash
merge
```



## git remote
Adicionar um repositório remoto:
```bash
git remote add <nome> <url>
```
> O nome padrão de um repositório remoto é `origin`.

Listar repositórios remotos:
```bash
git remote -v
```

Inspecionar um repositório remoto:
```bash
git remote show <nome-repositório>
```

Renomear um repositório remoto:
```bash
git remote rename <nome-atual> <novo-nome>
```

Remover um repositório remoto:
```bash
git remote remove <nome>
```








## git fetch / git pull
> Observação: `git fetch` apenas faz o download das atualizações.
> Não é feita nenhuma modificação (_merge_) entre os dados locais e
> os dados baixados.

Busca do repositório remoto toda informação que foi adicionada após
execução de um `git clone` ou `git fetch`:
```bash
git fetch origin
```

Executa automaticamente `fetch` e `merge` de um branch remoto
 com o branch local:
```bash
git pull <nome> [branch]
```


## git push
Envia dados para um repositório remoto:
```bash
git push <nome> [branch]
```

Removendo um branch remoto:
```bash
git push origin --delete <branch>
```


## git stash
```bash
 git stash
 git stash apply
 git stash list
 git stash clear
```


## git checkout

Retorna arquivo à última versão do commit (desfaz modificações)
```bash
git checkout -- <arquivo>
```

Cria um novo branch e já alterna para o mesmo 
```bash
git checkout -b <nome_branch>
```



## git reset

Ignora modificações de arquivos (após add, antes do commit) - retorna
 para _unstage_
```bash
git reset HEAD <arquivo>
```

Retorna para _unstaged_
```bash
git reset --soft <hash-anterior>
```

asfdfsd
```bash
git reset --mixed <hash-anterior>
```

adsfsdafsdaf
```bash
git reset --hard <hash-anterior>
```
