import { useState,useEffect } from "react";

function Form()
{
  let [data,setData]=useState({})
  let [info,setInfo]=useState([])
  let [pos,setPos]=useState(-1)


  useEffect(()=>{
    let list= JSON.parse(localStorage.getItem("stdlist"))
    let newlist=list?list:[]
    setInfo(newlist)
  },[setInfo])

let changeIput=(e)=>{
   let name=e.target.name;
  let value=e.target.value;
  setData({...data,[name]:value})

}


 
// console.log(data);
  let submitdata=(e)=>{
    e.preventDefault()

    if(pos!=-1){
        info.map((v,i)=>{
            if(i==pos){
                info[i]=data;
            }
        })
        localStorage.setItem("stdlist",JSON.stringify([...info]))


    }
    else{
        let updatedata=[...info,data]
    setInfo(updatedata);
    localStorage.setItem("stdlist",JSON.stringify(updatedata))

 

    }
    setPos(-1)
       setData({});
    }
    console.log(info);


    let deleteData=(poss)=>
    {
        // console.log(pos);
    //    let ind= info.findIndex((v,i)=>{
    //     i==pos
    //     return pos
    //    }
    //    )
        info.splice(poss,1);
        localStorage.setItem("stdlist",JSON.stringify([...info]));
        setInfo([...info])

    }

    function Updatedata(poss)
    {
        setPos(pos)
        let record=info.filter((v,i)=>{
            if(i==poss)
            {
                return v;
            }
        })
        setData(record[0]);

    }


    return(
        <>
  <form action="" method="post" onSubmit={(e)=>submitdata(e)}>
        <table border={3} align="center">
            <tr>
                <td style={{fontSize:"24px"}}>Username</td>
                <td><input type="text" name="username" style={{width:"300px", fontSize:"24px"}} onChange={(e)=>changeIput(e)} value={data.username?data.username:""} /></td>
            </tr>

            <tr>
                <td style={{fontSize:"24px"}}>Password</td>
                <td><input type="password" name="password" style={{width:"300px", fontSize:"24px"}} onChange={(e)=>changeIput(e)} value={data.password?data.password:""} /></td>
            </tr>

            <tr>
                <td style={{fontSize:"24px"}}>Phone</td>
                <td><input type="number" name="phone" style={{width:"300px", fontSize:"24px"}} onChange={(e)=>changeIput(e)} value={data.phone?data.phone:""} /></td>
            </tr>

            <tr>
                <td style={{fontSize:"24px"}}><input type="submit" name="submit" style={{width:"300px", fontSize:"24px" }} value={pos==-1?"submit":"edit"}/></td>
            </tr>


        </table>
        </form>
        <br></br><br></br>
        <h1 style={{textAlign:"center"}}>Show Data:-</h1>
        <table border={1} align="center">
            <th style={{width:"200px", fontSize:"24px"}}>Name</th>
            <th style={{width:"200px", fontSize:"24px"}}>Password</th>
            <th style={{width:"200px", fontSize:"24px"}}>Number</th>
            <th style={{width:"80px", fontSize:"24px"}}>Delete</th>
            <th style={{width:"80px", fontSize:"24px"}}>Update</th>


            {
                info.map((val,index)=>{
                    return(
                        <>
                        <tr>
                                <td style={{width:"200px", fontSize:"24px"}}>{val.username}</td>
                                <td style={{width:"200px", fontSize:"24px"}}>{val.password}</td>
                                <td style={{width:"200px", fontSize:"24px"}}>{val.phone}</td>
                                <td style={{width:"80px", fontSize:"24px"}}>
                                    <button style={{fontSize:"24px"}} onClick={()=>deleteData(index)}>Delete</button></td>
                                    <td style={{width:"80px", fontSize:"24px"}}>
                                    <button style={{fontSize:"24px"}} onClick={()=>Updatedata(index)}>Update</button></td>






                            </tr>
                        </>
                    )
                })
            }
        </table>
        
        </>
    )
}
export default Form;