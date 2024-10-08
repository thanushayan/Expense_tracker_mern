const IncomeSchema = require("../models/IncomeModel");

exports.addIncome = async (req, res) => {
    const { title, amount, category, description, date } = req.body;

    // Create income instance
    const income = new IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    });

    try {
        // Validations
        if (!title || !category || !description || !date) {
            return res.status(400).json({ message: 'All fields are required!' });
        }

        if (typeof amount !== 'number' || amount <= 0) {
            return res.status(400).json({ message: 'Amount must be a positive number!' });
        }

        // Save income to the database
        await income.save();
        res.status(200).json({ message: 'Income Added' });

        

    } catch (error) {
        console.error('Error adding income:', error.message);  
        res.status(500).json({ message: 'Server Error' });
    }
    console.log(income)
}

 
  exports.getIncomes = async (req,res) =>{
    try {
        const incomes = await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)  

    }
    catch(error)
    {
        res.status(500).json({message : 'Server Error '})

    }
}
  

 
exports.deleteIncome = async (req,res) =>{
    const {id} = req.params;
    
    IncomeSchema.findByIdAndDelete(id)
    .then((income) =>{
        res.status(200).json({message:'Income Deleted'})
    })
    .catch((err)=>{
        res.status(500).json({message:'Server Error'})
    })
   
}