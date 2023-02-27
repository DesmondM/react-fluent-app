import { DefaultButton, DetailsList, Dialog, DialogFooter, DialogType, Dropdown, IDropdownOption,
   IconButton, Label, Link, MessageBar, MessageBarButton, MessageBarType, Modal, 
   PrimaryButton, 
   DropdownMenuItemType,
   GroupFooter} from '@fluentui/react';
import React, { useEffect, useState } from 'react';
// import {initializeIcons} from '@fluentui/font-icons-mdl2';
import {Icon} from '@fluentui/react/lib/Icon';
import {CancelIcon, AddIcon, SkypeCheckIcon, DropShapeIcon, SelectAllIcon, SkipBack10Icon, PlayReverseIcon, ForwardIcon, ChevronLeftSmallIcon, ChevronRightSmallIcon}from '@fluentui/react-icons-mdl2';

const Elements = () => {
  // initializeIcons();

  const [isModalOpen, setIsModalOpen] =useState(false);
  const [hideDialog, setHideDialog] =useState(true);
  const [successMsg, setSuccessMsg]= useState(false);
  const [startAt, setStartAt]= useState(0)
  const [endAt, setEndAt]= useState(startAt+5);
  const [pageNumber, setPageNumber]=useState(1);
  const [seachTerm, setSearchTerm]= useState('');


  const _alertClicked = ()=>{
    alert("Button Clicked")
  }
  
  const editRow =()=>{
    setIsModalOpen((rowEdit)=>true)
  }
  const hidemodal =()=>{
    setIsModalOpen((rowEdit)=>false)
  }
  const countries =[
    {
      key: "1",
      name:"Japan",
      capital: "Tokyo",
      popn:"125 million",
      cont:"Asia",
      actn: <button onClick={editRow}>Edit</button>,
    },
    {
      key: "2",
      name:"Venezuela",
      capital: "Caracas",
      popn:"28 million",
      cont:"South America",
      actn: <button onClick={editRow}>Edit</button>,
    },
    {
      key: "3",
      name:"Kenya",
      capital: "Nairobi",
      popn:"53 million",
      cont:"Africa",
      actn: <button onClick={editRow}>Edit</button>,
    },
    {
      key: "4",
      name:"Italy",
      capital: "Rome",
      popn:"62 million",
      cont:"Europe",
      actn: <button onClick={editRow}>Edit</button>,
    },
    {
      key: "5",
      name:"Venezuela",
      capital: "Caracas",
      popn:"28 million",
      cont:"South America",
      actn: <button onClick={editRow}>Edit</button>,
    },
    {
      key: "6",
      name:"Kenya",
      capital: "Nairobi",
      popn:"53 million",
      cont:"Africa",
      actn: <button onClick={editRow}>Edit</button>,
    },
    {
      key: "7",
      name:"Italy",
      capital: "Rome",
      popn:"62 million",
      cont:"Europe",
      actn: <button onClick={editRow}>Edit</button>,
    },
    {
      key: "8",
      name:"Venezuela",
      capital: "Caracas",
      popn:"28 million",
      cont:"South America",
      actn: <button onClick={editRow}>Edit</button>,
    },
    {
      key: "9",
      name:"Kenya",
      capital: "Nairobi",
      popn:"53 million",
      cont:"Africa",
      actn: <button onClick={editRow}>Edit</button>,
    },
    {
      key: "10",
      name:"Italy",
      capital: "Rome",
      popn:"62 million",
      cont:"Europe",
      actn: <button onClick={editRow}>Edit</button>,
    },
    {
      key: "11",
      name:"Brazil",
      capital: "Brasilia",
      popn:"28 million",
      cont:"South America",
      actn: <button onClick={editRow}>Edit</button>,
    },
    {
      key: "12",
      name:"Egypt",
      capital: "Cairo",
      popn:"53 million",
      cont:"Africa",
      actn: <button onClick={editRow}>Edit</button>,
    },
    {
      key: "13",
      name:"Italy",
      capital: "Rome",
      popn:"62 million",
      cont:"Europe",
      actn: <button onClick={editRow}>Edit</button>,
    },
   
  ]

  const [countryData, setCountryData]= useState(countries);
  console.log(countryData);

  // useEffect(()=>{
  //   const filteredCountries = countries.filter((filteredCountrey)=>{
  //     return filteredCountrey.name===seachTerm
  //   })
  //   setCountryData(filteredCountries)
    
  // }, [seachTerm])





  const columns= [
    {
        key:"1",
        name: "Name",
        fieldName: "name",
        minWidth:100,
        maxWidth:300,
        isResizable:true,
    },
    {
        key:"2",
        name: "Capital",
        fieldName: "capital",
        minWidth:100,
        maxWidth:300,
        isResizable:true,
        
    },
    {
        key:"3",
        name: "Population",
        fieldName: "popn",
        minWidth:100,
        maxWidth:300,
        isResizable:true,
    },
    {
        key:"4",
        name: "Continent",
        fieldName: "cont",
        minWidth:100,
        maxWidth:300,
        isResizable:true,
    },
    {
        key:"5",
        name: "Actions",
        fieldName: "actn",
        minWidth:100,
        maxWidth:300,
        isResizable:true,
    }
  ]
  const dialogContentProps = {
    type: DialogType.normal,
    title: 'Personal Details',
    closeButtonAriaLabel: 'Close',
    subText: 'Do you want to send this message without a subject?',
   
  };

  const SuccessExample = () => (
    setHideDialog(true), 
    setSuccessMsg(true)
  );
  
  const continents: IDropdownOption[] = [
    { key: 'fruitsHeader', text: 'Fruits', itemType: DropdownMenuItemType.Header },
    { key: 'apple', text: 'Apple' },
    { key: 'banana', text: 'Banana' },
    { key: 'orange', text: 'South Africa', disabled: true },
    { key: 'grape', text: 'Grape' },
    { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
    { key: 'vegetablesHeader', text: 'Vegetables', itemType: DropdownMenuItemType.Header },
    { key: 'broccoli', text: 'Broccoli' },
    { key: 'carrot', text: 'Carrot' },
    { key: 'lettuce', text: 'Lettuce' },
  ];

 const nextItems = ()=>{
   
   setStartAt((prevCount)=>prevCount+5);
   setEndAt((nextCount)=>nextCount+5);
   setPageNumber((currPg)=>currPg+1);

 }  
 
 const prevItems =()=>{
  setStartAt((prevCount)=>prevCount-5);
  setEndAt((nextCount)=>nextCount-5);
  setPageNumber((currPg)=>currPg-1);

 }

 const handleInput =(e: { preventDefault: () => void; target: { value: React.SetStateAction<string>; }; })=>{
     e.preventDefault();
     setSearchTerm(e.target.value)
     console.log(seachTerm)
 }




  return (
    <>
   
    <Dropdown options={continents} label="Select a country" 
      placeholder='Country'
      defaultSelectedKey={'orange'}
      
      
    > 
     </Dropdown>
     <div>Search for record  {": "}
      <input type="text" placeholder='Country Name' value={seachTerm} onChange={handleInput}/>
     </div>
    <div className='theList'>
      
    <DetailsList items={
      countryData.slice(startAt,endAt).map((countrey: any)=>{
      return countrey
    })} columns= {columns} data-is-scrollable="true"></DetailsList>
    </div>
   
    <div className="footerContainer"> 
   
    <div>Page {pageNumber} of {Math.ceil(countries.length/5)}{" "}</div>
    <div onClick={prevItems}>{" "}<div style={{minWidth:"10px", color:"#ffc020"}}><ChevronLeftSmallIcon /></div>{" "} Back</div> 
    <div  style={{minWidth:"10px", color:"#ffc020"}}>{" "}|{" "}</div> 
    <div onClick={nextItems}>{" Next "}<div style={{minWidth:"10px", color:"#ffc020"}}><ChevronRightSmallIcon /></div> </div> 
    </div>
    



    <Modal isOpen={isModalOpen}><p style={{display:'flex', justifyContent:"space-around"}}>The modal content</p>
   
    <button style={{marginLeft:"10px"}}
           
            aria-label="Close popup modal"
            onClick={hidemodal}
          > Close</button>
    </Modal>
    <Dialog hidden={hideDialog}
     dialogContentProps={dialogContentProps}
    >
      <Label>Country:</Label> <input style={{display:"flex", width:"100%",margin:"auto"}} type="text" placeholder="country"/>
      <Label>Capital:</Label> <input style={{display:"flex", width:"100%",margin:"auto"}} type="text" placeholder="capital"/>
      <Label>Population:</Label> <input style={{display:"flex", width:"100%",margin:"auto"}} type="text" placeholder="population"/>
      <Label>Continent:</Label> <input style={{display:"flex", width:"100%",margin:"auto"}} type="text" placeholder="continent"/>
      <DialogFooter>
        <PrimaryButton style={{background:"#ffc020", color:"black"}} onClick={SuccessExample} text="Add"><AddIcon/></PrimaryButton>
        <DefaultButton onClick={()=>setHideDialog(true)} text="Cancel"><CancelIcon/></DefaultButton>
      </DialogFooter>
    </Dialog>
   {successMsg && <MessageBar
  
      messageBarType={MessageBarType.success}
      isMultiline={true}
    >
      Record succesfully added....
      <SkypeCheckIcon style={{color: "green", minWidth:"50%"}}/>
  
    </MessageBar>}
    <DefaultButton disabled={false} onClick={()=>setHideDialog(false)} text="Add Row" style={{background:"#ffc020", width: "115Spx"}}/>
    <PrimaryButton disabled={false} onClick={_alertClicked} text="Open Alert"/>
   
    </>
  )
}

export default Elements