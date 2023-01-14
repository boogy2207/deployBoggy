const { Book } = require("../db");

const deleteBook = async (id, title) => {
   try {
      if (!id && !title) throw "Send an id or a title";
      if (id && !title) {
         const bookFound = await Book.findByPk(id);
         if (!bookFound) throw `The book with ${id} does not exist`;
         await Book.destroy({ where: { id: id } });
         return "Book deleted";
      }
      if (!id && title) {
         const bookFound = await Book.findByPk(title);
         if (!bookFound) throw `The book with ${title} does not exist`;
         await Book.destroy({ where: { title: title } });
         return "Book deleted";
      }
   } catch (error) {
      throw error;
   }
};

module.exports = { deleteBook };
