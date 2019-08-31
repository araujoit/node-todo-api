
# Node-API

Implementação de API para controle de Todo-List


## Http Resources

Resources HTTP utilizados para comunicação com base de dados.


## ***I. /tasks***
* ### GET		:	Busca todos os itens
	Exemplo:
	```javascript
	{
	    status:
	    [
	       "pending"
	    ],
		_id:  "5d6ae8a71d7a9e3608f42db3",
		name:  "Fazer tal coisa hoje.",
		Created_date:  "2019-08-31T21:37:43.092Z",
		__v:  0
   },
   {
	    status:
	    [
	       "pending"
	    ],
		_id:  "5d6ae8ea0336a136c04eb960",
		name:  "Fazer aquela outra coisa hoje.",
		Created_date:  "2019-08-31T21:37:43.092Z",
		__v:  0
   }
	```
* ### POST	:	Insere um item
	```javascript
	{
		name: "Fazer tal coisa hoje"
	}
	```


## ***II. /tasks:{{_id}}***


* ### GET			:	Busca item específico
```javascript
	{
		status:
	    [
	       "pending"
	    ],
		_id:  "5d6ae8a71d7a9e3608f42db3",
		name:  "Fazer tal coisa hoje.",
		Created_date:  "2019-08-31T21:37:43.092Z",
		__v:  0
   }
```

----

* ### PUT			:	Atualiza item
> Content-Type: **x-www-form-urlencoded**

| Campo | Valor |
|--|--|
| name 	| Fazer mais uma outra coisa 	|
| status| ongoing						|


* ### DELETE	: 	Remove item



## Future Releases
* Adição de camada de segurança
* Adição de VIEW



## Referências

https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd


> Escrito com [StackEdit](https://stackedit.io/).