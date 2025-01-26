const { dataModel } = require("../models/dataModel");

const searchByKeywordAndType = async (req, res) => {
  try {
    const { keyword, type } = req.query;
    const query = {};

    if (keyword) {
      query.title = { $regex: `\\b${keyword}\\b`, $options: 'i' };
    }
    if (type) {
      query.type = type;
    }

    const result = await dataModel.find(query);

    if (result.length === 0) {
      return res.status(404).json({ message: 'No data found' });
    }

    res.status(200).json({ result });
  } catch (error) {
    console.error('Error in searchByKeywordAndType:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { searchByKeywordAndType };
