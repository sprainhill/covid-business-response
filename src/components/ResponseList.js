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
        <table class="table">
            <thead>
            <tr>
            <th>id</th>
            <th>business name</th>
            <th>response</th>
            <th>announced plan</th>
            <th>partial remote policy</th>
            <th>full remote policy</th>
            <th>partial travel restr</th>
            <th>full travel restr</th>
            <th>website</th>
            <th>public/private</th>
            </tr>
            </thead>
        {responses.map(response => {
            return <Response response={response} key={response.id} />
        })}
        </table>
    );
};

export default ResponseList;