import React from "react";
import { T1, T2, T3, Pa, Ta, Col, Row, Art, Ref, Src, Sources } from "../components/ArticleComponents";


export default function Todo() {


    return <Art artId="jdkReleases">
        <T1>Todo</T1>
        <Pa>In here TODOs for this website are listed.</Pa>
        <T2>Articles to write</T2>
        <ul>
            <li>Architecture i Design
                <ul>
                    <li>Real life examples of SOLID pattern</li>
                    <li>How do you partition a database?</li>
                    <li>CQRS</li>
                    <li>Saga pattern</li>
                    <li>About orchestration vs choreography</li>
                    <li>Data should be normalised or denormalized?</li>
                    <li>How to choose a data base?</li>
                    <li>Design patterns</li>
                    <li>SOLID</li>
                    <li>Inheritance vs Composition - when to chose?</li>
                    <li>Exactly once guarantee in Kafka, how?</li>
                    <li>How to extract a microservice from the monolith?</li>
                </ul>
            </li>
            <li>Java
                <ul>
                    <li>How does garbage collector work?</li>
                    <li>How to profile applications in java?</li>
                    <li>Who does executor service work?</li>
                    <li>Who does executor service work? Why do we get futures back?</li>
                    <li>What are transaction scopes?</li>
                    <li>How to dynamically create objects in Hibernate?</li>
                    <li>Levels of cachingin JPA?</li>
                    <li>Lifecycle of JPA object</li>
                    <li>Give an example of AOP</li>
                    <li>Hash map, how it works? and collisions?</li>
                    <li>All Java collections (with Big O notation - average and worst case)</li>
                    <li>What is wrong with checked exceptions?</li>
                    <li>About all JDK releses from version 8</li>
                    <li>Article about java records. When to use them?</li>
                    <li>Sealed classes in java</li>
                </ul>
            </li>
        </ul>
        <T2>Fixes</T2>
        <ul>
            <li>Menu items colors</li>
            <li>While moving one article to another, I get: <code>To locate the bad setState() call inside `Sources`, follow the stack trace as described in...</code></li>
        </ul>
        <T2>Improvements</T2>
        <ul>
            <li>Test if page renders on specific routes</li>
            <li>Add author section to the articles</li>
            <li>Fix orthography errors</li>
            <li>Better font for the logo</li>
            <li>Do this in polish?</li>
            <li>Better design for mobile phones</li>
            <li>Make pages register themselves</li>
            <li>Public this on the internet</li>
            <li>Make page searchable by SEO</li>
            <li>Make home page</li>
            <li>Make about page</li>
            <li>Improve article layout (add category, date, and numbers to chapters)</li>
            <li>Add dynamic content table for articles</li>
        </ul>

        <T2>Done</T2>

        To help me fell progress:
        <ul>

            <li>Able to create tree icons from svg files.</li>
            <li>Fix scrolling on SM with drawer open.</li>
            <li>Better icon added</li>
            <li>Ref is not displaying.</li>
            <li>Add mechanism for references to sources</li>
        </ul>

    </Art>

}