import React from "react";
import { T1, T2, T3, Pa, Ta, Col, Row, Art, Ref, Src, Sources, Java } from "../../components/ArticleComponents";


export default function InterfaceDefaultMethods() {
    return (
        <Art artId="interface-default-methods">
            <T1>Interface Default Methods</T1>
            <Pa>Now it is possible to add code to interfaces in Java by adding static and
                default methods to interfaces. Static methods behave just like static  methods in classes,
                default methods are interesting though, it allows for inheritance, let's
                have a deeper look.
            </Pa>
            <T2>Definition</T2>
            <Pa>It is neat and fairly concise to define. Default methods just like
                interface methods are always public.</Pa>
            <Java>{`
            interface Car {

                TractionType getTractionType();

                default void moves() {
                    System.out.println("On four wheels... like this " + 
                        this.getTractionType().name());
                }
            }
            `}
            </Java>
            <Pa>If a class inherits two methods with the same signature,
                from two different interfaces, then that class is forced
                to implement the method, or compilation error arises.</Pa>
            <Java>
                {`
            interface Tricycle {

                default void moves() {
                    System.out.println("On 3 wheels... ")
                }
            }

            class StrangeVehicle implements Tricycle, Car {

                @Override
                public TractionType getTractionType() {
                    return TractionType.FRONT;
                }

                // This method is necessary for compilation.
                @Override
                public void moves() {
                    //It is also possible to call the implementations:
                    Car.super.moves();
                }
            }
            `}
            </Java>
            <T2>Conclusion</T2>
            <Pa>Interfaces allow us to add methods to interfaces without having to
                implement those methods in classes that implement those interfaces, but of course,
                this doesn't mean that every case can be handled in that way, since often, a default
                implementation cannot be provided. 
            </Pa>
            <Pa>
                This also means that we have more than just <i>Multiple Inheritance of Types</i> in 
                Java, but now also <i>Multiple inheritance of behavior (of methods)</i>. 
                Thankfully, we don't have <i>Multiple inheritance of state</i>, and it is likely 
                to stay this way in the future.
            </Pa>
            <Sources>
                <Src href="https://docs.oracle.com/javase/tutorial/java/IandI/defaultmethods.html"
                    shortDesc="Default Methods"
                    code="oracleDocsDefaultMethods" />
            </Sources>
        </Art>
    )
}

