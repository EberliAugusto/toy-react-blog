import React from "react";
import { T1, T2, T3, Pa, Ta, Col, Row, Art, Ref, Src, Sources } from "../../components/ArticleComponents";

export default function Rest() {
    return (
        <Art artId="rest">
            <T1>Rest (Representation state transfer)</T1>
            <Pa>
                There are a few constraints that Restful
                apis must comply to be considered restful.
            </Pa>
            <T2>Client Server architecture</T2>
            <Pa>
                Client and server are independent and separate of each
                other and evolve separately.
            </Pa>
            <T2>Stateless</T2>
            <Pa>All information necessary to perform the operation should be contained in a single request, i.e. the protocol is
                stateless, which means the server has no information about the state of the client.</Pa>
            <T3>Example violations</T3>
            <Pa>Say there is CRUD operation, the server mustn't know whether the user is logged in or not (to reject requests).
                Instead, the user should send a token, which the serve can validate against another API. </Pa>
            <T2>Cacheability</T2>
            <Pa>Responses should be <b>explicitly</b> cacheable (or not)</Pa>

            <T2>Uniform interface</T2>

            <ul>
                <li><b>Identification of resources: </b>
                    Standard URI (universal resource id)
                </li>
                <li><b>Manipulation of the resources through the URI: </b>
                    basically using http methods.
                </li>
                <li><b>Self-descriptive messages: </b>
                    The response should tell me what  type of
                    request was made (MIME for response) and the status of the request (http status code)
                </li>
                <li><b>HATEOAS: </b>
                    decouple the application from the uri structure.
                </li>
            </ul>

            <Pa>Http is natural candidate. Resources in <b>plural</b>, and <b>http methods</b> tell what happens.</Pa>
            <Pa><Ref code="abc" /></Pa>
            <Ta>
                <Col><b>Http method + URI</b></Col>
                <Col><b>Resulting Action</b></Col>
                <Row>
                    <Col>GET    /users</Col>
                    <Col>Get all users</Col>
                </Row>
                <Row>
                    <Col>GET    /users/1</Col>
                    <Col>Get specific users</Col>
                </Row>
                <Row>
                    <Col>POST   /users</Col>
                    <Col>Creates an user</Col>
                </Row>
                <Row>
                    <Col>PUT    /users/1</Col>
                    <Col>Updates user</Col>
                </Row>
                <Row>
                    <Col>DELETE /users/1</Col>
                    <Col>Deletes user</Col>
                </Row>
            </Ta>
            <Sources>
                <Src code="restfulapi" shortDesc="What is REST"
                    href="https://restfulapi.net/" />
            </Sources>
        </Art>
    )
}

