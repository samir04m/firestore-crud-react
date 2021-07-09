import React from 'react'
import LinkForm from './LinkForm';

import { db } from "../firebase";

const Links = () => {

    const addOrEditLink = async (linkObject) => {
        await db.collection('links').doc().set(linkObject);
        console.log('se ha gaurdado', linkObject);
    }

    return (
        <div>
            <LinkForm addOrEditLink={ addOrEditLink } />
            <hr />
            <h2>Links</h2>
        </div>
    )
}

export default Links;