import api from "./axiosInstance";

export const getSnippets= async()=>{
    const response=await api.get("/snippets");
    return response.data.data
};

export const getSnippetbyID=async(id)=>{
    const response=await api.get(`/snippets/${id}`);
    return response.data.data
}

export const createSnippet=async(snippetData)=>{
    const response=await api.post("/snippets",snippetData);
    return response.data.data;

}

export const updateSnippet = async(id,updatedData)=>{
    const response=await api.put(`/snippets/${id}`,updatedData)
    return response.data.data;
}

export const deleteSnippet=async(id)=>{
    const response=await api.delete(`/snippets/${id}`)
    return response.data.data;
}