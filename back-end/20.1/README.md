# Exercicios 20.1

**1. Escreva uma query que exiba o maior salário da tabela.**

**Resposta:**

``` SELECT MAX(SALARY) FROM hr.employees; ```

**2. Escreva uma query que exiba a diferença entre o maior e o menor salário.**

**Resposta:**

``` 
SELECT  MAX(SALARY) - MIN(SALARY) FROM hr.employees;
```

**3. Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando pela média salarial em ordem decrescente.**

**Resposta:**

```
  SELECT job_id, AVG(SALARY) AS 'avg_salary'
  FROM hr.employees
  GROUP BY job_id
  order by 'avg_salary' DESC;
```

**4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.**

**Resposta:**

```
  SELECT SUM(SALARY) AS `total`
  FROM hr.employees;
```

**5. Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.**

**Resposta:**

```
  SELECT MAX(SALARY), MIN(SALARY), SUM(SALARY), ROUND(AVG(SALARY) ,2)
  FROM hr.employees;
```

**6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras ( IT_PROG ).**

**Respostas:***

```
  SELECT JOB_ID, COUNT(*)
  FROM hr.employees
  WHERE JOB_ID = "IT_PROG";
```

**7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão ( JOB_ID ).**

**Resposta:**

```
  SELECT JOB_ID, SUM(SALARY)
  FROM hr.employees
  GROUP BY JOB_ID;
```

**8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras ( IT_PROG ).**

**Resposta:**

```
  SELECT JOB_ID, COUNT(*), SUM(SALARY)
  FROM hr.employees
  WHERE JOB_ID = "IT_PROG";
```

**9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras ( IT_PROG ).**

**Resposta:**

```
  SELECT JOB_ID, AVG(SALARY) AS 'avg_salary'
  FROM hr.employees
  WHERE job_id <> 'IT_PROG'
  GROUP BY job_id
  ORDER BY 'avg_salary' DESC;
```