SELECT mov.title, bx.domestic_sales, bx.international_sales 
FROM Pixar.BoxOffice AS bx
INNER JOIN Pixar.Movies AS mov 
ON bx.movie_id = mov.id;
