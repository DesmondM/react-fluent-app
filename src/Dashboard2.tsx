import React from 'react'
import { Stack, Text, Link, FontWeights, IStackTokens, IStackStyles, ITextStyles, INavLinkGroup, INavStyles, Nav, INavLink, initializeIcons } from '@fluentui/react';


const navigationStyles ={
    root:{
      height: '100vh',
      boxSizing: 'border-box',
      border:'1px solid #eee',
      overflowY: 'auto',
      paddingTop: '10vh',
      background: 'teal',
    //   width:'10%',
    },
  };

const links = [
    {
        links: [
            {
                name: 'Dashboard',
                key: 'key1',
                url:'/',
                iconProps:{
                    iconName: 'News',
                    styles:{
                        root:{
                            fontSize:20,
                            color: '#106ebe',
                        },
                    }
                }
            },
            {
                name: 'Settings',
                key: 'key2',
                url:'/',
                iconProps:{
                    iconName: 'PlayerSettings',
                    styles:{
                        root:{
                            fontSize:20,
                            color: '#106ebe',
                        },
                    }
                }
            },
            {
                name: 'Transfer',
                key: 'key3',
                url:'/',
                iconProps:{
                    iconName: 'SwitcherStartEnd',
                    styles:{
                        root:{
                            fontSize:20,
                            color: '#106ebe',
                        },
                    }
                }
            },
            {
                name: 'Stats',
                key: 'key4',
                url:'/',
                iconProps:{
                    iconName: 'StackedLineChart',
                    styles:{
                        root:{
                            fontSize:20,
                            color: '#106ebe',
                        },
                    }
                }
            },
        ]
    }
]

const Dashboard2 = () => {
    initializeIcons();
  return (
    <Nav 
    groups={links}
    selectedKey= 'key1'
    styles={navigationStyles}/>
  )
}

export default Dashboard2