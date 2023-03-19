# Software Architecture

High level structure and organisation of software.

## Rest (Representation state transfer)

There are a few constraints that Restful apis must comply to be considered restful.

1. **Client Server architecture:** Client and server are independent and separate of each other and evolve separately.
2. **Stateless:** All information necessary to perform the operation should be contained in a single request, i.e. the protocol is stateless, which means the server has no information about the state of the client. Some violations would be:
    1. Say there is CRUD operation, the server mustn't know whether the user is logged in or not (to reject requests). Instead, the user should send a token, which the serve can validate against another API.
3. **Cacheability:** Responses should be __explicitly__ cacheable (or not)
4. **Uniform interface:**
    1. Identification of resources: Standard URI (universal resource i)
    2. Manipulation of the resources through the URI: basically using http methods.
    3. Self-descriptive messages: The response should tell me what  type of request was made (MIME for response) and the status of the request (http status code)
    4. HATEOAS: decouple the application from the uri structure.

Resources in __plural__, and __http methods__ tell what happens:

| Http method + URI | Resulting Action  |
|-------------------|-------------------|
| GET    /users     | Get all users     |
| GET    /users/1   | Get specific user |
| POST   /users     | Creates an user   |
| PUT    /users/1   | Updates user      |
| DELETE /users/1   | Deletes user      |
