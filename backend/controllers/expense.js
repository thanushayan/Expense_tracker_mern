const ExpenseSchema = require("../models/IncomeModel");

exports.addExpense = async (req, res) => {
    const { title, amount, category, description, date } = req.body;

    // Create income instance
    const income = new ExpenseSchema({
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

        if (amount <= 0 || !amount === 'number') {
            return res.status(400).json({ message: 'Amount must be a positive number!' });
        }

        // Save income to the database
        await income.save();
        res.status(200).json({ message: 'Expense Added' });

        

    } catch (error) {
        console.error('Error adding encome:', error.message);  
        res.status(500).json({ message: 'Server Error' });
    }
    console.log(income)
}

 
  exports.getExpense = async (req,res) =>{
    try {
        const incomes = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)  

    }
    catch(error)
    {
        res.status(500).json({message : 'Server Error '})

    }
}
  

 
exports.deleteExpense = async (req,res) =>{
    const {id} = req.params;
    
    ExpenseSchema.findByIdAndDelete(id)
    .then((income) =>{
        res.status(200).json({message:'Expense Deleted'})
    })
    .catch((err)=>{
        res.status(500).json({message:'Server Error'})
    })
   
}