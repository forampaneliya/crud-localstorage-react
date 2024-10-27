import { useState, useEffect } from "react";
import "./form.css"
function Formlocalstorage() {
    let [data, setData] = useState({})
    let [info, setInfo] = useState([])
    let [pos, setPos] = useState(-1)
    let [city, setCity] = useState(["surat", "Rajkot", "Ahemdabad", "Junagadh", "Baroda", "Navsari", "Bhruch", "Ankleshwar"])
    let [hob, setHob] = useState([])


    useEffect(() => {
        let list = JSON.parse(localStorage.getItem("stdlist"))
        let newlist = list ? list : []
        setInfo(newlist)
    }, [setInfo])

    let changeIput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        let hobbyData = [...hob]

        if (name == "hobby") {
            if (e.target.checked) {
                hobbyData.push(value)
            }
            else {

                let index = hobbyData.findIndex((v, i) => v == value);
                hobbyData.splice(index, 1)
            }
            value = hobbyData
            setHob(value)


        }
        console.log(hob);

        setData({ ...data, [name]: value })


    }
    // console.log(data);
    let submitdata = (e) => {
        e.preventDefault()

        if (pos != -1) {
            info.map((v, i) => {
                if (i == pos) {
                    info[i] = data;
                }
            })
            localStorage.setItem("stdlist", JSON.stringify([...info]))
        }
        else {
            let updatedata = [...info, data]
            setInfo(updatedata);
            localStorage.setItem("stdlist", JSON.stringify(updatedata))



        }
        setPos(-1)
        setData({});
        setHob([])
        //    setCity([])
    }
    console.log(info);


    let deleteData = (poss) => {

        info.splice(poss, 1);
        localStorage.setItem("stdlist", JSON.stringify([...info]));
        // location.reload()
        setInfo([...info])  

    }

    function Updatedata(j) {
        setPos(j)
        let record = info.filter((v, i) => {
            if (i == j) {
                return v;
            }
        })
        setData(record[0]);
        setHob(record[0]["hobby"])

    }


    return (
        <>
            <form action="" method="post" onSubmit={(e) => submitdata(e)} >
                <table align="center" style={{ backgroundColor: "#ecf0f3", padding: "30px", borderRadius: "20px", }}>
                    <tr>
                        <td style={{ fontSize: "24px" }}>Username</td>
                        <td><input type="text" className="inputt" name="username" style={{ width: "300px", fontSize: "24px" }} onChange={(e) => changeIput(e)} value={data.username ? data.username : ""} /></td>
                    </tr>

                    <tr>
                        <td style={{ fontSize: "24px" }}>Password</td>
                        <td><input type="password" className="inputt" name="password" style={{ width: "300px", fontSize: "24px" }} onChange={(e) => changeIput(e)} value={data.password ? data.password : ""} /></td>
                    </tr>

                    <tr>
                        <td style={{ fontSize: "24px" }}>Phone</td>
                        <td><input type="number" className="inputt" name="phone" style={{ width: "300px", fontSize: "24px" }} onChange={(e) => changeIput(e)} value={data.phone ? data.phone : ""} /></td>
                    </tr>


                    <tr>
                        <td style={{ fontSize: "24px" }}>City</td>
                        <td>
                            <select name="city" className="inputt" style={{ width: "332px", fontSize: "24px", color: "black", height: "50px" }} onChange={(e) => changeIput(e)}  >
                                <option value="" >Select City</option>
                                {
                                    city.map((v, i) => {
                                        return (<>
                                            <option value={v} selected={data.city == v ? data.city : ""}>{v}</option>
                                        </>)
                                    })
                                }
                            </select>
                        </td>
                    </tr>


                    <tr>
                        <td style={{ fontSize: "24px" }}>Gender</td>
                        <td style={{ fontSize: "24px" }}><input type="radio" className="inputt" name="gender" style={{ width: "40px" }} onChange={(e) => changeIput(e)} value="male" checked={data.gender == "male" ? "checked" : ""} />Male
                            <input type="radio" name="gender" className="inputt" style={{ width: "40px", fontSize: "24px" }} onChange={(e) => changeIput(e)} value="female" checked={data.gender == "female" ? "checked" : ""} />Female
                        </td>
                    </tr>


                    <tr>
                        <td style={{ fontSize: "24px" }}>Address</td>
                        <textarea name="address" className="inputt" style={{ width: "300px", fontSize: "24px", color: "black", height: "100px", marginTop: "20px", marginBottom: "20px" }} onChange={(e) => changeIput(e)} value={data.address ? data.address : ""}  ></textarea>

                    </tr>

                    <tr>
                        <td style={{ fontSize: "24px" }}>Hobby</td>
                        <td style={{ fontSize: "24px" }}>
                            <input type="checkbox" name="hobby" className="inputt" style={{ width: "40px", fontSize: "24px" }} onChange={(e) => changeIput(e)} value="singing" checked={hob.includes("singing") ? "checked" : ""} />Singing<br></br>
                            <input type="checkbox" name="hobby" className="inputt" style={{ width: "40px", fontSize: "24px" }} onChange={(e) => changeIput(e)} value="reading" checked={hob.includes("reading") ? "checked" : ""} />Reading<br></br>
                            <input type="checkbox" name="hobby" className="inputt" style={{ width: "40px", fontSize: "24px" }} onChange={(e) => changeIput(e)} value="travelling" checked={hob.includes("travelling") ? "checked" : ""} />Travelling<br></br>

                        </td>

                    </tr>


                    <tr>
                        <td style={{ fontSize: "24px" }}><input className="btn" type="submit" name="submit" style={{ width: "300px", fontSize: "24px" }} value={pos == -1 ? "submit" : "edit"} /></td>
                    </tr>


                </table>
            </form >
            <br></br><br></br>
            <h1 style={{ textAlign: "center" }}>Show Data:-</h1>
            <table border={1} align="center">
                <th style={{ width: "150px", fontSize: "24px" }}>Name</th>
                <th style={{ width: "150px", fontSize: "24px" }}>Password</th>
                <th style={{ width: "150px", fontSize: "24px" }}>Number</th>
                <th style={{ width: "150px", fontSize: "24px" }}>City</th>
                <th style={{ width: "150px", fontSize: "24px" }}>Gender</th>
                <th style={{ width: "150px", fontSize: "24px" }}>Address</th>
                <th style={{ width: "150px", fontSize: "24px" }}>Hobbies</th>





                <th style={{ width: "80px", fontSize: "24px" }}>Delete</th>
                <th style={{ width: "80px", fontSize: "24px" }}>Update</th>


                {
                    info.map((val, index) => {
                        return (
                            <>
                                <tr>
                                    <td style={{ width: "200px", fontSize: "24px" }}>{val.username}</td>
                                    <td style={{ width: "200px", fontSize: "24px" }}>{val.password}</td>
                                    <td style={{ width: "200px", fontSize: "24px" }}>{val.phone}</td>
                                    <td style={{ width: "200px", fontSize: "24px" }}>{val.city}</td>
                                    <td style={{ width: "200px", fontSize: "24px" }}>{val.gender}</td>
                                    <td style={{ width: "200px", fontSize: "24px" }}>{val.address}</td>
                                    <td style={{ width: "200px", fontSize: "24px" }}>{val.hobby}</td>




                                    <td style={{ width: "80px", fontSize: "24px" }}>
                                        <button style={{ fontSize: "24px" }} onClick={() => deleteData(index)}>Delete</button></td>
                                    <td style={{ width: "80px", fontSize: "24px" }}>
                                        <button style={{ fontSize: "24px" }} onClick={() => Updatedata(index)}>Update</button></td>






                                </tr>
                            </>
                        )
                    })
                }
            </table>

        </>
    )
}
export default Formlocalstorage;