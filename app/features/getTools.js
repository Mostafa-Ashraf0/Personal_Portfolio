

const getTools = async()=>{
    try{
        const res = await fetch(`http://localhost:1337/api/tools?populate=*`);
        if (!res.ok) throw new Error('failed to load Projects');
        const data = await res.json();
        return data;
    }catch(error){
        alert(error.message)
    }
};

export {getTools};