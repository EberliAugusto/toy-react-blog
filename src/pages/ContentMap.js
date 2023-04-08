import * as Icons from '../assets/Icons'
import JdkReleasesPage from './java/JdkReleases'
import JavaRecordsPage from './java/JavaRecords'
import DefaultMethods from './java/DefaultMethods'
import RestPage from './architecture/Rest'


const refs = {
    arts: {
        javaDefaultMethods: "interface-default-methods",
        jdkReleases: "jdk-releases",
        javaRecords: "java-records",
        rest: "rest",
    },
    groups: {
        architecture: "architecture",
        java: "java"
    }
}

function articlesByGroup(groupRef) {
    return () => allArticles.filter(item => item.group().ref === groupRef)
}
function group(groupRef) {
    return () => groups[groupRef]
}

const allArticles = [
    {
        ref: refs.arts.javaDefaultMethods,
        group: group(refs.groups.java),
        label: "Interface Default Methods",
        page: DefaultMethods,
        routeTo: '/interface-default-methods',
    },    
    {
        ref: refs.arts.jdkReleases,
        group: group(refs.groups.java),
        label: "JDK Releases",
        page: JdkReleasesPage,
        routeTo: '/jdk-releases',
    },
    {
        ref: refs.arts.javaRecords,
        group: group(refs.groups.java),
        label: "When and How: Records",
        page: JavaRecordsPage,
        routeTo: "/java-records"
    },
    {
        ref: refs.arts.rest,
        group: group(refs.groups.architecture),
        label: "What is Rest All About?",
        page: RestPage,
        routeTo: "/rest"
    }
]

const allGroups = [
    {
        ref: refs.groups.java,
        label: "Java",
        icon: Icons.java,
        articles: articlesByGroup(refs.groups.java),
        routeTo: "/java"
    },
    {
        ref: refs.groups.architecture,
        label: "Architecture",
        icon: Icons.architecture,
        articles: articlesByGroup(refs.groups.architecture),
        routeTo: "/architecture"
    }
]

function makeObject(list) {
    let sortableIndex = 0;
    return list.reduce((acc, item) => {
        return {
            ...acc,
            [item.ref]: {
                ...item,
                index: ++sortableIndex
            }
        }
    }, {})
}

export const arts = { ...makeObject(allArticles), all: allArticles, refs: refs.arts }
export const groups = { ...makeObject(allGroups), all: allGroups, refs: refs.groups }