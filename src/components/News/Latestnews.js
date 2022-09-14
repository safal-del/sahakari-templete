import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Addnews } from '../../redux/action/LatestnewsSlice';
import service1 from "../../assets/images/service1.jpeg"
import service2 from "../../assets/images/service2.jpeg"
import service3 from "../../assets/images/service3.jpeg";

function LatestNews() {
     
    // const lamojasto = {
    //     email:"eight",

    //     ph:"five"
    // }


    let datas = []

    const [checkarray, setcheck] = useState([]);
     
     console.log(checkarray)



    // function handlechange(){

    //    dispatch(Addnews(lamojasto))

    // }

     
     const state = useSelector(function(state){
        return state.latestnewsadd.LatestNews
     })
     console.log(state)

     function pushintoarray(){
        datas.push("oi");
        console.log(datas);
     }
//  useEffect(()=>{
//     pushintoarray()
//  },[])
    

      useEffect(()=>{
         let sessiondata = localStorage.getItem('dummy');
         console.log(sessiondata);
          let jsondata = JSON.parse(sessiondata)
           datas.push(jsondata);
          console.log(datas)
           localStorage.setItem("key", JSON.stringify(datas))
         let newdata= localStorage.getItem("key");   
         console.log(newdata);   

        //   setcheck(
        //     function(prevstate){
        //         console.log(prevstate)
        //        return [...prevstate,
                 
        //          prevstate = 
        //         ]
        //     }
        //  )
           
            
        

      },[])
      console.log(datas)

      





  return (
    <div className='flex flex-col justify-around '>
        <div className='pt-20' >
            <h1 className='flex justify-center text-3xl text-primarycolor font-bold text-3xl'>Latest News</h1>
            <div className='flex justify-center m-5'> 
                {/* <hr className='w-[30%] border-[#bcfd4c] border-4 rounded mb-10'/> */}
            </div>
        </div>
        <div className='flex justify-around flex-col lg:flex-row'>
            {/* <button onClick={Pushintoarray}>thich</button> */}
            <div>{state.map(function(items){
                return <div>{items.email}</div>
            })}</div>
            <div>{checkarray.map(function(ites){
                return ites.email
            })}</div>
           
            {/* <div className='flex flex-col justify-around shadow-xl hover:shadow-none transition-all m-5 hover:bg-[#7f7f7f] hover:cursor-pointer text-left '>
                <img src={service1} className='h-[250px] '/>
                <p className='text-xs text-black pl-5 pt-5'>2,May,2019<hr className='w-20'/></p>
                <h4 className='text-xl font-bold text-primarycolor  pt-5 pl-5'>Finance Service</h4>
                <p className='text-2xs text-black mb-5 break-all pr-10 p-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt consequat..</p>
                
            </div>
            <div className='flex flex-col justify-around shadow-xl hover:shadow-none transition-all m-5  text-left  hover:bg-[#7f7f7f] hover:cursor-pointer'>
                <img src={service2} className='h-[250px] '/>
                <p className='text-xs text-black pl-5 pt-5'>2,May,2019<hr className='w-20'/></p>
                <h4 className='text-xl font-bold text-primarycolor  pt-5 pl-5 '>Finance Service</h4>
                <p className='text-2xs text-black mb-5 break-all pr-10 p-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt consequat..</p>
                
            </div>
            <div className='flex flex-col justify-around shadow-xl hover:shadow-none transition-all m-5 hover:bg-[#7f7f7f] hover:cursor-pointer text-left '>
                <img src={service3} className='h-[250px] '/>
                <p className='text-xs text-black pl-5 pt-5'>2,May,2019<hr className='w-20'/></p>
                <h4 className='text-xl font-bold text-primarycolor  pt-5 pl-5 '>Finance Service</h4>
                <p className='text-2xs text-black mb-5 break-all pr-10 p-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt consequat..</p>
                
            </div>
            <div className='flex flex-col justify-around shadow-xl hover:shadow-none transition-all m-5 hover:bg-[#7f7f7f] hover:cursor-pointer text-left '>
                <img src={service1} className='h-[250px] '/>
                <p className='text-xs text-black pl-5 pt-5'>2,May,2019<hr className='w-20'/></p>
                <h4 className='text-xl font-bold text-primarycolor   pt-5 pl-5'>Finance Service</h4>
                <p className='text-2xs text-black mb-5 break-all pr-10 p-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt consequat..</p>
                
            </div> */}

        </div>
       
    </div>
  )
}

export default LatestNews;