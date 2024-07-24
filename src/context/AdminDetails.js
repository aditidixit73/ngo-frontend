import { createContext, useContext,useState } from "react";
import  Axios  from "axios";

export const AdminDetails = createContext();

export const DetailProvider =({children})=>{
    
    const [ user, setUser] = useState(false)
    const [ mission, setMission] = useState({})
    const [ about, setAbout] = useState({})
    const [ genbody, setgenBody] = useState([])
    const [ slider, setSlider] = useState([])
    const [ gallery, setGallery] = useState([])
    const [ exebody, setexeBody] = useState([])
    const getData = async ()=>{
        var response=localStorage.getItem("token")?true:false;
        if(response){await Axios.get("https://serverforngopslpms.vercel.app/getdata/user",{headers:{"Authorization":localStorage.getItem("token")}}).then(
            (res)=>{
                response=res.data
            }
        ).catch((err)=>{
            response=false
    })}
    return response
    };
    const handleLogout=()=>{
        localStorage.removeItem("token");
        setUser(false);
    }
    const getAbout = async ()=>{
        var response
        await Axios.get("https://serverforngopslpms.vercel.app/getdata/about",{headers:{"Authorization":localStorage.getItem("token")}}).then(
            (res)=>{
                response=res.data
            }
        ).catch((err)=>{
            response=false
    })
    return response
    };
    const getMission = async ()=>{
        var response
        await Axios.get("https://serverforngopslpms.vercel.app/getdata/mission",{headers:{"Authorization":localStorage.getItem("token")}}).then(
            (res)=>{
                response=res.data
            }
        ).catch((err)=>{
            response=false
    })
    return response
    };
    const getSlider = async ()=>{
        var response
        await Axios.get("https://serverforngopslpms.vercel.app/getdata/slider",{headers:{"Authorization":localStorage.getItem("token")}}).then(
            (res)=>{
                response=res.data
            }
        ).catch((err)=>{
            response=false
    })
    return response
    };
    const getImages = async ()=>{
        var response
        await Axios.get("https://serverforngopslpms.vercel.app/getdata/gallery",{headers:{"Authorization":localStorage.getItem("token")}}).then(
            (res)=>{
                response=res.data
            }
        ).catch((err)=>{
            response=false
    })
    return response
    };
    const getActivity = async ()=>{
        var response
        await Axios.get("https://serverforngopslpms.vercel.app/getdata/activity",{headers:{"Authorization":localStorage.getItem("token")}}).then(
            (res)=>{
                response=res.data
            }
        ).catch((err)=>{
            response=false
    })
    return response
    };
    const getFeatActivity = async ()=>{
        var response
        await Axios.get("https://serverforngopslpms.vercel.app/getdata/activity/feat",{headers:{"Authorization":localStorage.getItem("token")}}).then(
            (res)=>{
                response=res.data
            }
        ).catch((err)=>{
            response=false
    })
    return response
    };
    const getBodies = async ()=>{
        var response
        await Axios.get("https://serverforngopslpms.vercel.app/getdata/body",{headers:{"Authorization":localStorage.getItem("token")}}).then(
            (res)=>{
                response=res.data
            }
        ).catch((err)=>{
            response=false
    })
    return response
    };
    const getExeBodies = async ()=>{
        var response
        await Axios.get("https://serverforngopslpms.vercel.app/getdata/body/exe",{headers:{"Authorization":localStorage.getItem("token")}}).then(
            (res)=>{
                response=res.data
            }
        ).catch((err)=>{
            response=false
    })
    return response
    };


    return (<AdminDetails.Provider value={{getActivity,getFeatActivity,getImages,gallery, setGallery,getData,user,setUser,handleLogout,getAbout,about,setAbout,getMission,mission,setMission,genbody,getBodies,setgenBody,exebody,getExeBodies,setexeBody,getSlider,setSlider,slider}}>
        {children}
    </AdminDetails.Provider>)

}
export function useLogin(){
        const AdminDetailsValue = useContext(AdminDetails); 
        if(!AdminDetailsValue){
            throw new Error("useAuth used outside");
        }
    return AdminDetailsValue;
}