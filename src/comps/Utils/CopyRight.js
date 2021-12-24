import React from "react";
import CopyrightIcon from "@material-ui/icons/Copyright";

function CopyRight() {
    return (
        <div className='created'>
            <a
                href='https://www.facebook.com/profile.php?id=100005962092615'
                style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            >
                <CopyrightIcon style={{ marginRight: "10px", marginTop: "3px" }} />
                <span>created by aziz</span>
            </a>
        </div>
    );
}

export default CopyRight;
