const url = process.env.NEXT_PUBLIC_API_URL;

const getLinks = async()=>{
    try{
        const res = await fetch(`${url}/api/links?filters[key][$in][0]=1&filters[key][$in][1]=2&filters[key][$in][2]=3&populate=*`);
        if (!res.ok) throw new Error('failed to load links');
        const data = await res.json();
        return data;
    }catch(error){
        alert(error.message)
    }
};

export {getLinks};