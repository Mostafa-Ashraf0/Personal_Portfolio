const url = process.env.NEXT_PUBLIC_API_URL;

const getProjectById = async(id)=>{
    try{
        const res = await fetch(`${url}/api/projects?filters[id][$eq]=${id}&populate=*`);
        if (!res.ok) throw new Error('failed to load Projects');
        const data = await res.json();
        return data;
    }catch(error){
        alert(error.message)
    }
};

export {getProjectById};