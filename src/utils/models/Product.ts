import { Schema, model, models } from 'mongoose';

const productSchema = new Schema({
  imgSrc: {
    type: String,
  },
  fileKey: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
});

const Product = models.Product || model('Product', productSchema);
// If 'models' has a product, we are going to use it otherwise we'll create a new Product model in our database

export default Product;
