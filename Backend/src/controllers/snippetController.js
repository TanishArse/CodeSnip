import Snippet from "../models/snippetModel.js";
const getAllSnippets=async(req,res)=>{
    try{
        const snippets = await Snippet.find();

        res.status(200).json({
            success:true,
            data:snippets
        })

    }catch(error){
        res.status(500).json({
            success: false,
            message: error.message
            

        })

    }
}

const getSingleSnippet=async(req,res)=>{
    try{
        const {id}=req.params;
        const snippet=await Snippet.findById(id);
        if(!snippet){
            return res.status(404).json({
                success:false,
                message:'snippet not found'
            })
        }
        return res.status(200).json({
            success:true,
            data:snippet
        })

    }catch(error){
    if (error.name === 'CastError') {
      return res.status(400).json({ 
        success: false, 
        message: 'Invalid snippet ID format' 
      });
    }

    return res.status(500).json({ 
      success: false, 
      message: 'Server error while fetching snippet',
      error: error.message 
    });
  }
};

const createSnippet=async(req,res)=>{
    try{
         console.log("Received snippet:", req.body);
        const newSnippet=await Snippet.create(req.body)
        res.status(201).json({
            success:true,
            data: newSnippet,
            message:'saved successfully'
        })

    }catch(error){res.status(500).json({
        
        success:false,
        message:'enter a valid snippet'

    })
    console.error("CREATE SNIPPET ERROR:", error);
       

    }

}

const updateSnippet=async(req,res)=>{
    try{
        const updatedSnippet=await Snippet.findByIdAndUpdate(
            req.params.id,
            req.body,
            { returnDocument: 'after', runValidators: true }
        )
        if (!updatedSnippet) {
    return res.status(404).json({
        success: false,
        message: "Snippet not found"
    });
}
        res.status(200).json({
            success:true,
            message:'updated successfully',
            data:updatedSnippet
        })

    }catch(error){
         if(error.name==="CastError"){
            return res.status(400).json({
                success:false,
                message:'invalid ID'
            })
        }
        res.status(500).json({
        success:false,
        message:error.message

    }

    )
    
}
}

const deleteSnippet= async(req,res)=>{
    try{
        const deletedSnippet = await Snippet.findByIdAndDelete(req.params.id);
        if(!deletedSnippet){
            return res.status(404).json({
                message:'snippet not found',
                success:false
            })

        }
        res.status(200).json({
            success:true,
            message:'deleted successfully',
            data:deletedSnippet
        })

    }catch(error){
        if(error.name==="CastError"){
            return res.status(400).json({
                success:false,
                message:'invalid ID'
            })
        }



        res.status(500).json({
        success:false,
        message:error.message

    }

    )

    }
}

export{getAllSnippets,
    getSingleSnippet,
    createSnippet,
    updateSnippet,
deleteSnippet}