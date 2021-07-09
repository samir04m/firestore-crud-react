import React, { useEffect, useState } from 'react'
import LinkForm from './LinkForm';
import { db } from "../firebase";
import { toast } from "react-toastify";

const Links = () => {

    const [links, setLinks] = useState([])

    const addOrEditLink = async (linkObject) => {
        await db.collection('links').doc().set(linkObject);
        toast("New Link Added", {
            type: "success",
        });
    }

    const getLinks = async () => {
        db.collection('links').onSnapshot((querySnapshot) => {

            const docs = [];
            querySnapshot.forEach(doc => {
                docs.push({ ...doc.data(),  id: doc.id });
            })
            setLinks(docs);
        });
    }

    const onDeleteLink = async (id) => {
        if (window.confirm("are you sure you want to delete this link?")) {
            await db.collection("links").doc(id).delete();
            toast("Link Removed Successfully", {
                type: "error",
                autoClose: 2000
            });           
        }
    };
    

    useEffect(() => {
        console.log('getting data ...');
        getLinks();
    }, []);

    return (
        <>
            <div className="col-lg-6 mb-5">
                <LinkForm addOrEditLink={ addOrEditLink } />
            </div>

            <div className="offset-lg-1 col-lg-5">
                <h2>Links</h2>
                <hr className="border-primary" />  

                {
                    links.map((link) => (
                        <div className="card mb-1" key={link.id}>
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <h4>{link.name}</h4>
                                    <div>
                                        <i
                                            className="material-icons text-danger"
                                            onClick={() => onDeleteLink(link.id)}
                                            role="button"
                                        >
                                            close
                                        </i>
                                        <i
                                            className="material-icons"
                                            // onClick={() => setCurrentId(link.id)}
                                            role="button"
                                        >
                                            create
                                        </i>
                                    </div>
                                </div>
                                <p>{link.description}</p>
                                <a href={link.url} target="_blank" rel="noopener noreferrer">Go to Website</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Links;