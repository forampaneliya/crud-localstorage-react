import { useEffect, useState } from "react";

function Basicform() {
    let [data, setData] = useState({})
    let [list, setList] = useState([])
    let handler = (e) => {
        let value = e.target.value;
        let name = e.target.name;

        setData({ ...data, [name]: value })
    }
    
    // console.log(data);
    let addData = (e) => {
        e.preventDefault();
        setList([...list, data])
        
    }
    console.log(list);
    return (
        <>

            <h1 style={{ textAlign: "center" }}>Basic form</h1>
            <form action="" method="post" onSubmit={(e) => addData(e)}>
                <table border={2} align="center">
                    <tr>
                        <td style={{ fontSize: "20px" }}>Username:-</td>
                        <td><input type="text" name="username" style={{ height: "30px", width: "300px", fontSize: "20px" }} onChange={(e) => handler(e)}  /></td>
                    </tr>

                    <tr>
                        <td style={{ fontSize: "20px" }}>Password:-</td>
                        <td><input type="password" name="password" style={{ height: "30px", width: "300px", fontSize: "20px" }} onChange={(e) => handler(e)} /></td>
                    </tr>

                    <tr>
                        <td style={{ fontSize: "20px" }}>Phone No:-</td>
                        <td><input type="number" name="phone" style={{ height: "30px", width: "300px", fontSize: "20px" }} onChange={(e) => handler(e)} /></td>
                    </tr>

                    <tr style={{ fontSize: "20px" }}><input type="submit" /></tr>


                </table>
            </form>
            <br></br><br></br>


            <table align="center" border={3}>
                <th>Username</th>
                <th>Password</th>
                <th>Phone no</th>

                {
                    list.map((val, index) => {


                        return (<>
                            <tr>
                                <td>{val.username}</td>
                                <td>{val.password}</td>
                                <td>{val.phone}</td>


                            </tr>

                        </>)



                    })
                }


            </table>
        </>
    )
}
export default Basicform;