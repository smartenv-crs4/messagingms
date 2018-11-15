[comment]: # 
For more info about the project, please visit the [Cagliari Port 2020 official website](http://cp2020.crs4.it)

Security & Authentication
-------------------------
All API endpoints use **HTTPS** protocol.

All API endpoints **require authentication**.



Thus, you MUST obtain an API token and use it in HTTP header, as in:

    Authentication: Bearer <API_TOKEN>

or appending a URL parameter as in:

    /apps?access_token=<API_TOKEN>

or appending in body request as in:

        {access_token=<API_TOKEN>}

***
