import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      minlength: [10, "too short product name"],
    },
    slug: {
      type: String,
      lowercase: true,
    },
    price: {
      type: Number,
      default: 0,
      min: 0,
    },
    priceAfterDiscount: {
      type: Number,
      default: 0,
      min: 0,
    },
    description: {
      type: String,
      maxlength: [
        100,
        "description should be less than or equal to 100 characters",
      ],
      minlength: [10, "too short product description"],

      trim: true,
    },
    stock: {
      type: Number,
      default: 0,
      min: 0,
    },
    sold: {
      type: Number,
      default: 0,
      min: 0,
    },
    imgCover: {
      type: String,
    },
    images: {
      type: [String],
    },
    category: {
      type: Schema.ObjectId,
      ref: "category",
      required: true,
    },
    subcategory: {
      type: Schema.ObjectId,
      ref: "subCategory",
      required: true,
    },
    brand: {
      type: Schema.ObjectId,
      ref: " brand",
      required: true,
    },
    ratingAvg: {
      type: Number,
      min: 0,
      max: 5,
    },
    ratingCount: {
      type: Number,
      min: 0,
    },
  },
  { timestamps: true }
);

export const productModel = model("product", productSchema);
