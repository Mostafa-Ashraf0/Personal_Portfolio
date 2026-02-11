
const getProjectById = async(id)=>{
    try{
        const res = await fetch(`http://localhost:1337/api/projects?filters[id][$eq]=${id}&populate=*`);
        if (!res.ok) throw new Error('failed to load Projects');
        const data = await res.json();
        return data;
    }catch(error){
        alert(error.message)
    }
};

export {getProjectById};