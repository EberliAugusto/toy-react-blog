
import * as Icons from '../assets/Icons';

let sequenceCounter = 0;

export default {
    open: false,
    expandedItems:[],
    menuItems: {
        architecture: {
            position: sequenceCounter++,
            label: "Architecture",
            icon: Icons.architectureIconRef,
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
            icon: Icons.javaIconRef,
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
            icon: Icons.aboutIconRef,
            routeTo: '/about',
        },    
        todo: {
            position: sequenceCounter++,
            label: "Todo",
            icon: Icons.todoIconRef,
            routeTo: '/todo',
        },             
    }
}