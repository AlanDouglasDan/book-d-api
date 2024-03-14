const addItem = ({ Collection, data }: any) => {
    const newItem = new Collection(data);
    return newItem.save();
  };
  
  const addMany = ({ Collection, data }: any) => Collection.insertMany(data);
  
  const getAllItems = ({ Collection, find, sort, populate }: any) =>
    Collection.find(find || null)
      .sort(sort || null)
      .populate(populate || null);
  
  const getItem = ({ Collection, find, sort, populate }: any) =>
    Collection.findOne(find || null)
      .sort(sort || null)
      .populate(populate || null);
  
  const updateItem = ({ Collection, find, update }: any) =>
    Collection.updateOne(find, update);
  
  const deleteItem = ({ Collection, find }: any) => Collection.deleteOne(find);
  
  const deleteManyItems = ({ Collection, find }: any) => Collection.deleteMany(find);
  
  export {
    getAllItems,
    getItem,
    addItem,
    addMany,
    updateItem,
    deleteItem,
    deleteManyItems,
  };
  