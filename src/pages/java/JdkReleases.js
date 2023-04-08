import React from "react";
import { T1, T2, T3, Pa, Ta, Col, Row, Art, Ref, Src, Sources, Java } from "../../components/ArticleComponents";


export default function JdkRelases() {
    return (
        <Art artId="jdkReleases">
            <T1>JDK Releases</T1>
            <Pa>Currrently, java has releasing model where there is a new version release every 6
                months, and one Long Term Support (LTS) version every 2 to 3 years, next
                planned LTS is version 21.
                {' '}<Ref code="oracleLts" />
            </Pa>
            <Pa>
                Features are proposed in <i>JDK Enhancement Proposals (JEPs)</i>. Not ready APIs and some JDK tools
                are released through the Incubator. Incubator has  modules which have
                to be <b>explicitly included</b> if you would like to use them. Java platform features
                (e.g. Java language and garbage collector changes) are first released in preview mode and
                are <b>disabled by default</b>. Rather unofficially, there are also experimental features,
                which you may also enabled, but are far from ready.
                {' '}<Ref code="oracleFeedback" />
            </Pa>
            <Pa>
                In this article we will present the most important features for developers in each release.
            </Pa>
            <T2>JDK 19 <Ref code="releaseJdk19" /></T2>
            <Pa>General Availability (GA) reached on September 2022.</Pa>
            <T3>(1st Preview) Record Patterns</T3>
            <Pa>Patterns for records where introduced. This makes it much easier to  </Pa>
            <Java>
                {`
                record Color(byte red, byte green, byte blue){}
                record TShirt(Size size, Color(byte red, byte green, byte blue){}

                // shallow
                if (obj instanceof Color(byte red, byte green, byte blue)) {
                    System.out.println(red);
                    System.out.println(green);
                    System.out.println(blue);
                }

                // deeper
                if (obj instanceof TShirt(Size size, Color(byte red, byte green, byte blue)) {
                    System.out.println(red);
                    System.out.println(green);
                    System.out.println(blue);
                    System.out.println(size);
                }
                `}
            </Java>
            <Pa>The behavior gets complicated when we we use this in switches, and is not tackled here,
                check the JEP for more.</Pa>

            <T3>(1st Preview) Virtual Threads</T3>
            <Pa>Coming soon... </Pa>

            <T3>(1st Incubator) Structured Concurrency</T3>
            <Pa>Coming soon... </Pa>
            <T3>(3rd Preview) Pattern Matching for switches</T3>
            <Pa>Repeatedly doing instanceOf, then casting an object is all too
                common. Java has improvements on the switch statement to satisfy this use case. </Pa>
            <Java>{`
                String label = switch (house) {
                    case SimpleHouse h -> "Hi"
                    case BigHouse h -> 
                };
                `}
            </Java>
            <T2>JDK 18</T2>
            <Pa>Coming soon... </Pa>
            <T2>JDK 17 (LTS)</T2>
            <Pa>Coming soon... </Pa>
            <T2>JDK 16</T2>
            <Pa>Coming soon... </Pa>
            <T2>JDK 15</T2>
            <Pa>Coming soon... </Pa>
            <T2>JDK 14</T2>
            <Pa>Coming soon... </Pa>
            <Sources>
                <Src href="https://blogs.oracle.com/javamagazine/post/java-long-term-support-lts"
                    shortDesc="The Art of LTS"
                    code="oracleLts" />
                <Src href="https://openjdk.org/projects/jdk/19/"
                    shortDesc="JDK 19 Release"
                    code="releaseJdk19" />
                <Src href="https://blogs.oracle.com/javamagazine/post/the-role-of-preview-features-in-java-14-java-15-java-16-and-beyond"
                    shortDesc="Oracle gathers feedback"
                    code='oracleFeedback' />
            </Sources>
        </Art>
    )
}

