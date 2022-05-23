import React from 'react';


const DUMMY = [
    {
        "title": "src",
        "isFolder": true,
        "items": [
            {
                "title": "component.js",
                "isFolder": false,
                "items": []
            },
            {
                "title": "script.js",
                "isFolder": false,
                "items": []
            }
        ]
    },
    {
        "title": "package.js",
        "isFolder": false,
        "items": []
    },
    {
        "title": "Address",
        "isFolder": true,
        "items": [
            {
                "title": "local.js",
                "isFolder": false,
                "items": []
            },
            {
                "title": "permanent",
                "isFolder": true,
                "items": [
                    {
                        "title": "permanentDelhi",
                        "isFolder": true,
                        "items": [
                            {
                                "title": "Okhla.js",
                                "isFolder": false,
                                "items": []
                            },
                            {
                                "title": "Hamdard.js",
                                "isFolder": false,
                                "items": []
                            }
                        ]
                    },
                    {
                        "title": "permanentBareilly.js",
                        "isFolder": false,
                        "items": []
                    }
                ]
            },
        ]
    },
    {
        "title": "contact.js",
        "isFolder": false,
        "items": []
    }
];


const Sidebar = () => {

    const toggle = (e)=>{     
        const sibling = e.target.nextElementSibling;
        if(getComputedStyle(sibling).display === "block"){
            sibling.style.display = "none";
        }else{
            sibling.style.display = "block";
        }
    }
        

//THIS IS RECURSIVE FUNCTON(contains main logic)

     const nested = (val)=>{
        if(!val.isFolder){
            return <div>
                <img src="https://cdn.iconscout.com/icon/free/png-256/javascript-3629449-3031512.png" alt="" width="15"/>
                    {val.title}
                </div>
        }else{            
            return( 
                <>
                 <img src="https://icons-for-free.com/download-icon-files+folder+icon-1320196394707568948_512.png" width="20" alt="" /><a href='#' onClick={toggle} style={{color:''}}> {val.title}</a>
                    <div style={{paddingLeft:'20px',display:'none'}}>
                    {
                        val.items.map((item)=>{
                        return nested(item);                
                        })
                    }
                    </div>
                </>               
            )
        }
     }

    return (
        <div>
            <div style={{ border: '2px solid black', width:'50%', paddingLeft:'10px', backgroundColor: '#484848',color: 'white'}}>
                {
                    DUMMY.map((option) => {
                     return  nested(option);
                    })
                }
            </div>
        </div>
    );
}

export default Sidebar;

