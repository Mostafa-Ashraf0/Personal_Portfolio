const url = process.env.NEXT_PUBLIC_API_URL;

const getContactLinks = async()=>{
    try{
        const res = await fetch(`${url}/api/links?filters[key][$in][0]=4&filters[key][$in][1]=5&populate=*`);
        if (!res.ok) throw new Error('failed to load links');
        const data = await res.json();
        return data;
    }catch(error){
        alert(error.message)
    }
};

export {getContactLinks};