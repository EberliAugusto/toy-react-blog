import React from "react";
import { T1, T2, T3, Pa, Ta, Col, Row, Art, Ref, Src, Sources, Java } from "../../components/ArticleComponents";

export default function JdkRelases() {
    return (
        <Art artId="javaRecords">
            <T1>When and How: Records</T1>
            <Pa>
                Java records first came as Preview in JDK 14, with the intention of reducing boilerplate and mitigating developer errors 
                while creating POJOs (Plain Old Java Objects)
                {' '}<Ref code="jdk14-record-jep" />. In practice it did not accomplish what it aimed to do to the extent I would personally desire, since
                in many cases it is still not a good fit for usage, and doing things just like before turn out better for readability and quality.
                Here we will go over some use cases, and hopefully demonstrate why that is the case. Furthermore, we see to which types of problems records are most useful.
            </Pa>
            <T2>Using records</T2>
            <Pa>
                A basic record definition is concise:
            </Pa>
            <Java>{`
                record Abc(String name, String address, String phoneNumber) {}
                `}
            </Java>
            <Pa>
                Record instantiation uses traditional constructor syntax:
            </Pa>
            <Java>{`
                new SaleWithCustomerUuid(customerUuid, sale);
                `}
            </Java>
            <T2>Records use cases</T2>

            <Pa>
                Usage of it on the other hand, depends on what you are using it for. For example, say
                there is a method where you would like to sort a map of Sales by Customer, but not lose
                the key of map in the process.
                One could define a record like this:
            </Pa>
            <Java>{`
                record SaleWithCustomerUuid(UUID customerUuid, Sale sale) { }
                `}
            </Java>
            <Pa>
                Now the record could be used as the result of the method, for example:
            </Pa>
            <Java>{`
                List<SaleWithCustomerUuid> sortSalesForPresentation(Map<UUID,List<Sale>> salesByCustomer)
            `}
            </Java>

            <Pa> A very common pattern while writing production applications is the definition
                of DTOs (Data Transfer Objects), which usually contain a larger number of fields than just a
                few. In such case records become a little cumbersome:
            </Pa>
            <Java>
                {`
                new Sale(uuid, time, amount, totalPrice, deliveryMethod, .......... ); 
                `}
            </Java>
            <Pa>
                A common mistake in situations like the above is inverting field names, this is a direct result of readability issues, since
                one has to peek into the record definition to check in what order the parameters were supposed to be passed. This
                is often solved by applying the <Ref code="builder-pattern" noBrackets />, which decouples instantiation
                from the places in the code where instantition is needed, greatly increasing readability and reducing the probability of bugs being introduced.
            </Pa>
            <Pa>
                As you might have realised by now, <i>Builders</i> apply to POJOs too, so when it comes to the readability issue, we
                are back to square one with records, at least for the case when the number of fields is larger than just a few.
            </Pa>
            <T2>Conclusion</T2>
            <Pa>For a software developer, building complex objects is daily routine, which means that <b>records are not a silver bullet</b>, and
                become even less compelling if we take into account that most of the time we are
                not creating POJOs or Builders by hand, but rather using code generation from an IDE (Integrated development environment) or
                bytecode generators like <Ref code="lombok" noBrackets />. <b>Records are still compeling for simpler use cases</b> where you might need 2 or 3
                fields to be passed around together, like a tuple. <Ref code="tuple" /> What is disappointing to me though, is that Java still don't have features like
                tuple unpacking, or inline anonymous definition of tuples, which have been present in many of the most widely used programming languages
                of today like Javascript or Python.
            </Pa>
            <Sources>
                <Src href="https://openjdk.org/jeps/359"
                    shortDesc="JDK14's Record JEP"
                    code="jdk14-record-jep" />
                <Src href="https://refactoring.guru/design-patterns/builder"
                    shortDesc="Builder Pattern"
                    code="builder-pattern" />
                <Src href="https://projectlombok.org/"
                    shortDesc="Lombok"
                    code="lombok" />
                <Src href="https://en.wikipedia.org/wiki/Tuple"
                    shortDesc="Tuple"
                    code="tuple" />
            </Sources>
        </Art>
    )
}