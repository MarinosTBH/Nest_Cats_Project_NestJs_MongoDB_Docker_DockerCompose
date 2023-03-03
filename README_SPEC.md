<!-- The REST API we will build will have the following endpoints: -->
Endpoint 	HTTP Method 	Description
/menus 	POST 	Create a menu.
/menus 	GET 	Get the list of menus.
/menus/menu_id 	GET 	Retrieve data about a menu.
/menus/menu_id 	PUT 	Modify data about a menu.
/menus/menu_id 	DELETE 	Delete a menu.

Packages : 
    @nestjs/mongoose 
    mongoose