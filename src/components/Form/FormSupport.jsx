import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

function FormSupport() {
    return (
        <form onSubmit={e => handleSubmit(e)}>
            <input type="text" value={support}  />

        </form>
    )
}
export default FormSupport;