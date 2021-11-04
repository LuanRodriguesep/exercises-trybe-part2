# exercicios dia 22.1

##1
No Docker Hub , utilizando a caixa de busca ( "Search for great content" ) , busque pela imagem da Distribuição Linux Debian ;



##2
Uma vez que encontrar a imagem oficial , acesse-a (clicando em seu card) e verifique na página de detalhes, se existe algum comando para baixarmos a imagem localmente sem ter que criar um container para isso ;

##3
Baixe a imagem utilizando a tag : stable-slim , que é uma versão reduzida da distribuição;
```
docker container run debian stable-slim
```

##4
Após baixar a imagem para seu computador local, crie e execute um container no modo interativo utilizando essa imagem como referência (não esqueça referenciar a tag ) ;
```
docker run -it debian:stable-slim
```

##5
No terminal, você deve conseguir rodar o comando cat /etc/*-release , que vai retornar os dados da distribuição Debian que está sendo rodada dentro do container ;
```
root@702b42130227:/# cat /etc/*-release               
PRETTY_NAME="Debian GNU/Linux 11 (bullseye)"
NAME="Debian GNU/Linux"
VERSION_ID="11"
VERSION="11 (bullseye)"
VERSION_CODENAME=bullseye
ID=debian
HOME_URL="https://www.debian.org/"
SUPPORT_URL="https://www.debian.org/support"
BUG_REPORT_URL="https://bugs.debian.org/"
root@702b42130227:/# 

```

##6
Encerre o terminal ;

```
exit
```
##7
Verifique na sua lista de containers , qual o container é referente ao exercício que acabou de praticar;
```
docker container ps -l
```

##8
Inicie o mesmo container novamente , sem criar outro. Valide se ele está ativo na lista de containers;
```
docker container ps -a
```

##9
Retome o container que foi criado anteriormente nesse exercício ;
```
docker container start 702b42130227
```

##10
Rode o comando cat /etc/debian_version que deve retornar a versão atual do sistema do container ;
```
docker run -it debian:stable-slim
root@f286434ff3f7:/# cat /etc/debian_version
11.1
```

##11
Encerre o terminal ;
```
exit
```

##12
Remova somente o container criado para esse exercício ;
(Bônus) Crie e rode de modo interativo em modo 'Cleanup' , a imagem andrius/ascii-patrol ;
```
docker container rm -f 702b42130227
```

##13
(Bônus) Encerre o container utilizando os botões [ ctrl ] + [ c ].