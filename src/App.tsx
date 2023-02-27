import React, {useEffect, useState} from 'react';
import { Stack, Text, Link, FontWeights, IStackTokens, IStackStyles, ITextStyles, INavLinkGroup, INavStyles, Nav, INavLink, initializeIcons } from '@fluentui/react';
import logo from './logo.svg';
import './App.css';
import Elements from './components/Elements';
import Dashboard2 from './Dashboard2';
// import 'office-ui-fabric-react/dist/css/fabric.css'
import {Chart} from 'react-google-charts'
import PrintComponent from './components/PrintComponent';

const boldStyle: Partial<ITextStyles> = { root: { fontWeight: FontWeights.semibold } };
const stackTokens: IStackTokens = { childrenGap: 15 };
const stackStyles: Partial<IStackStyles> = {
  root: {
    display:'flex',
  
    minWidth: '80%',
    marginLeft: '0px',
    textAlign: 'center',
    color: '#605e5c',
  },
};


interface Data{
  postId: number,
  id: number ,
  name: String ,
  email:String ,
}





export const App: React.FunctionComponent = () => {

  const navStyles: Partial<INavStyles> = {
    root: {
      
      marginTop:50,
      // overflow: 'scroll',
      width: 208,
      height:'100vh',
      boxSizing: 'border-box',
      border: '1px solid #eee',
      overflowY: 'auto',
    },
  };

  const [data1, setData1] = useState([{}]);
  const [data3, setData3] = useState<Data[]>([]);
  const [colData1, setColData1] = useState([400000, 600000, 800000])
  const [colData2, setColData2] = useState(300000)

  const [data4, setData4]=useState<Data[]>([])

  useEffect(()=>{
    const fetchData2 =async()=>{
      await fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response=>response.json())
      // .then((response)=>console.log('The new data', response))
       .then((response)=>setData4(response))
      
    }
     fetchData2();
  }, [])

  const fetchData= async()=>{
    const url ='https://jsonplaceholder.typicode.com/comments'
   const dataSet1: any[] = [];
   const dataSet2: any[]= [];
    await fetch(url, {
      method: 'GET'
     }).then(data=>{
      console.log('Api Data Coming', data)
      const res = data.json();
      return res
     }).then((res)=>{
      console.log('Response json', res)
      
        setData3((data)=>data)
      
     
     }).catch(e=>{
      console.log('Error', e)
     })
  }

  useEffect(()=>{
    fetchData()
  }, [])
  
  const navLinkGroups: INavLinkGroup[] = [
    {
      links: [
        {
          name: 'Home',
          url: 'http://example.com',
          expandAriaLabel: 'Expand Home section',
          links: [
            {
              name: 'Activity',
              url: '#',
              key: 'key1',
              target: '_blank',
            },
            {
              name: 'MSN',
              url: '#',
              disabled: true,
              key: 'key2',
              target: '_blank',
            },
          ],
          isExpanded: true,
        },
        {
          name: 'Documents',
          url: '#',
          key: 'key3',
          isExpanded: true,
          target: '_blank',
        },
        {
          name: 'Pages',
          url: '#',
          key: 'key4',
          target: '_blank',
        },
        {
          name: 'Notebook',
          url: '#',
          key: 'key5',
          disabled: true,
        },
        {
          name: 'Communication and Media',
          url: '#',
          key: 'key6',
          target: '_blank',
        },
        {
          name: 'News',
          url: '#',
          icon: 'News',
          key: 'key7',
          target: '_blank',
        },
      ],
    },
  ];

  const data2= [
    ["City", "2010 Population", "2000 Population"],
    ["New York City, NY", colData1[0], colData2],
    ["Los Angeles, CA", 3792000, 3694000],
    ["Chicago, IL", 2695000, 2896000],
    ["Houston, TX", 2099000, 1953000],
    ["Philadelphia, PA", 1526000, 1517000],
  ];

  const options2= {
    title: "Population data"
  }

  return (
    <>
    {/* <div className='container'>
      <div style={{background:"beige"}}>
    <Nav
      onLinkClick={_onLinkClick}
      selectedKey="key3"
      ariaLabel="Nav basic example"
      styles={navStyles}
      groups={navLinkGroups}
    />
   </div>
    <div style={{display:"flex", justifyContent:"space-around"}}>
    <Stack   horizontalAlign="center" verticalAlign="center" verticalFill styles={stackStyles} tokens={stackTokens}>
     
      <Text variant="xxLarge" styles={boldStyle}>
        The Datalist Demo
      </Text>
      
       <Elements/>
 
   
    </Stack>
    </div>
   
    </div> */}
     {/* <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm1 ms-xl1"> */}
         
        {/* </div>
        <div className="main-element ms-Grid-col ms-sm11 ms-xl11">
          
          <div className="ms-Grid-row"> */}
          <Stack horizontal tokens={{childrenGap:'20px'}}> 
           <Stack><Dashboard2 /></Stack>
           <Stack horizontal style={{width:'100%', flexWrap:'wrap'}}> 
            <Stack  style={{margin:'auto'}}><PrintComponent/></Stack>
                
            <Stack style={{margin:'auto'}}>
              <Chart
              chartType='LineChart'
              options={{title:'Salaries', color:'red'}}
              data={
                [
                  ["Name", "Ade", "Salary"], ['Ana',210, 200], ['Benjy', 260, 250], ['Cathy',200, 220], ['Greg',230, 250]
                ]
              }
              width="100%"
              height={'400px'}
              legendToggle
            /></Stack>

            <Stack style={{margin:'auto'}}>
            <Chart
              chartType="BarChart"
             width="100%"
             height="400px"
             data={data2}
             options={options2}
             />


            </Stack>
            <Stack horizontal tokens={{childrenGap: '10px'}} style={{margin:'auto'}}>
              <Stack style={{padding:'250px'}}>Stack one</Stack>
              <Stack style={{padding:'250px'}}>Stack two</Stack>
              <Stack style={{padding:'250px'}}>Stack three</Stack>

            </Stack>
            <Stack horizontal tokens={{childrenGap: '10px'}} style={{margin:'auto'}}>
              <Stack style={{padding:'250px'}}>
                Api Data
                <ul>
                 {data4.slice(6, 8).map((thedata: Data)=>{
                 return <li key={thedata.id} >Name {thedata.name} Email: {thedata.email}`</li>
                 })}
                </ul>
              </Stack>
              <Stack style={{padding:'250px'}}>Stack two</Stack>
              <Stack style={{padding:'250px'}}>Stack three</Stack>

            </Stack>
           <Elements/>
           </Stack>
           

          {/* </div>
          <div className="ms-Grid-row">
          
          </div>
        </div>
      </div>
    </div> */}
    </Stack>
    </>
  );
};

function _onLinkClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) {
  if (item && item.name === 'News') {
    alert('News link clicked');
  }
}