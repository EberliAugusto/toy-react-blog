import React from "react";
import { T1, T2, T3, Pa, Ta, Col, Row, Art, Ref, Src, Sources } from "../../components/ArticleComponents";
import { Java } from "../../components/CodeSnippet";

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
                Features are propsed in <i>JDK Enhancement Proposals (JEPs)</i>. Not ready APIs and some JDK tools 
                are released through the Incubator. Incubator has  modules which has modules which have 
                to be <b>explicitly included</b> if you would like to use them. Java platform features 
                (e.g. Java language and garbage collector changes) are first released in preview mode and
                are <b>disabled by default</b>. Rather unofficially, there are also experimental features, 
                which you may also enabled, but are far from ready (not even in preview yet).  
                {' '}<Ref code="oracleFeedback" /> 
            </Pa>
            <Pa>
                In this article we will present the most important features for developers in each release. 
            </Pa>
            <T2>JDK 19 <Ref code="releaseJdk19" /></T2>
            <Pa>General Availability (GA) reached on September 2022.</Pa>
            <T3>(1st Preview) Record Patterns</T3>
            <Pa>Patterns for records where introduced: </Pa>
            <Java>
                {`
                record Point(int x, int y) {}

                void printSum(Object o) {
                    if (o instanceof Point(int x, int y)) {
                        System.out.println(x+y);
                    }
                }
                `}
            </Java>
            <Pa>The behavior gets complicated when we we use this in switches, and is not tackled here, 
                check the JEP for more.</Pa>

            <T3>(1st Preview) Virtual Threads</T3>    
            <Pa>Coming soon... </Pa>

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

