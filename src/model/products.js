import joi from "joi";
function errorMessages(fieldName) {
  return {
    "string.base": `${fieldName} phải là chuỗi`,
    "string.empty": `${fieldName} không được để trống`,
    "string.email": `${fieldName} phải là email`,
    "string.min": `${fieldName} phải dài hơn 6 ký tự`,

    "number.base": `${fieldName} phải là số`,
    "number.empty": `${fieldName} là bắt buộc`,
    "number.min": `${fieldName} phải lớn hơn 0`,

    "array.base": `${fieldName} phải là mảng`,
    "array.min": `${fieldName} không được để trống`,
    "object.base": `${fieldName} phải là đối tượng`,

    "any.required": `${fieldName} là bắt buộc`,
    "any.only": `${fieldName} không khớp`,
  };
}
export const ModelProducts = joi.object({
  name: joi.string().required(),
  price: joi.number().required(),
  desc: joi.string().required(),
  images: joi.string().required(),
  soLuong: joi.number().required(),
  category_id: joi.string().required(),
});
export const productSchema = joi.object({
  name: joi.string().required().messages(errorMessages("Tên")),

  short_description: joi
    .string()
    .required()
    .messages(errorMessages("Mô tả ngắn")),
  desc: joi.string().required().messages(errorMessages("Mô tả")),
  category_id: joi.string().required().messages(errorMessages("Danh mục")),
  images: joi
    .array()
    .min(1)
    .required()
    .items(
      joi.object({
        _id: joi.string().optional(),
        base_url: joi.string().required().messages(errorMessages("Ảnh gốc")),
        is_gallery: joi.boolean().optional(),
        label: joi.string().allow(null).optional(),
        large_url: joi.string().optional(),
        medium_url: joi.string().optional(),
        position: joi.string().allow(null).optional(),
        small_url: joi.string().optional(),
        thumbnail_url: joi.string().optional(),
      })
    )
    .messages(errorMessages("Ảnh")),
  variants: joi
    .array()
    .optional()
    .required()
    .items(
      joi.object({
        _id: joi.string().optional(),
        capacity: joi.string().optional(),
        price: joi.number().min(1).required().messages(errorMessages("Giá")),
        original_price: joi
          .number()
          .min(1)
          .required()
          .messages(errorMessages("Giá gốc")),

        nameColor: joi.string(),
        codeColor: joi.string(),

        soLuong: joi
          .number()
          .min(1)
          .required()
          .messages(errorMessages("Số lượng")),
      })
    ),
  specifications: joi
    .array()
    .optional()
    .required()
    .items(
      joi.object({
        _id: joi.string().optional(),
        name: joi.string().required().messages(errorMessages("Tên thông số")),
        attributes: joi
          .array()
          .required()
          .items(
            joi.object({
              _id: joi.string().optional(),
              code: joi.string().required().messages(errorMessages("Code")),
              name: joi.string().required().messages(errorMessages("Name")),
              value: joi.string().required().messages(errorMessages("Value")),
            })
          )
          .messages(errorMessages("Thuộc tính")),
      })
    )
    .messages(errorMessages("Thông số")),
});
