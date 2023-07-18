import React, { useCallback, useMemo, useState } from 'react'
import Slider from 'react-smooth-range-input'

import QS from 'query-string';
import Modal from './Modal'
import Counter from '../Input/Counter';
import useSearchModal from '../../hooks/useSearchModal';
import { useSearchParams } from 'react-router-dom';
import Heading from '../Heading';
import Input from '../Input/Input';
import { useForm } from 'react-hook-form';



function SearchModal() {
  const [rent,setRent]=useState(0);
  const [roomCount,setRoomCount]=useState(1);
  const [bedroomCount,setBedroomCount]=useState(2);
  const [bathroomCount,setBathroomCount]=useState(1);
  const [roomSize,setRoomSize]=useState(10)
  
    const params=useSearchParams();
    const searchModal=useSearchModal(); 
    const {formState:{errors},register,handleSubmit}=useForm()

    console.log(rent)
    // onNext 
    // const onNext=useCallback(()=>{
    //   setStep(value=>value+1)
    // },[])
    // onBack
    // const onBack=useCallback(()=>{
    //   setStep(value=>value-1)
    // },[])
    // 
    const onSubmit=useCallback(async(data)=>{
      console.log(data)
      // if(step !== STEPS.INFO){
      //   return onNext()
      // }
      let currentQuery={}
      if(params){
        currentQuery=QS.parse(params.toString())
      }
      const updatedQuery={
        ...currentQuery,
        guestCount,
        roomCount,
        bathroomCount
      }

     
      const url=QS.stringifyUrl({
        url:"/",
        query:updatedQuery
      },{skipNull:true})
 
      // setStep(STEPS.LOCATION);
      // searchModal.onClose();
      
      // router.push(url);
    },[])
    
    //
   

    let bodyContent=(
      <div className="flex flex-col gap-8">
        <Heading
         title='Where do you wanna go'
         subTitle='Select a place to go'
        />
        <Input
        id={'name'}
        label={'Name'}
        errors={errors}
        register={register}
        />
        <p className='-my-6 font-semibold'>Rent per month 10k 50k</p>
        <Slider min={10} max={50} hasTickMarks controllerWidth={20} onChange={(value)=>setRent(value)} value={15}/>
        <p className='-my-6 font-semibold'>Select bathroom 2-10</p>
        <Slider min={2} max={10} hasTickMarks controllerWidth={20} value={4}/>
        <p className='-my-6 font-semibold'>Select bedroomCount 1-6</p>
        <Slider min={1} max={6} hasTickMarks controllerWidth={20} value={2}/>
        <p className='-my-6 font-semibold'>Select roomSize 1-6</p>
        <Slider min={10} max={14} hasTickMarks controllerWidth={20} value={10}/>
        {/* <Input
          id={'range'}
          label={'Money Range'}
          type={'range'}
          min={10000}
          max={50000}
          register={register}
          errors={errors}
        /> */}
      </div>
    )
    
  return (
    <Modal 
      isOpen={searchModal.isOpen}
      onClose={searchModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      title='Filters'
      actionLabel={"Search"}
      body={bodyContent} footer={undefined} disabled={undefined} secondaryAction={undefined}    />
  )
}

export default SearchModal;
