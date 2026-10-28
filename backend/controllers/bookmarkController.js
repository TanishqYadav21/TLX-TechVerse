import Bookmark from "../models/Bookmark.js";

export const addBookmark = async (req, res) => {
  try {
    const { questionId } = req.body;

    const exists = await Bookmark.findOne({
      user: req.user.id,
      questionId,
    });

    if (exists) {
      return res.json({
        success: true,
        message: "Already bookmarked",
      });
    }

    const bookmark = await Bookmark.create({
      user: req.user.id,
      questionId,
    });

    res.status(201).json({
      success: true,
      bookmark,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getBookmarks = async (req, res) => {
  try {
    const bookmarks = await Bookmark.find({
      user: req.user.id,
    });

    res.json({
      success: true,
      bookmarks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteBookmark = async (req, res) => {
  try {
    await Bookmark.findOneAndDelete({
      user: req.user.id,
      questionId: req.params.id,
    });

    res.json({
      success: true,
      message: "Bookmark Removed",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};