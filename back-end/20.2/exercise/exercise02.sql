SELECT mov.title, bx.domestic_sales, bx.international_sales
FROM Pixar.Movies AS mov
INNER JOIN Pixar.BoxOffice AS bx
ON bx.movie_id = mov.id
WHERE bx.international_sales > bx.domestic_sales;