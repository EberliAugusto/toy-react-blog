
import {aboutIconRef, architectureIconRef, javaIconRef, todoIconRef} from '../assets/IconsMap';

let sequenceCounter = 0;

export default {
    open: false,
    expandedItems:[],
    menuItems: {
        architecture: {
            position: sequenceCounter++,
            label: "Architecture",
            icon: architectureIconRef,
            items: {
                restful: {
                    position: sequenceCounter++,
                    label: "Rest",
                    routeTo: '/rest',
                },                   
            },
        },
        java: {
            position: sequenceCounter++,
            label: "Java",
            icon: javaIconRef,
            items: {
                javaFeaturesByRelease: {
                    position: sequenceCounter++,
                    label: "JDK Releases",
                    routeTo: '/jdk-releases',
                },                   
            },
        },        
        about: {
            position: sequenceCounter++,
            label: "About",
            icon: aboutIconRef,
            routeTo: '/about',
        },    
        todo: {
            position: sequenceCounter++,
            label: "Todo",
            icon: todoIconRef,
            routeTo: '/todo',
        },             
    }
}