import React from 'react';

const Response = props => {
    console.log("Response props : ", props.response)
    const {id, business_name, response, announced_plan, partial_remote_policy, full_remote_policy, restrict_employee_travel_partial, restrict_employee_travel_full, website, priv} = props.response
    return (
        <tbody style={{fontSize:"0.6rem"}}>
        <tr >
            <td>{id}</td>
            <td>{business_name}</td>
            <td>{response}</td>
            <td>{announced_plan}</td>
            <td>{partial_remote_policy}</td>
            <td>{full_remote_policy}</td>
            <td>{restrict_employee_travel_partial}</td>
            <td>{restrict_employee_travel_full}</td>
            <td>{website}</td>
            <td>{priv}</td>
        </tr>
        </tbody>
    );
};

export default Response;