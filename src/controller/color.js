import { colorSchema } from "../model/color";
import Colors from "../mongo/color";
export const getAllColor = async (req, res) => {
  try {
    const Color = await Colors.find();
    return res.status(200).json(Product);
  } catch (error) {
    return res.status(400).json({
      message: error,
    });
  }
};
export const getOneColor = async (req, res) => {
  try {
    const data = await Colors.findById(req.params.id);

    if (data.length === 0) {
      return res.status(200).json({
        message: "Không có dữ liệu",
      });
    }
    return res.json(data);
  } catch (err) {
    return res.status(404).json({
      message: err,
    });
  }
};

export const createColor = async (req, res) => {
  try {
    const { error } = colorSchema.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }

    const color = await Colors.create(req.body);
    return res.status(200).json({
      message: "Thêm màu thành công",
      color,
    });
  } catch (err) {
    return res.status(404).json({
      message: err,
    });
  }
};

export const editColor = async (req, res) => {
  try {
    const { error } = colorSchema.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }

    const data = await Colors.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (data.length === 0) {
      return res.status(200).json({
        message: "Cập nhật dữ liệu không thành công",
      });
    }
    return res.status(200).json({
      message: "Cập nhật sản phẩm thành công",
      data,
    });
  } catch (err) {
    return res.status(404).json({
      message: err,
    });
  }
};

export const delColor = async (req, res) => {
  try {
    const data = await Colors.findOneAndDelete({ _id: req.params.id });

    return res.json({
      message: "Xóa dữ liệu thành công",
    });
  } catch (err) {
    return res.status(404).json({
      message: err,
    });
  }
};
