import React from 'react';
import { useLoginModalContext } from "../../context/LoginModalContext";
import { useUserAuthContext } from "../../context/UserAuthContext";
import { useAlbumModalContext } from "../../context/AlbumModalContext";

function WantButton(master) {
    const { authenticated } = useUserAuthContext();
    const { toggleLoginModalVisibility } = useLoginModalContext();
    const { toggleAlbumModalVisibility, openAlbumModalWithAlbumData } = useAlbumModalContext();

    const handleWantButtonClick = (master) => {
        if (authenticated) {
            const master_with_status = {...master, status: "Want"};
            openAlbumModalWithAlbumData(master_with_status);
        }
        else {
            toggleLoginModalVisibility();
        }
    }

    return (
            <>
            <button className="border-2 border-solid" 
            onClick={() => handleWantButtonClick(master)}>Want</button>
            </>
        )
}

export { WantButton };