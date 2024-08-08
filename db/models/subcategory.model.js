import { Schema, model } from "mongoose";

const subCategorySchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      minlength: [2, "too short subCategory name "],
    },
    slug: {
      type: String,
      lowercase: true,
    },
    category: {
      type: Schema.ObjectId,
      required: true,
      ref: "category",
    },
  },
  { timestamps: true }
);

export const subCategoryModel = model("subCategory", subCategorySchema);
