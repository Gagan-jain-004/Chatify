import {create } from "zustand"
import { axiosInstance } from "../lib/axios"


// general meaning of below
// it returns a object ,  =>{ write inside this is initial state of variable as below authstate ko null krdiya 
// becoz we dont know user is authenticated or not , is checkingauth ki initial state true likha taki jab tak check na hojata loading dikhe  }

export const useAuthStore = create ((set)=>(
    {authUser: null,          // initial state set to null 
        isSigningUp:false,
        isLoggingIng:false,
        isUpdateProfile:false,

        isCheckingAuth: true,       // true so loading till get authenticated 

        checkAuth: async ()=>{
            try {
                const res = await axiosInstance.get("/auth/check");
                set({authUser:res.data});
            } catch (error) {
                console.log("Error in checkAuth:",error);
                set({authUser:null});
            }finally{
                set({isCheckingAuth:false});
            }
        }
    }
))