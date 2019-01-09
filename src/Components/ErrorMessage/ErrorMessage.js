import React from 'react';
import {errors} from "../../Helpers/errors";

const ErrorMessage = ({messages}) =>
    <div>
        <p>{errors[messages]}</p>
    </div>;

export default ErrorMessage;
