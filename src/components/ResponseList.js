import React from 'react';
import axios from "axios"
import Response from "./Response"

const ResponseList = () => {
    const [responses, setResponses] = React.useState([])
    console.log("ResponseList responses : ", responses)

    // call useEffect to fetch responses

    React.useEffect(() => {
        console.log("ResponseList useEffect")
        axios
        .get('http://localhost:5001/api')
        .then(res => {
            console.log("res.data : ", res.data)
            setResponses(res.data)
        })
        .catch(err => {
            console.log("err : ", err)
        })

    }, [])

    return (
        <>
        <table className="table center is-bordered is-striped is-hoverable" style={{margin: "2px 5px"}} >
            <thead style={{background: "yellow", fontSize:"0.6rem"}}>
            <tr>
            <th>id</th>
            <th>name</th>
            <th>response</th>
            <th>announced plan</th>
            <th>part remote</th>
            <th>full remote</th>
            <th>part travel</th>
            <th>full travel </th>
            <th>website</th>
            <th>type</th>
            </tr>
            </thead>
        {responses.map(response => {
            return <Response response={response} key={response.id} />
        })}
        </table>
        <button className="button" style={{fontSize:"0.6rem"}}>add response</button>
        </>

    );
};

export default ResponseList;